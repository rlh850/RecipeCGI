'use client';

import { Button } from '@/components/ui/button';

interface RecipeActionsProps {
   onStartCooking?: () => void;
   onSaveRecipe?: () => void;
}

export function RecipeActions({
   onStartCooking,
   onSaveRecipe,
}: RecipeActionsProps) {
   const handleStartCooking = () => {
      if (onStartCooking) {
         onStartCooking();
      } else {
         // Default placeholder behavior
         console.log('Starting cooking mode...');
         alert('Starting cooking mode! (Feature coming soon)');
      }
   };

   const handleSaveRecipe = () => {
      if (onSaveRecipe) {
         onSaveRecipe();
      } else {
         // Default placeholder behavior
         console.log('Saving recipe...');
         alert('Recipe saved! (Feature coming soon)');
      }
   };

   return (
      <div className="flex gap-3 pt-2">
         <Button className="flex-1" onClick={handleStartCooking}>
            Start Cooking
         </Button>
         <Button variant="outline" onClick={handleSaveRecipe}>
            Save Recipe
         </Button>
      </div>
   );
}
