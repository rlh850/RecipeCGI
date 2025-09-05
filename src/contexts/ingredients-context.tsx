'use client';

import { createContext, useContext, ReactNode } from 'react';
import {
   useIngredients,
   Ingredient,
   GeneratedRecipe,
} from '@/hooks/use-ingredients';

interface IngredientsContextType {
   ingredients: Ingredient[];
   newIngredient: string;
   setNewIngredient: (value: string) => void;
   addIngredient: (name: string, category?: string) => void;
   removeIngredient: (id: string) => void;
   clearIngredients: () => void;
   hasIngredient: (name: string) => boolean;
   showRecipes: boolean;
   setShowRecipes: (show: boolean) => void;
   generateRecipes: () => Promise<void>;
   showStopwatch: boolean;
   setShowStopwatch: (show: boolean) => void;
   currentRecipeTitle: string;
   startCooking: (recipeTitle: string) => void;
   stopCooking: () => void;
   generatedRecipes: GeneratedRecipe[];
   isGenerating: boolean;
}

const IngredientsContext = createContext<IngredientsContextType | undefined>(
   undefined
);

export function IngredientsProvider({ children }: { children: ReactNode }) {
   const ingredientsState = useIngredients();

   return (
      <IngredientsContext.Provider value={ingredientsState}>
         {children}
      </IngredientsContext.Provider>
   );
}

export function useIngredientsContext() {
   const context = useContext(IngredientsContext);
   if (context === undefined) {
      throw new Error(
         'useIngredientsContext must be used within an IngredientsProvider'
      );
   }
   return context;
}
