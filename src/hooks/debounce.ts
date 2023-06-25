import { useState, useEffect } from 'react';

export function useDebounce(value: string, delay: number = 300): string {
  const [text, setText] = useState(value);

  useEffect(() => {
    const hadler = setTimeout(() => setText(value), delay);
    return () => clearTimeout(hadler);
  }, [value, delay]);

  return text;
}
