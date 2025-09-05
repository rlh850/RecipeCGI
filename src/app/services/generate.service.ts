import { llmClient } from '../llm/client';
import { generateRepository } from '../repository/generate.repository';
import { toolExecutors } from '../llm/tools';

export const generateService = {
   async sendMessage(message: string, id: string) {
      const response = await llmClient.generateText({
         prompt: message,
         previousResponseId: generateRepository.getLastResponseId(id),
      });
      generateRepository.setLastResponseId(id, response.id);

      // Execute tool calls if present
      if (response.toolCalls && response.toolCalls.length > 0) {
         const results = [];

         for (const toolCall of response.toolCalls) {
            if (toolCall.name in toolExecutors) {
               try {
                  const executor =
                     toolExecutors[toolCall.name as keyof typeof toolExecutors];
                  const result = await executor(
                     toolCall.arguments as Parameters<typeof executor>[0]
                  );
                  results.push({
                     toolCall,
                     result,
                  });
               } catch (error) {
                  console.error(
                     `Error executing tool ${toolCall.name}:`,
                     error
                  );
                  results.push({
                     toolCall,
                     error:
                        error instanceof Error
                           ? error.message
                           : 'Unknown error',
                  });
               }
            }
         }

         return {
            id: response.id,
            text: response.text,
            toolCalls: response.toolCalls,
            results,
         };
      }

      return response;
   },
};
