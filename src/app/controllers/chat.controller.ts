import { chatRepository } from "../repository/chat.repository";

import z from "zod";
import { chatService } from "../services/chat.service";

const sendMessageSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(1000, "Message too long"),
  id: z.string().uuid(),
});

export interface RequestBody {
  id?: string;
  message: string;
}

export const chatController = {
  async sendMessage(body: RequestBody) {
    try {
      const validatedData = sendMessageSchema.safeParse(body);

      if (!validatedData.success) {
        return {
          error: "Validation failed",
          details: validatedData.error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        };
      }

      const response = await chatService.sendMessage(
        validatedData.data.message,
        validatedData.data.id,
      );
      return response;
    } catch (error) {
      return { error: "Failed to generate a response." };
    }
  },
};
