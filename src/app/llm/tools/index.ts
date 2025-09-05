/**
 * LLM Tools Index
 *
 * Central export point for all LLM tools and their implementations.
 */

import {
   recipeGeneratorTool,
   executeRecipeGenerator,
} from './recipe-generator';

// Export all tool definitions for LLM function calling
export const tools = [
   recipeGeneratorTool,
   // Add more tools here as they are created
];

// Export tool execution functions
export const toolExecutors = {
   generate_recipe: executeRecipeGenerator,
   // Add more tool executors here
};

// Export types
export type {
   RecipeGeneratorParams,
   GeneratedRecipe,
} from './recipe-generator';
