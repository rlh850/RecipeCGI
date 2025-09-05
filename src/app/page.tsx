'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import { IngredientVisualizer } from './components/ingredients/ngredient-visualizer';
import { RecipeDisplay } from './components/recipes/recipe-display';
import { Stopwatch } from './components/stopwatch/stopwatch';
import { Sidebar } from './components/sidebar/sidebar';
import { LandingPage } from './components/LandingPage';
import { useIngredientsContext } from '@/contexts/ingredients-context';
import { IngredientsProvider } from '@/contexts/ingredients-context';

function HomeContent() {
   const { showRecipes, showStopwatch, currentRecipeTitle, stopCooking } =
      useIngredientsContext();

   return (
      <div className="flex h-screen bg-background">
         {/* Sidebar */}
         <Sidebar className="flex-shrink-0" />

         {/* Main Content */}
         <main className="flex-1 overflow-y-auto">
            <div className="p-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  <div className="space-y-6">
                     <IngredientVisualizer />
                  </div>
                  {showRecipes && (
                     <div className="space-y-6 animate-in slide-in-from-right-5 duration-500">
                        <RecipeDisplay />
                     </div>
                  )}
                  {showStopwatch && (
                     <div className="animate-in slide-in-from-bottom-5 duration-500">
                        <Stopwatch
                           recipeTitle={currentRecipeTitle}
                           onClose={stopCooking}
                        />
                     </div>
                  )}
               </div>
            </div>
         </main>
      </div>
   );
}

export default function Home() {
   return (
      <>
         <SignedOut>
            <LandingPage />
         </SignedOut>
         <SignedIn>
            <IngredientsProvider>
               <HomeContent />
            </IngredientsProvider>
         </SignedIn>
      </>
   );
}
