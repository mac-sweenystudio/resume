import { useEffect, useRef, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = <T extends HTMLElement | null>(
  ref: React.RefObject<T>,
): Dimensions | null => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      const updateDimensions = () => {
        setDimensions({
          width: currentRef.offsetWidth,
          height: currentRef.offsetHeight,
        });
      };

      // Initial measurement
      updateDimensions();

      // Update dimensions when the window is resized
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [ref]);

  return dimensions;
};
