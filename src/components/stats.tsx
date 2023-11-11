import {bounceAnimation, staggeredAnimation} from "~/utils/animations";
import {motion, useInView} from "framer-motion";

import {useRef} from "react";
import {useSize} from "~/contexts/sizeContext";

const stats = [
  {id: 1, name: "Years of Experience", value: "3+"},
  {id: 2, name: "Proficient Frameworks", value: "20+"},
  {id: 3, name: "Applications Deployed", value: "40+"},
  {id: 4, name: "Cafe's Coded In", value: "100+"},
];

export default function Stats() {
  const {setSize} = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="w-full border-t border-white/20 bg-black">
      <motion.dl
        initial="initial"
        ref={ref}
        animate={isInView ? "animate" : "initial"}
        variants={staggeredAnimation}
        className="grid grid-cols-2 gap-0.5 divide-y divide-white/20 rounded-2xl text-center lg:grid-cols-4 lg:divide-x lg:divide-y-0"
      >
        {stats.map((stat) => (
          <motion.div
            variants={bounceAnimation}
            key={stat.id}
            className="flex flex-col p-8"
            onMouseEnter={() => setSize(120)}
            onMouseLeave={() => setSize(40)}
          >
            <dt className="z-10 text-sm leading-6 text-white/75 lg:text-lg">
              {stat.name}
            </dt>
            <dd className="z-10 order-first font-coolvetica text-6xl font-semibold text-white lg:text-8xl">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  );
}
