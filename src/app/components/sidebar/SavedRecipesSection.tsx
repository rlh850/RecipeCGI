import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusIcon, ClockIcon } from './icons';
import { SavedRecipe } from './types';

interface SavedRecipesSectionProps {
   savedRecipes: SavedRecipe[];
   onRecipeClick: (recipe: SavedRecipe) => void;
   onAddIngredients: (recipe: SavedRecipe) => void;
}

export function SavedRecipesSection({
   savedRecipes,
   onRecipeClick,
   onAddIngredients,
}: SavedRecipesSectionProps) {
   return (
      <div className="mt-6 space-y-3">
         <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
               Recent Recipes
            </h3>
            <Button variant="ghost" size="sm" className="h-6 px-2">
               <PlusIcon />
               <span className="ml-1">New</span>
            </Button>
         </div>

         <div className="space-y-2">
            {savedRecipes.map((recipe) => (
               <Card
                  key={recipe.id}
                  className="p-3 hover:bg-accent/50 cursor-pointer transition-colors"
                  onClick={() => onRecipeClick(recipe)}
               >
                  <div className="space-y-2">
                     <div className="flex items-start justify-between">
                        <h4 className="text-sm font-medium line-clamp-1">
                           {recipe.title}
                        </h4>
                        <Badge
                           variant={
                              recipe.difficulty === 'Easy'
                                 ? 'default'
                                 : recipe.difficulty === 'Medium'
                                   ? 'secondary'
                                   : 'destructive'
                           }
                           className="text-xs"
                        >
                           {recipe.difficulty}
                        </Badge>
                     </div>

                     <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ClockIcon />
                        <span>{recipe.cookTime} min</span>
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                           {recipe.ingredients
                              .slice(0, 2)
                              .map((ingredient, index) => (
                                 <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs"
                                 >
                                    {ingredient}
                                 </Badge>
                              ))}
                           {recipe.ingredients.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                 +{recipe.ingredients.length - 2}
                              </Badge>
                           )}
                        </div>

                        <Button
                           variant="ghost"
                           size="sm"
                           className="h-6 px-2 text-xs"
                           onClick={(e) => {
                              e.stopPropagation();
                              onAddIngredients(recipe);
                           }}
                        >
                           <PlusIcon />
                           Add
                        </Button>
                     </div>
                  </div>
               </Card>
            ))}
         </div>
      </div>
   );
}
