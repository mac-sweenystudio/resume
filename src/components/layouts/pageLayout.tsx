import Image, {StaticImageData} from "next/image";
import {motion, useInView, useScroll, useTransform} from "framer-motion";

import Container from "~/components/container";
import {bounceAnimation} from "~/utils/animations";
import {useParallax} from "~/utils/useParallax";
import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

interface PageHeadingProps {
  heading: string;
  image1URL: StaticImageData;
  image1Alt: string;
  image2URL: StaticImageData;
  image2Alt: string;
  image3URL: StaticImageData;
  image3Alt: string;
}

export default function PageHeading({
  heading,
  image1URL,
  image1Alt,
  image2URL,
  image2Alt,
  image3URL,
  image3Alt,
}: PageHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const {scrollYProgress} = useScroll({target: ref});
  const y1 = useParallax(scrollYProgress, 100, 0.3);
  const y2 = useParallax(scrollYProgress, 50, 0.5);
  const y3 = useParallax(scrollYProgress, 200, 0.4);
  const {setSize} = useSize();
  return (
    <Container>
      <motion.div
        className="absolute bottom-0 left-1/2 brightness-75 z-0"
        style={{
          y: y1,
          rotate: 10,
        }}
      >
        <Image
          src={image1URL}
          alt={image1Alt}
          className="h-30 w-auto rounded-lg lg:h-60 translate-y-3/4"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-1/2 brightness-75 isolate z-0 "
        style={{
          y: y2,
          rotate: 3,
        }}
      >
        <Image
          src={image2URL}
          alt={image2Alt}
          className="h-30 w-auto rounded-lg lg:h-60 translate-y-3/4"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-1/3 brightness-75 z-0"
        style={{
          y: y3,
          rotate: -14,
        }}
      >
        <Image
          src={image3URL}
          alt={image3Alt}
          className="h-30 w-auto rounded-lg lg:h-60 translate-y-3/4"
          priority
        />
      </motion.div>

      <motion.main
        className="z-0 my-24 h-full w-full lg:my-12"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div
          className="relative z-10 text-center font-coolvetica uppercase text-white"
          variants={bounceAnimation}
        >
          <motion.h1
            className="text-[160px] leading-none text-white  lg:text-[360px] lg:tracking-wide z-0"
            onMouseEnter={() => setSize(400)}
            onMouseLeave={() => setSize(40)}
            variants={bounceAnimation}
          >
            {heading}
          </motion.h1>
        </motion.div>
      </motion.main>
    </Container>
  );
}
