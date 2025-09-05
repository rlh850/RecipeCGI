'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useIngredientsContext } from '@/contexts/ingredients-context';
import { CommonIngredientsQuickAdd } from './common-ingredients-quick-add';

export function AddIngredientsPanel() {
   const { newIngredient, setNewIngredient, addIngredient } =
      useIngredientsContext();

   const handleAddIngredient = () => {
      addIngredient(newIngredient);
   };

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         handleAddIngredient();
      }
   };

   return (
      <Card>
         <CardContent className="p-4 space-y-4">
            <h2 className="text-lg font-semibold">Add Ingredients</h2>

            {/* Manual Input */}
            <div className="flex gap-2">
               <Input
                  placeholder="Type ingredient name..."
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
               />
               <Button
                  onClick={handleAddIngredient}
                  disabled={!newIngredient.trim()}
               >
                  <Plus className="h-4 w-4" />
               </Button>
            </div>

            {/* Common Ingredients Quick Add */}
            <CommonIngredientsQuickAdd />
         </CardContent>
      </Card>
   );
}
