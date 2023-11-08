import {motion, useInView, useScroll, useTransform} from "framer-motion";

import Button from "~/components/button";
import Container from "~/components/container";
import Image from "next/image";
import Screenshot404 from "~/assets/screenshots/screenshot-404.png";
import ScreenshotCMC from "~/assets/screenshots/screenshot-cmc.png";
import ScreenshotPaydeskMobile from "~/assets/screenshots/screenshot-paydesk-mobile.png";
import {bounceAnimation} from "~/utils/animations";
import {useParallax} from "~/utils/useParallax";
import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const {scrollYProgress} = useScroll({target: ref});
  const y1 = useParallax(scrollYProgress, 500, 0.2);
  const y2 = useParallax(scrollYProgress, 400, 0.2);
  const y3 = useParallax(scrollYProgress, 200, 0.4);

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.3, 0.6]);

  const {setSize} = useSize();
  return (
    <Container>
      <motion.div
        className="absolute top-0"
        style={{
          y: y1,
          rotate: -10,
          opacity: opacity,
        }}
      >
        <Image
          src={ScreenshotPaydeskMobile}
          alt="Screenshot-CMC"
          className=" h-60 w-auto translate-x-1/2 translate-y-1/2 rounded-lg lg:h-96 lg:translate-x-1/3 lg:translate-y-0"
          priority
        />
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 "
        style={{
          y: y2,
          rotate: -10,
          opacity: opacity,
        }}
      >
        <Image
          src={Screenshot404}
          alt="Screenshot-404"
          className="h-60 w-auto translate-x-1/2 translate-y-1/2 rounded-lg lg:h-96 lg:translate-x-1/3 lg:translate-y-1/4"
          priority
        />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-0  "
        style={{
          y: y3,
          rotate: -10,
          opacity: opacity,
        }}
      >
        <Image
          src={ScreenshotCMC}
          alt="Screenshot-CMC"
          className="bottom-0 h-60 w-auto -translate-x-3/4 translate-y-1/2 lg:h-96 lg:-translate-x-1/2 lg:translate-y-1/4"
          priority
        />
      </motion.div>
      <motion.main
        className="z-10 my-32 h-full w-full lg:my-32"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div
          className="relative z-10 text-center font-coolvetica uppercase text-white"
          variants={bounceAnimation}
        >
          <motion.h1
            className="text-4xl lg:text-[100px]"
            variants={bounceAnimation}
          >
            G&apos;day, I&apos;m
          </motion.h1>

          <motion.h1
            className="text-[160px] leading-none text-white  lg:text-[360px] lg:tracking-wide"
            onMouseEnter={() => setSize(400)}
            onMouseLeave={() => setSize(40)}
            variants={bounceAnimation}
          >
            MAC SWEENY
          </motion.h1>
        </motion.div>

        <motion.p
          className="relative z-10 my-12 text-center text-xl text-white lg:mb-12 lg:mt-12 lg:text-3xl"
          variants={bounceAnimation}
        >
          I&apos;m a self taught{" "}
          <strong className="underline">Full-Stack Web Developer </strong>
          <br className="hidden text-start lg:flex" /> that specialises in
          creating High Converting & Effecient web applications.
        </motion.p>
        <motion.div className="flex justify-center" variants={bounceAnimation}>
          <Button href="/contact">Lets Chat</Button>
        </motion.div>
      </motion.main>
    </Container>
  );
}
