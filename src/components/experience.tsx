import {bounceAnimation, staggeredAnimationFast} from "~/utils/animations";
import {motion, useInView, useScroll, useTransform} from "framer-motion";

import Container from "~/components/container";
import Image from "next/image";
import Link from "next/link";
import type {StaticImageData} from "next/image";
import {cn} from "~/utils/cn";
import {useParallax} from "~/utils/useParallax";
import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

interface ExperienceProps {
  children?: React.ReactNode;
  role?: string;
  imageDirection: "left" | "right";
  imageSrc: StaticImageData;
  title: string;
  stack: {
    name: string;
    link: string;
  }[];
}

export default function Experience({
  children,
  role,
  imageDirection,
  imageSrc,
  title,
  stack,
}: ExperienceProps): JSX.Element {
  const {setSize} = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Container className="relative my-12 z-10 ">
      <motion.dl
        initial="initial"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
        variants={staggeredAnimationFast}
        className="border-b border-white/20 lg:grid lg:grid-cols-2 lg:py-8  "
      >
        <div className="relative z-10 p-8">
          <motion.ul variants={bounceAnimation}>
            <div
              className=" text-3xl text-white/75 lg:text-4xl flex flex-col gap-y-2 lg:gap-y-6"
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
            >
              <span className="text-md lg:text-lg ">{role}</span>
              {title}
            </div>
          </motion.ul>
          <motion.ul
            variants={bounceAnimation}
            className="my-6 lg:my-8 lg:mr-12"
          >
            <span className="text-2xl text-white lg:text-3xl">{children}</span>
          </motion.ul>
          {
            <div className="flex flex-wrap gap-2 lg:gap-4">
              {stack.map((framework) => (
                <a key={framework.name} href={framework.link} target="_blank">
                  <motion.div
                    variants={bounceAnimation}
                    className="text-md cursor-pointer rounded-full border border-white/75 px-4 py-2 text-white transition-colors hover:bg-white/10 lg:text-lg hover:"
                    onMouseEnter={() => setSize(60)}
                    onMouseLeave={() => setSize(40)}
                    initial={{backgroundColor: "transparent", scale: 1}}
                    whileHover={{backgroundColor: "#393fec", scale: 1.05}}
                    transition={{duration: 0.2, ease: "easeOut"}}
                  >
                    {framework.name}
                  </motion.div>
                </a>
              ))}
            </div>
          }
        </div>
        <motion.ul
          className={cn(
            "flex items-center",
            imageDirection === "left" ? "order-first" : "order-last"
          )}
          variants={bounceAnimation}
        >
          <Image
            src={imageSrc}
            alt={title}
            className="h-auto w-full rounded-lg border border-white/20"
            onMouseEnter={() => setSize(120)}
            onMouseLeave={() => setSize(40)}
          />
        </motion.ul>
      </motion.dl>
    </Container>
  );
}
