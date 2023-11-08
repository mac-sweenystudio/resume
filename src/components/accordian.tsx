import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Container from "~/components/container";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useSize } from "~/contexts/sizeContext";

interface AccordianProps {
  name: string;
  url: string;
  children: React.ReactNode;
  image: StaticImageData;
  index: number;
  expanded: boolean | number | null;
  setExpanded: (i: number | null) => void;
}

interface AccordianItem {
  name: string;
  url: string;
  children: React.ReactNode;
  image: StaticImageData;
}

function AccordianContent({
  children,
  image,
  name,
}: {
  children: React.ReactNode;
  image: StaticImageData;
  name: string;
}) {
  const { setSize } = useSize();
  return (
    <div className="z-0 rounded-xl bg-white/5 p-8 text-4xl text-white lg:grid lg:grid-cols-2 lg:p-16 ">
      <div className="relative z-10">
        <div className="pr-8 text-lg text-white/75">Overview</div>
        <motion.div
          onMouseEnter={() => setSize(120)}
          onMouseLeave={() => setSize(40)}
          className=" pr-8 pt-4 text-base text-white"
        >
          {children}
        </motion.div>
      </div>
      <div className="mt-12 flex justify-end lg:mt-0">
        <Image src={image} alt={name} className="rounded-xl" />
      </div>
    </div>
  );
}

function Accordian({
  index,
  expanded,
  setExpanded,
  name,
  children,
  image,
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
        animate={{ rotate: isOpen ? 180 : 0 }}
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
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <AccordianContent image={image} name={name}>
              {children}
            </AccordianContent>
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
    <Container className="lg:max-w-screen-xl">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="my-12 lg:my-32"
      >
        {items.map((item, index) => (
          <motion.main key={item.name}>
            <Accordian
              image={item.image}
              url={item.url}
              name={item.name}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            >
              {item.children}
            </Accordian>
          </motion.main>
        ))}
      </motion.div>
    </Container>
  );
}
