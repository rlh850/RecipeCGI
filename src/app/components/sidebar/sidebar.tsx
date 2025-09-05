'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { SidebarProps, NavigationItem, SavedRecipe } from './types';
import {
   HomeIcon,
   BookOpenIcon,
   ChefHatIcon,
   ClockIcon,
   SettingsIcon,
} from './icons';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SavedRecipesSection } from './SavedRecipesSection';
import { IngredientsSection } from './IngredientsSection';
import { SidebarFooter } from './SidebarFooter';
import { useIngredientsContext } from '@/contexts/ingredients-context';

export function Sidebar({ className }: SidebarProps) {
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [activeItem, setActiveItem] = useState('home');
   const { addIngredient } = useIngredientsContext();
   // Mock data
   const savedRecipes: SavedRecipe[] = [
      {
         id: '1',
         title: 'Chicken Fried Rice',
         cookTime: 25,
         difficulty: 'Easy',
         ingredients: ['chicken', 'rice', 'eggs', 'soy sauce'],
         savedAt: new Date('2024-01-15'),
      },
      {
         id: '2',
         title: 'Pasta Carbonara',
         cookTime: 20,
         difficulty: 'Medium',
         ingredients: ['pasta', 'eggs', 'bacon', 'parmesan'],
         savedAt: new Date('2024-01-14'),
      },
      {
         id: '3',
         title: 'Vegetable Stir Fry',
         cookTime: 15,
         difficulty: 'Easy',
         ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
         savedAt: new Date('2024-01-13'),
      },
   ];

   const navigationItems: NavigationItem[] = [
      {
         id: 'home',
         label: 'Home',
         icon: <HomeIcon />,
         onClick: () => setActiveItem('home'),
      },
      {
         id: 'saved-recipes',
         label: 'Saved Recipes',
         icon: <BookOpenIcon />,
         badge: savedRecipes.length,
         onClick: () => setActiveItem('saved-recipes'),
      },
      {
         id: 'ingredients',
         label: 'My Ingredients',
         icon: <ChefHatIcon />,
         onClick: () => setActiveItem('ingredients'),
      },
      {
         id: 'cooking-timer',
         label: 'Cooking Timer',
         icon: <ClockIcon />,
         onClick: () => setActiveItem('cooking-timer'),
      },
      {
         id: 'settings',
         label: 'Settings',
         icon: <SettingsIcon />,
         onClick: () => setActiveItem('settings'),
      },
   ];

   const handleRecipeClick = (recipe: SavedRecipe) => {
      console.log('Loading recipe:', recipe);
   };

   const handleAddIngredients = (recipe: SavedRecipe) => {
      console.log('Adding ingredients from recipe:', recipe.ingredients);
   };

   return (
      <div
         className={cn(
            'flex flex-col h-full bg-card border-r border-border transition-all duration-300',
            isCollapsed ? 'w-16' : 'w-80',
            className
         )}
      >
         <SidebarHeader
            isCollapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
         />

         <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <SidebarNavigation
               navigationItems={navigationItems}
               activeItem={activeItem}
               isCollapsed={isCollapsed}
            />

            {activeItem === 'saved-recipes' && !isCollapsed && (
               <SavedRecipesSection
                  savedRecipes={savedRecipes}
                  onRecipeClick={handleRecipeClick}
                  onAddIngredients={handleAddIngredients}
               />
            )}

            {activeItem === 'ingredients' && !isCollapsed && (
               <IngredientsSection onAddIngredient={addIngredient} />
            )}
         </div>

         <SidebarFooter isCollapsed={isCollapsed} />
      </div>
   );
}

export default Sidebar;
