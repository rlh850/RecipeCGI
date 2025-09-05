'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { StopwatchHeader } from './stopwatch-header';
import { StopwatchDisplay } from './stopwatch-display';
import { StopwatchControls } from './stopwatch-controls';
import { StopwatchStatus } from './stopwatch-status';

interface StopwatchProps {
   onClose?: () => void;
   recipeTitle?: string;
}

export function Stopwatch({ onClose, recipeTitle }: StopwatchProps) {
   const [time, setTime] = useState(0); // Time in seconds
   const [isRunning, setIsRunning] = useState(false);
   const intervalRef = useRef<NodeJS.Timeout | null>(null);

   useEffect(() => {
      if (isRunning) {
         intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
         }, 1000);
      } else {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
         }
      }

      return () => {
         if (intervalRef.current) {
            clearInterval(intervalRef.current);
         }
      };
   }, [isRunning]);

   const handleStartStop = () => {
      setIsRunning(!isRunning);
   };

   const handleReset = () => {
      setIsRunning(false);
      setTime(0);
   };

   const handleClose = () => {
      setIsRunning(false);
      setTime(0);
      if (onClose) {
         onClose();
      }
   };

   return (
      <Card className="w-full max-w-md mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
         <CardHeader className="pb-3">
            <StopwatchHeader recipeTitle={recipeTitle} onClose={handleClose} />
         </CardHeader>

         <CardContent className="space-y-4">
            <StopwatchDisplay time={time} isRunning={isRunning} />

            <StopwatchControls
               isRunning={isRunning}
               time={time}
               onStartStop={handleStartStop}
               onReset={handleReset}
            />

            <StopwatchStatus isRunning={isRunning} />
         </CardContent>
      </Card>
   );
}
