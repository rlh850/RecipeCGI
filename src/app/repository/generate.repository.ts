const generate = new Map<string, string>();

export const generateRepository = {
   setLastResponseId(generateId: string, responseId: string) {
      return generate.set(generateId, responseId);
   },

   getLastResponseId(generateId: string) {
      return generate.get(generateId);
   },
};
