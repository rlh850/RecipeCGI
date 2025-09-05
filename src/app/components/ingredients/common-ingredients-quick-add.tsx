'use client';

import { Button } from '@/components/ui/button';
import { useIngredientsContext } from '@/contexts/ingredients-context';

const commonIngredients = [
   { name: 'Chicken Breast', category: 'meat' },
   { name: 'Rice', category: 'grains' },
   { name: 'Onion', category: 'vegetables' },
   { name: 'Garlic', category: 'vegetables' },
   { name: 'Tomatoes', category: 'vegetables' },
   { name: 'Eggs', category: 'dairy' },
   { name: 'Olive Oil', category: 'pantry' },
   { name: 'Salt', category: 'pantry' },
   { name: 'Black Pepper', category: 'pantry' },
   { name: 'Pasta', category: 'grains' },
];

export function CommonIngredientsQuickAdd() {
   const { addIngredient, hasIngredient } = useIngredientsContext();

   return (
      <div>
         <p className="text-sm text-muted-foreground mb-2">Quick add:</p>
         <div className="flex flex-wrap gap-2">
            {commonIngredients.map((item) => (
               <Button
                  key={item.name}
                  variant="outline"
                  size="sm"
                  onClick={() => addIngredient(item.name, item.category)}
                  disabled={hasIngredient(item.name)}
                  className="text-xs cursor-pointer"
               >
                  {item.name}
               </Button>
            ))}
         </div>
      </div>
   );
}
