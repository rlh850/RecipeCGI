export interface NavigationItem {
   id: string;
   label: string;
   icon: React.ReactNode;
   href?: string;
   badge?: string | number;
   onClick?: () => void;
}

export interface SavedRecipe {
   id: string;
   title: string;
   cookTime: number;
   difficulty: 'Easy' | 'Medium' | 'Hard';
   ingredients: string[];
   savedAt: Date;
}

export interface SidebarProps {
   className?: string;
}
