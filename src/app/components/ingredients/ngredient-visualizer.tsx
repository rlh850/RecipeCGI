'use client';

import { AddIngredientsPanel } from './add-ingredients-panel';
import { IngredientsPanel } from './ingredients-panel';

export function IngredientVisualizer() {
   return (
      <div className="w-full space-y-6">
         <AddIngredientsPanel />
         <IngredientsPanel />
      </div>
   );
}
