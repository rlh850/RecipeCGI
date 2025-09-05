export const recipeGeneratorTool = {
   type: 'function' as const,
   name: 'generate_recipe',
   description:
      'Generate a recipe based on available ingredients. Returns a complete recipe with title, cooking time, difficulty, ingredients with amounts, step-by-step instructions, and relevant tags.',
   strict: true,
   parameters: {
      type: 'object',
      properties: {
         recipe_name: {
            type: 'string',
            description:
               'Simple, concise recipe name (e.g., "Chicken Fried Rice", "Garlic Butter Pasta")',
            minLength: 3,
            maxLength: 50,
         },
         ingredients: {
            type: 'array',
            description:
               'List of available ingredients provided by the user. ONLY use these ingredients in the recipe - do not add any additional ingredients not in this list.',
            items: { type: 'string' },
            minItems: 1,
            maxItems: 20,
         },
         dietary_restrictions: {
            type: 'array',
            description:
               'Optional dietary restrictions to consider (e.g., vegetarian, vegan, gluten-free, dairy-free)',
            items: { type: 'string' },
            minItems: 0,
            default: [],
         },
         meal_type: {
            type: ['string', 'null'],
            description: 'Type of meal to prepare',
            enum: [
               'breakfast',
               'lunch',
               'dinner',
               'snack',
               'dessert',
               'appetizer',
            ],
            default: null,
         },
         cooking_time: {
            type: ['number', 'null'],
            description:
               'Maximum cooking time in minutes (optional constraint)',
            default: null,
         },
         difficulty: {
            type: ['string', 'null'],
            description: 'Preferred difficulty level',
            enum: ['Easy', 'Medium', 'Hard'],
            default: null,
         },
         cuisine_type: {
            type: ['string', 'null'],
            description:
               'Preferred cuisine style (e.g., Italian, Mexican, Asian, Mediterranean)',
            default: null,
         },
         servings: {
            type: ['number', 'null'],
            description: 'Number of servings needed',
            minimum: 1,
            maximum: 12,
            default: null,
         },

         instructions: {
            type: 'array',
            description: 'Step-by-step cooking instructions as strings',
            items: { type: 'string' },
            minItems: 0,
            default: [],
         },
      },

      required: [
         'recipe_name',
         'ingredients',
         'dietary_restrictions',
         'meal_type',
         'cooking_time',
         'difficulty',
         'cuisine_type',
         'servings',
         'instructions',
      ],
      additionalProperties: false,
   },
};

export interface RecipeGeneratorParams {
   recipe_name: string;
   ingredients: string[];
   dietary_restrictions?: string[];
   meal_type?: string;
   cooking_time?: number;
   difficulty?: 'Easy' | 'Medium' | 'Hard';
   cuisine_type?: string;
   servings?: number;
   instructions?: string[];
}

export interface GeneratedRecipe {
   id: string;
   title: string;
   cookTime: number;
   servings: number;
   difficulty: 'Easy' | 'Medium' | 'Hard';
   ingredients: Array<{
      name: string;
      amount: string;
      available: boolean;
   }>;
   instructions: string[];
   tags: string[];
   cuisine?: string;
   description?: string;
}

export async function executeRecipeGenerator(
   params: RecipeGeneratorParams
): Promise<GeneratedRecipe> {
   const {
      recipe_name,
      ingredients,
      dietary_restrictions = [],
      meal_type = 'dinner',
      cooking_time = 30,
      difficulty = 'Easy',
      cuisine_type = 'International',
      servings = 4,
      instructions = [],
   } = params;

   // Generate a unique ID for the recipe
   const recipeId = `recipe_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

   const recipe: GeneratedRecipe = {
      id: recipeId,
      title: recipe_name,
      cookTime: cooking_time,
      servings: servings,
      difficulty: difficulty,
      ingredients: ingredients.map((ingredient) => ({
         name: ingredient,
         amount: '1 portion',
         available: true,
      })),
      instructions: instructions,
      tags: [
         meal_type,
         difficulty,
         cuisine_type,
         ...dietary_restrictions.map((restriction) =>
            restriction.toLowerCase()
         ),
      ].filter(Boolean),
      cuisine: cuisine_type,
      description: `A delicious ${difficulty.toLowerCase()} ${meal_type} featuring ${ingredients.join(', ')}`,
   };

   return recipe;
}

export const tools = [recipeGeneratorTool];
