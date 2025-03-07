import { useState, useRef, useEffect } from "react"


export default function useResizeObserver() {
  const ref = useRef(null);
  const [rect, setRect] = useState();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect();
        setRect(boundingRect);
      }
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return [ref, rect];
}