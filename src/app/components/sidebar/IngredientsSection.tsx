import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusIcon } from './icons';

interface IngredientsSectionProps {
   onAddIngredient: (ingredient: string) => void;
}

export function IngredientsSection({
   onAddIngredient,
}: IngredientsSectionProps) {
   const commonIngredients = [
      'chicken',
      'rice',
      'eggs',
      'onions',
      'garlic',
      'tomatoes',
      'cheese',
      'pasta',
   ];

   return (
      <div className="mt-6 space-y-3">
         <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">
               Quick Add Ingredients
            </h3>
            <Button variant="ghost" size="sm" className="h-6 px-2">
               <PlusIcon />
               <span className="ml-1">Add</span>
            </Button>
         </div>

         <div className="grid grid-cols-2 gap-2">
            {commonIngredients.map((ingredient) => (
               <Button
                  key={ingredient}
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => onAddIngredient(ingredient)}
               >
                  {ingredient}
               </Button>
            ))}
         </div>
      </div>
   );
}
