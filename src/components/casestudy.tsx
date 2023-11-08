import type { StaticImageData } from "next/image";
import Image from "next/image";
import { bounceAnimation, staggeredAnimationFast } from "~/utils/animations";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import Container from "~/components/container";
import Link from "next/link";
import { useParallax } from "~/utils/useParallax";
import { useRef } from "react";
import { useSize } from "~/contexts/sizeContext";

interface CasestudyProps {
  children?: React.ReactNode;
  link: string;
  imageDirection: "left" | "right";
  imageSrc: StaticImageData;
  title: string;
  services: string[];
}

export default function Casestudy({
  children,
  link,
  imageDirection,
  imageSrc,
  title,
  services,
}: CasestudyProps): JSX.Element {
  const { setSize } = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -300, 0.3);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <Container className="relative my-32 bg-black ">
      <motion.dl
        initial="initial"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
        variants={staggeredAnimationFast}
        className="border-b border-white/20 bg-black lg:grid lg:grid-cols-2 lg:py-16 "
        style={{
          y: y,
          opacity: opacity,
        }}
      >
        <div className="relative z-10 p-8">
          <motion.ul variants={bounceAnimation}>
            <Link
              href={link}
              className=" text-3xl text-white/75 hover:underline lg:text-4xl  "
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
            >
              {title}
            </Link>
          </motion.ul>
          <motion.ul
            variants={bounceAnimation}
            className="my-6 lg:my-8 lg:mr-12"
          >
            <span className="text-2xl text-white lg:text-3xl">{children}</span>
          </motion.ul>
          {
            <div className="flex flex-wrap gap-2 lg:gap-4">
              {services.map((service) => (
                <motion.ul
                  variants={bounceAnimation}
                  key={service}
                  className="text-md cursor-pointer rounded-full border border-white/75 px-4 py-2 text-white transition-colors hover:bg-white/10 lg:text-lg"
                  onMouseEnter={() => setSize(60)}
                  onMouseLeave={() => setSize(40)}
                >
                  {service}
                </motion.ul>
              ))}
            </div>
          }
        </div>
        <motion.ul
          className={imageDirection === "left" ? "order-first" : "order-last"}
          variants={bounceAnimation}
        >
          <Link passHref href={link}>
            <Image
              src={imageSrc}
              alt={title}
              className="h-auto w-full rounded-lg border border-white/20"
              onMouseEnter={() => setSize(120)}
              onMouseLeave={() => setSize(40)}
            />
          </Link>
        </motion.ul>
      </motion.dl>
    </Container>
  );
}
