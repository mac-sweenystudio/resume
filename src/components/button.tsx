import { cn } from "~/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

export default function Button({
  children,
  className,
  href,
}: ButtonProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <motion.button
        type="button"
        className={cn(
          "relative z-10 rounded-xl border border-white px-8 py-4 text-lg text-white lg:px-12 lg:text-2xl",
          className,
        )}
        initial={{ backgroundColor: "transparent", scale: 1 }}
        whileHover={{ backgroundColor: "#393fec", scale: 1.05 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.button>
    </Link>
  );
}
