import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedULogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Stylish Bold U Shape */}
        <motion.path
          d="M80 40 
             V180 
             Q150 280 220 180 
             V40" // Stylish open U with rounded bottom
          stroke="#1f8d93"
          strokeWidth="22" // bolder stroke
          strokeLinecap="round" // rounded edges
          strokeLinejoin="round" // smooth corners
          fill="transparent"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2.5, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
