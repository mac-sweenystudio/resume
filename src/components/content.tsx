"use client";

import {motion, useInView} from "framer-motion";

import Button from "~/components/button";
import Container from "~/components/container";
import {bounceAnimation} from "~/utils/animations";
import {cn} from "~/utils/cn";
import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
  cta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}
export default function Content({
  children,
  className,
  cta,
  ctaText,
  ctaLink,
}: ContentProps) {
  const {setSize} = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref}>
      <Container>
        <motion.main
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className={cn(
            "mx-auto my-16 max-w-lg pb-8 pt-16 text-center lg:max-w-3xl",
            className
          )}
        >
          <motion.div
            onMouseEnter={() => setSize(400)}
            onMouseLeave={() => setSize(40)}
            variants={bounceAnimation}
            className="relative z-10 text-2xl text-white lg:text-4xl"
          >
            {children}
          </motion.div>
          {cta && ctaLink && ctaText && (
            <Button className="mt-12" href={ctaLink}>
              {ctaText}
            </Button>
          )}
        </motion.main>
      </Container>
    </div>
  );
}
