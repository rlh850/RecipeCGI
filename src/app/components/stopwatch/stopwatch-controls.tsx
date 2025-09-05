'use client';

import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface StopwatchControlsProps {
   isRunning: boolean;
   time: number;
   onStartStop: () => void;
   onReset: () => void;
}

export function StopwatchControls({
   isRunning,
   time,
   onStartStop,
   onReset,
}: StopwatchControlsProps) {
   return (
      <div className="flex gap-2">
         <Button
            onClick={onStartStop}
            className="flex-1 gap-2"
            variant={isRunning ? 'secondary' : 'default'}
         >
            {isRunning ? (
               <>
                  <Pause className="h-4 w-4" />
                  Pause
               </>
            ) : (
               <>
                  <Play className="h-4 w-4" />
                  Start
               </>
            )}
         </Button>
         <Button
            onClick={onReset}
            variant="outline"
            className="gap-2"
            disabled={time === 0}
         >
            <RotateCcw className="h-4 w-4" />
            Reset
         </Button>
      </div>
   );
}
