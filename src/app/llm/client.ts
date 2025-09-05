import OpenAI from 'openai';
import { tools } from './tools';
import dotenv from 'dotenv';
import { systemPrompt } from './prompts/systemInstructions';

dotenv.config();

const openAIClient = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

type GenerateTextOptions = {
   model?: string;
   prompt: string;
   instructions?: string;
   maxTokens?: number;
   previousResponseId?: string;
};

export type GenerateTextResult = {
   id: string;
   text?: string;
   toolCalls?: Array<{
      name: string;
      arguments: unknown;
      call_id?: string;
   }>;
};
// STOP TRYING TO REDO MY CLIENT
export const llmClient = {
   async generateText({
      model = process.env.MODEL,
      prompt,
      instructions = systemPrompt,
      previousResponseId,
   }: GenerateTextOptions): Promise<GenerateTextResult> {
      const response = await openAIClient.responses.create({
         model,
         input: prompt,
         tools: tools as any,
         instructions,
         reasoning: { effort: 'medium' },
         previous_response_id: previousResponseId,
      });
      const output: unknown = (response as any)?.output;
      const toolCalls: Array<{
         name: string;
         arguments: unknown;
         call_id?: string;
      }> = [];

      if (Array.isArray(output)) {
         for (const item of output) {
            if (
               item &&
               typeof item === 'object' &&
               (item as any).type === 'function_call'
            ) {
               const name = (item as any).name as string | undefined;
               const call_id = (item as any).call_id as string | undefined;
               let args: unknown = (item as any).arguments;
               if (typeof args === 'string') {
                  try {
                     args = JSON.parse(args);
                  } catch {
                     // leave as string if not valid JSON
                  }
               }
               if (name) {
                  toolCalls.push({ name, arguments: args, call_id });
               }
            }
         }
      }

      return {
         id: response.id,
         text: (response as any)?.output_text,
         toolCalls,
      };
   },
};
