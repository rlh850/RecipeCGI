import { useState, useCallback } from 'react';

export interface Ingredient {
   id: string;
   name: string;
   category: string;
}

export interface GeneratedRecipe {
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
   cuisine?: string;
   description?: string;
}

export function useIngredients() {
   const [ingredients, setIngredients] = useState<Ingredient[]>([]);
   const [newIngredient, setNewIngredient] = useState('');
   const [showRecipes, setShowRecipes] = useState(false);
   const [showStopwatch, setShowStopwatch] = useState(false);
   const [currentRecipeTitle, setCurrentRecipeTitle] = useState<string>('');
   const [generatedRecipes, setGeneratedRecipes] = useState<GeneratedRecipe[]>(
      []
   );
   const [isGenerating, setIsGenerating] = useState(false);

   const addIngredient = useCallback(
      (name: string, category = 'pantry') => {
         if (
            name.trim() &&
            !ingredients.some(
               (i) => i.name.toLowerCase() === name.toLowerCase()
            )
         ) {
            const newId = Date.now().toString();
            setIngredients((prev) => [
               ...prev,
               { id: newId, name: name.trim(), category },
            ]);
            setNewIngredient('');
         }
      },
      [ingredients]
   );

   const removeIngredient = useCallback((id: string) => {
      setIngredients((prev) => prev.filter((i) => i.id !== id));
   }, []);

   const clearIngredients = useCallback(() => {
      setIngredients([]);
      setShowRecipes(false);
   }, []);

   const hasIngredient = useCallback(
      (name: string) => {
         return ingredients.some(
            (i) => i.name.toLowerCase() === name.toLowerCase()
         );
      },
      [ingredients]
   );

   const generateRecipes = useCallback(async () => {
      if (ingredients.length > 1 && !isGenerating) {
         setIsGenerating(true);
         try {
            const ingredientNames = ingredients.map((ing) => ing.name);
            const message = `Generate a recipe using ${ingredientNames.join(', ')}. Make it easy to cook and serve 4 people.`;

            const response = await fetch('/api/generate', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  id: crypto.randomUUID(),
                  message,
               }),
            });

            const data = await response.json();

            if (data.error) {
               console.error('Recipe generation error:', data.error);
               alert('Failed to generate recipes. Please try again.');
               return;
            }

            // Extract generated recipes from the API response
            if (data.results && data.results.length > 0) {
               const newRecipes: GeneratedRecipe[] = data.results
                  .filter(
                     (result: { result?: unknown; error?: unknown }) =>
                        result.result && !result.error
                  )
                  .map((result: { result: GeneratedRecipe }) => {
                     const recipe = result.result;
                     // Map the ingredients to check availability
                     const recipeIngredients = recipe.ingredients.map(
                        (ing: { name: string; amount: string }) => ({
                           name: ing.name,
                           amount: ing.amount,
                           available: ingredientNames.some(
                              (userIng) =>
                                 userIng
                                    .toLowerCase()
                                    .includes(ing.name.toLowerCase()) ||
                                 ing.name
                                    .toLowerCase()
                                    .includes(userIng.toLowerCase())
                           ),
                        })
                     );

                     return {
                        id: recipe.id,
                        title: recipe.title,
                        cookTime: recipe.cookTime,
                        servings: recipe.servings,
                        difficulty: recipe.difficulty,
                        ingredients: recipeIngredients,
                        instructions: recipe.instructions,
                        tags: recipe.tags,
                        cuisine: recipe.cuisine,
                        description: recipe.description,
                     };
                  });

               setGeneratedRecipes(newRecipes);
               setShowRecipes(true);
            }
         } catch (error) {
            console.error('Error generating recipes:', error);
            alert(
               'Failed to generate recipes. Please check your connection and try again.'
            );
         } finally {
            setIsGenerating(false);
         }
      }
   }, [ingredients, isGenerating]);

   const startCooking = useCallback((recipeTitle: string) => {
      setCurrentRecipeTitle(recipeTitle);
      setShowStopwatch(true);
   }, []);

   const stopCooking = useCallback(() => {
      setShowStopwatch(false);
      setCurrentRecipeTitle('');
   }, []);

   return {
      ingredients,
      newIngredient,
      setNewIngredient,
      addIngredient,
      removeIngredient,
      clearIngredients,
      hasIngredient,
      showRecipes,
      setShowRecipes,
      generateRecipes,
      showStopwatch,
      setShowStopwatch,
      currentRecipeTitle,
      startCooking,
      stopCooking,
      generatedRecipes,
      isGenerating,
   };
}
