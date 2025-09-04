import { llmClient } from '../llm/client';
import { chatRepository } from '../repository/chat.repository';

export const chatService = {
   async sendMessage(message: string, id: string) {
      const response = await llmClient.generateText({
         prompt: message,
         previousResponseId: chatRepository.getLastResponseId(id),
      });
      chatRepository.setLastResponseId(id, response.id);
      return response;
   },
};
