'use client';

import { useState } from 'react';
import { RecipeCard, Recipe } from './recipe-card';
import { useIngredientsContext } from '@/contexts/ingredients-context';

export function RecipeDisplay() {
   const { startCooking, generatedRecipes, isGenerating } =
      useIngredientsContext();
   const [checkedIngredients, setCheckedIngredients] = useState<
      Record<string, boolean>
   >({});

   const toggleIngredient = (recipeId: string, ingredientName: string) => {
      const key = `${recipeId}-${ingredientName}`;
      setCheckedIngredients((prev) => ({
         ...prev,
         [key]: !prev[key],
      }));
   };

   const handleStartCooking = (recipe: Recipe) => {
      console.log('Starting cooking for recipe:', recipe.id);
      startCooking(recipe.title);
   };

   const handleSaveRecipe = (recipeId: string) => {
      console.log('Saving recipe:', recipeId);
      alert('Recipe saved! (Feature coming soon)');
   };

   if (isGenerating) {
      return (
         <div className="w-full space-y-6">
            <div className="text-center py-12">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
               <p className="text-muted-foreground">
                  Generating your recipes...
               </p>
            </div>
         </div>
      );
   }

   if (generatedRecipes.length === 0) {
      return (
         <div className="w-full space-y-6">
            <div className="text-center py-12">
               <p className="text-muted-foreground">
                  No recipes generated yet. Add some ingredients and click
                  "Generate Recipes" to get started!
               </p>
            </div>
         </div>
      );
   }

   return (
      <div className="w-full space-y-6">
         <div className="grid gap-6">
            {generatedRecipes.map((recipe) => (
               <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  checkedIngredients={checkedIngredients}
                  onToggleIngredient={toggleIngredient}
                  onStartCooking={() => handleStartCooking(recipe)}
                  onSaveRecipe={() => handleSaveRecipe(recipe.id)}
               />
            ))}
         </div>
      </div>
   );
}
