import {bounceAnimation, staggeredAnimationFast} from "~/utils/animations";
import {motion, useInView} from "framer-motion";

import Button from "~/components/button";
import Container from "~/components/container";
import Image from "next/image";
import type {StaticImageData} from "next/image";
import {cn} from "~/utils/cn";
import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

interface AboutProps {
  children?: React.ReactNode;
  imageDirection: "left" | "right";
  imageSrc: StaticImageData;
  title: string;
  cta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function About({
  children,
  imageDirection,
  imageSrc,
  title,
  ctaLink,
  cta,
  ctaText,
}: AboutProps): JSX.Element {
  const {setSize} = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Container className="relative my-12">
      <motion.dl
        initial="initial"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
        variants={staggeredAnimationFast}
        className="border-b border-white/20 lg:grid lg:grid-cols-2 lg:py-8  "
        id="about"
      >
        <div className="relative z-10 p-8">
          <motion.ul variants={bounceAnimation}>
            <div
              className=" text-3xl text-white/75 lg:text-4xl flex flex-col gap-y-2 lg:gap-y-6"
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
            >
              {title}
            </div>
          </motion.ul>
          <motion.ul
            variants={bounceAnimation}
            className="my-6 lg:my-8 lg:mr-12"
          >
            <span className="text-2xl text-white lg:text-3xl">{children}</span>
          </motion.ul>
          <motion.ul>
            {cta && ctaLink && ctaText && (
              <Button className="mt-12" href={ctaLink}>
                {ctaText}
              </Button>
            )}
          </motion.ul>
        </div>
        <motion.ul
          className={cn(
            "flex items-center justify-center",
            imageDirection === "left" ? "order-first" : "order-last"
          )}
          variants={bounceAnimation}
        >
          <div className="flex justify-center items-center ">
            <Image
              src={imageSrc}
              alt={title}
              className="w-3/4 h-auto rounded-lg items-center brightness-75"
              onMouseEnter={() => setSize(120)}
              onMouseLeave={() => setSize(40)}
            />
          </div>
        </motion.ul>
      </motion.dl>
    </Container>
  );
}
