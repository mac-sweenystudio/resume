import { MotionProps, motion } from "framer-motion";

import React from "react";
import useMousePosition from "~/utils/useMousePosition";
import { useSize } from "~/contexts/sizeContext";

interface MouseFollowerProps {
  className?: string;
}

export default function MouseFollower(props: MouseFollowerProps): JSX.Element {
  const { className } = props;
  const { x, y } = useMousePosition();
  const { size, setSize } = useSize();

  // Default to 0 if x or y is null
  const xPos = x !== null ? x : 0;
  const yPos = y !== null ? y : 0;

  const style: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
  };

  const animate: MotionProps["animate"] = {
    WebkitMaskPosition: `${xPos - size / 2}px ${yPos - size / 2}px`,
    WebkitMaskSize: `${size}px`,
  };

  const transition: MotionProps["transition"] = {
    type: "tween",
    ease: "backOut",
    duration: 0.5,
  };

  return (
    <motion.div
      className={className}
      style={style}
      animate={animate}
      transition={transition}
    >
      {/* Any visual representation of the mask effect can be placed here */}
    </motion.div>
  );
}
