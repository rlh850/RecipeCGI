'use client';

import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';

interface StopwatchHeaderProps {
   recipeTitle?: string;
   onClose?: () => void;
}

export function StopwatchHeader({
   recipeTitle,
   onClose,
}: StopwatchHeaderProps) {
   return (
      <div>
         <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">
               Cooking Timer
            </CardTitle>
            {onClose && (
               <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
               >
                  <X className="h-4 w-4" />
               </Button>
            )}
         </div>
         {recipeTitle && (
            <p className="text-sm text-muted-foreground mt-2">{recipeTitle}</p>
         )}
      </div>
   );
}
