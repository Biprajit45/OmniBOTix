import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp = ({ end, duration = 1200, prefix = "", suffix = "", decimals = 0, className = "" }: CountUpProps) => {
  const [value, setValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      const current = progress * end;
      setValue(progress === 1 ? end : current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [end, duration]);

  return (
    <span className={className}>
      {prefix}
      {value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}; 