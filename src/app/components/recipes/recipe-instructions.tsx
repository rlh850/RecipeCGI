'use client';

interface RecipeInstructionsProps {
   instructions: string[];
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
   return (
      <div>
         <h3 className="font-semibold mb-3 text-foreground">Instructions</h3>
         <ol className="space-y-2">
            {instructions.map((step, index) => (
               <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                     {index + 1}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">
                     {step}
                  </span>
               </li>
            ))}
         </ol>
      </div>
   );
}
