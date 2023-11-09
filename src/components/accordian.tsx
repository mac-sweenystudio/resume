import {AnimatePresence, motion, useInView} from "framer-motion";
import {useRef, useState} from "react";

import {ChevronDownIcon} from "@radix-ui/react-icons";
import Container from "~/components/container";
import Image from "next/image";
import type {StaticImageData} from "next/image";
import {bounceAnimation} from "~/utils/animations";
import {useSize} from "~/contexts/sizeContext";

interface AccordianProps {
  name: string;

  skills: string[];
  index: number;
  expanded: boolean | number | null;
  setExpanded: (i: number | null) => void;
}

interface AccordianItem {
  name: string;
  skills: string[];
}

function AccordianContent({skills, name}: {skills: string[]; name: string}) {
  const {setSize} = useSize();
  return (
    <div className="z-0 rounded-xl bg-white/5 p-8 text-4xl text-white lg:p-16 ">
      <div className="relative z-10">
        <div className="pr-8 text-lg text-white/75">{name}</div>
        <motion.div
          onMouseEnter={() => setSize(120)}
          onMouseLeave={() => setSize(40)}
          className=" pr-8 pt-4 text-base text-white grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <div key={skill}>
              <motion.div
                variants={bounceAnimation}
                className="text-md rounded-full h-16 flex justify-center text-center items-center border border-white/75 px-3 py-1.5 text-white transition-colors hover:bg-white/10 lg:text-lg hover:"
                onMouseEnter={() => setSize(60)}
                onMouseLeave={() => setSize(40)}
                initial={{backgroundColor: "transparent", scale: 1}}
                whileHover={{backgroundColor: "#393fec", scale: 1.05}}
                transition={{duration: 0.2, ease: "easeOut"}}
              >
                {skill}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Accordian({
  index,
  expanded,
  setExpanded,
  name,
  skills,
}: AccordianProps) {
  const isOpen = index === expanded;
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Move the header above the animation
  const header = (
    <motion.header
      initial={false}
      onClick={() => setExpanded(isOpen ? null : index)}
      className="flex cursor-pointer justify-between border-t border-white/20 bg-black py-8 font-coolvetica text-7xl text-white "
    >
      <motion.div className="z-10 flex flex-row">
        <h2 className=" text-white/75">{index + 1}</h2>
        <h1 className="ml-12 text-white">{name}</h1>
      </motion.div>
      <motion.div
        initial={false}
        animate={{rotate: isOpen ? 180 : 0}}
        className="z-10 mr-4 flex flex-row items-center justify-center"
      >
        <ChevronDownIcon className=" h-8 w-8" />
      </motion.div>
    </motion.header>
  );

  return (
    <>
      {header}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            className=""
            exit="collapsed"
            variants={{
              open: {opacity: 1, height: "auto"},
              collapsed: {opacity: 0, height: 0},
            }}
            transition={{duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98]}}
          >
            <AccordianContent name={name} skills={skills} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export default function AccordianList({
  items,
}: {
  items: AccordianItem[];
}): JSX.Element {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Container className="lg:max-w-screen-lg">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="my-12 lg:my-16"
      >
        {items.map((item, index) => (
          <motion.main key={item.name}>
            <Accordian
              skills={item.skills}
              name={item.name}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          </motion.main>
        ))}
      </motion.div>
    </Container>
  );
}
