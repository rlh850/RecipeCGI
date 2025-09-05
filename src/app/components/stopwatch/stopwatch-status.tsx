'use client';

interface StopwatchStatusProps {
   isRunning: boolean;
}

export function StopwatchStatus({ isRunning }: StopwatchStatusProps) {
   return (
      <div className="flex items-center justify-center gap-2 text-xs">
         <div
            className={`w-2 h-2 rounded-full ${
               isRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
            }`}
         />
         <span className="text-muted-foreground">
            {isRunning ? 'Timer running' : 'Timer stopped'}
         </span>
      </div>
   );
}
