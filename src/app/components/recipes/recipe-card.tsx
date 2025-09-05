'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { RecipeHeader } from './recipe-header';
import { RecipeIngredients } from './recipe-ingredients';
import { RecipeInstructions } from './recipe-instructions';
import { RecipeActions } from './recipe-actions';

export interface Recipe {
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
}

interface RecipeCardProps {
   recipe: Recipe;
   checkedIngredients: Record<string, boolean>;
   onToggleIngredient: (recipeId: string, ingredientName: string) => void;
   onStartCooking?: () => void;
   onSaveRecipe?: () => void;
}

export function RecipeCard({
   recipe,
   checkedIngredients,
   onToggleIngredient,
   onStartCooking,
   onSaveRecipe,
}: RecipeCardProps) {
   return (
      <Card className="overflow-hidden">
         <CardHeader className="pb-4">
            <RecipeHeader
               title={recipe.title}
               cookTime={recipe.cookTime}
               servings={recipe.servings}
               difficulty={recipe.difficulty}
               tags={recipe.tags}
            />
         </CardHeader>

         <CardContent className="space-y-6">
            <RecipeIngredients
               recipeId={recipe.id}
               ingredients={recipe.ingredients}
               checkedIngredients={checkedIngredients}
               onToggleIngredient={onToggleIngredient}
            />

            <RecipeInstructions instructions={recipe.instructions} />

            <RecipeActions
               onStartCooking={onStartCooking}
               onSaveRecipe={onSaveRecipe}
            />
         </CardContent>
      </Card>
   );
}
