'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
   X,
   Wheat,
   Apple,
   Beef,
   Milk,
   Cookie,
   Package,
   ChefHat,
} from 'lucide-react';
import { useIngredientsContext } from '@/contexts/ingredients-context';

const categoryIcons = {
   grains: Wheat,
   fruits: Apple,
   vegetables: Apple,
   meat: Beef,
   dairy: Milk,
   snacks: Cookie,
   default: Package,
};

export function IngredientsPanel() {
   const { ingredients, removeIngredient, generateRecipes, isGenerating } =
      useIngredientsContext();

   if (ingredients.length === 0) {
      return (
         <div className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
               Add some ingredients to get started!
            </p>
         </div>
      );
   }

   return (
      <Card>
         <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
               <h2 className="text-lg font-semibold">
                  Your Ingredients ({ingredients.length})
               </h2>

               {/* Generate Recipes Button - only show when more than 1 ingredient */}
               {ingredients.length > 1 && (
                  <Button
                     onClick={generateRecipes}
                     disabled={isGenerating}
                     className="gap-2"
                     variant="default"
                  >
                     <ChefHat className="h-4 w-4" />
                     {isGenerating ? 'Generating...' : 'Generate Recipes'}
                  </Button>
               )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
               {ingredients.map((ingredient) => {
                  const IconComponent =
                     categoryIcons[
                        ingredient.category as keyof typeof categoryIcons
                     ] || categoryIcons.default;

                  return (
                     <div
                        key={ingredient.id}
                        className="relative p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                     >
                        <div className="flex items-center gap-2">
                           <IconComponent className="h-4 w-4 text-primary" />
                           <span className="font-medium text-sm">
                              {ingredient.name}
                           </span>
                        </div>

                        <button
                           onClick={() => removeIngredient(ingredient.id)}
                           className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/80 transition-colors"
                        >
                           <X className="h-3 w-3" />
                        </button>
                     </div>
                  );
               })}
            </div>
         </CardContent>
      </Card>
   );
}
