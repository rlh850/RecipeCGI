'use client';

interface StopwatchDisplayProps {
   time: number;
   isRunning: boolean;
}

export function StopwatchDisplay({ time, isRunning }: StopwatchDisplayProps) {
   const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      if (hours > 0) {
         return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      }
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
         .toString()
         .padStart(2, '0')}`;
   };

   return (
      <div className="text-center">
         <div className="text-4xl font-mono font-bold text-primary mb-2">
            {formatTime(time)}
         </div>
         <p className="text-xs text-muted-foreground">
            {isRunning ? 'Cooking in progress...' : 'Ready to start'}
         </p>
      </div>
   );
}
