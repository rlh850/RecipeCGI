'use client';

import { CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat } from 'lucide-react';

interface RecipeHeaderProps {
   title: string;
   cookTime: number;
   servings: number;
   difficulty: 'Easy' | 'Medium' | 'Hard';
   tags: string[];
}

export function RecipeHeader({
   title,
   cookTime,
   servings,
   difficulty,
   tags,
}: RecipeHeaderProps) {
   const getDifficultyColor = (difficulty: string) => {
      switch (difficulty) {
         case 'Easy':
            return 'bg-green-100 text-green-800 border-green-200';
         case 'Medium':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
         case 'Hard':
            return 'bg-red-100 text-red-800 border-red-200';
         default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
      }
   };

   return (
      <div className="flex items-start justify-between">
         <div className="space-y-2">
            <CardTitle className="text-xl text-balance">{title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
               <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{cookTime} min</span>
               </div>
               <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{servings} servings</span>
               </div>
               <div className="flex items-center gap-1">
                  <ChefHat className="h-4 w-4" />
                  <span
                     className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(difficulty)}`}
                  >
                     {difficulty}
                  </span>
               </div>
            </div>
         </div>
         <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
               <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
               </Badge>
            ))}
         </div>
      </div>
   );
}
