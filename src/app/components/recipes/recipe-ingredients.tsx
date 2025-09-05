'use client';

import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle } from 'lucide-react';

interface Ingredient {
   name: string;
   amount: string;
   available: boolean;
}

interface RecipeIngredientsProps {
   recipeId: string;
   ingredients: Ingredient[];
   checkedIngredients: Record<string, boolean>;
   onToggleIngredient: (recipeId: string, ingredientName: string) => void;
}

export function RecipeIngredients({
   recipeId,
   ingredients,
   checkedIngredients,
   onToggleIngredient,
}: RecipeIngredientsProps) {
   return (
      <div>
         <h3 className="font-semibold mb-3 text-foreground">Ingredients</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ingredients.map((ingredient) => {
               const key = `${recipeId}-${ingredient.name}`;
               const isChecked = checkedIngredients[key];

               return (
                  <div
                     key={ingredient.name}
                     className={`flex items-center gap-3 p-2 rounded-md border transition-colors cursor-pointer hover:bg-muted/50 ${
                        ingredient.available
                           ? 'border-green-200 bg-green-50/50'
                           : 'border-orange-200 bg-orange-50/50'
                     }`}
                     onClick={() =>
                        onToggleIngredient(recipeId, ingredient.name)
                     }
                  >
                     {isChecked ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                     ) : (
                        <Circle className="h-4 w-4 text-muted-foreground" />
                     )}
                     <div className="flex-1 min-w-0">
                        <span
                           className={`text-sm font-medium ${
                              isChecked
                                 ? 'line-through text-muted-foreground'
                                 : 'text-foreground'
                           }`}
                        >
                           {ingredient.amount} {ingredient.name}
                        </span>
                        {!ingredient.available && (
                           <Badge
                              variant="outline"
                              className="ml-2 text-xs text-orange-600 border-orange-300"
                           >
                              Need to buy
                           </Badge>
                        )}
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}
