import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';

interface SidebarNavigationProps {
   navigationItems: NavigationItem[];
   activeItem: string;
   isCollapsed: boolean;
}

export function SidebarNavigation({
   navigationItems,
   activeItem,
   isCollapsed,
}: SidebarNavigationProps) {
   return (
      <nav className="space-y-1">
         {navigationItems.map((item) => (
            <Button
               key={item.id}
               variant={activeItem === item.id ? 'secondary' : 'ghost'}
               className={cn(
                  'w-full justify-start gap-3 h-10',
                  isCollapsed && 'justify-center px-2'
               )}
               onClick={item.onClick}
            >
               <span className="shrink-0">{item.icon}</span>
               {!isCollapsed && (
                  <>
                     <span className="flex-1 text-left">{item.label}</span>
                     {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                           {item.badge}
                        </Badge>
                     )}
                  </>
               )}
            </Button>
         ))}
      </nav>
   );
}
