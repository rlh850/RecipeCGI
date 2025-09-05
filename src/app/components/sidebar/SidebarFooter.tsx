import React from 'react';
import { UserButton } from '@clerk/nextjs';

interface SidebarFooterProps {
   isCollapsed: boolean;
}

export function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
   return (
      <div className="p-4 border-t border-border">
         {!isCollapsed ? (
            <div className="flex items-center justify-between">
               <div className="text-xs text-muted-foreground">
                  Recipe Helper v1.0
               </div>
               <UserButton
                  appearance={{
                     elements: {
                        avatarBox: 'w-8 h-8',
                        userButtonPopoverCard: 'shadow-lg border-0',
                        userButtonPopoverActionButton: 'hover:bg-gray-50',
                        userButtonPopoverActionButtonText: 'text-gray-700',
                        userButtonPopoverFooter: 'hidden', // Hide "Manage account" link
                     },
                  }}
               />
            </div>
         ) : (
            <div className="flex justify-center">
               <UserButton
                  appearance={{
                     elements: {
                        avatarBox: 'w-8 h-8',
                        userButtonPopoverCard: 'shadow-lg border-0',
                        userButtonPopoverActionButton: 'hover:bg-gray-50',
                        userButtonPopoverActionButtonText: 'text-gray-700',
                        userButtonPopoverFooter: 'hidden',
                     },
                  }}
               />
            </div>
         )}
      </div>
   );
}
