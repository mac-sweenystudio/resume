import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

import {useRef} from "react";

interface ScrollingBannerProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export default function ScrollingBanner({
  children,
  baseVelocity = 300,
}: ScrollingBannerProps) {
  const baseX = useMotionValue(0);
  const {scrollY} = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * (baseVelocity / 1000) * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative m-0 flex h-24 flex-nowrap items-center overflow-hidden whitespace-nowrap bg-white lg:h-44 ">
      <motion.div
        style={{
          x,
        }}
        className="font-coolvetica flex flex-row flex-nowrap items-center whitespace-nowrap text-[120px] uppercase text-black lg:text-[200px] "
      >
        {Array.from({length: 180}).map(() => (
          <span className="mx-4" key="banner title">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
