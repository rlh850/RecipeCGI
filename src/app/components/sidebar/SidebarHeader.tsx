import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarHeaderProps {
   isCollapsed: boolean;
   onToggleCollapse: () => void;
}

export function SidebarHeader({
   isCollapsed,
   onToggleCollapse,
}: SidebarHeaderProps) {
   return (
      <div className="p-4 border-b border-border">
         <div className="flex items-center justify-between">
            {!isCollapsed && (
               <h2 className="text-lg font-semibold text-card-foreground">
                  Recipe Helper
               </h2>
            )}
            <Button
               variant="ghost"
               size="icon"
               onClick={onToggleCollapse}
               className="shrink-0"
            >
               <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={cn(
                     'transition-transform',
                     isCollapsed && 'rotate-180'
                  )}
               >
                  <path d="M9 18l6-6-6-6" />
               </svg>
            </Button>
         </div>
      </div>
   );
}
