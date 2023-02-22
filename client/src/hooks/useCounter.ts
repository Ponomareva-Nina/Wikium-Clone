import { useState, useEffect } from "react";

interface CounterProps {
  isReverse: boolean;
  initialValue: number;
}

export const useCounter = ({ isReverse, initialValue }: CounterProps) => {
  const [count, setCount] = useState<number>(isReverse ? initialValue : 0);

  useEffect(() => {
    let intervalId: null | NodeJS.Timer = null;

    if (isReverse) {
      if (count < 1) return () => {};
      intervalId = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else {
      if (count >= initialValue) return () => {};
      intervalId = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [count]);

  return count;
};
