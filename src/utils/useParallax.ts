import { MotionValue, useTransform } from "framer-motion";

export function useParallax(
  value: MotionValue<number>,
  distance: number,
  damping = 1,
) {
  return useTransform(value, [0, 1], [-distance * damping, distance * damping]);
}
