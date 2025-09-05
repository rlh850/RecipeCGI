import z from 'zod';
import { generateService } from '../services/generate.service';

const sendMessageSchema = z.object({
   message: z
      .string()
      .min(1, 'Message cannot be empty')
      .max(1000, 'Message too long'),
   id: z.string().uuid(),
});

export interface RequestBody {
   id?: string;
   message: string;
}

export const generateController = {
   async sendMessage(body: RequestBody) {
      try {
         const validatedData = sendMessageSchema.safeParse(body);

         if (!validatedData.success) {
            return {
               error: 'Validation failed',
               details: validatedData.error.errors.map((err) => ({
                  field: err.path.join('.'),
                  message: err.message,
               })),
            };
         }

         const response = await generateService.sendMessage(
            validatedData.data.message,
            validatedData.data.id
         );
         return response;
      } catch (error) {
         console.error('Error in generateController:', error);
         return {
            error: 'Failed to generate a response.',
            details: error instanceof Error ? error.message : 'Unknown error',
         };
      }
   },
};
