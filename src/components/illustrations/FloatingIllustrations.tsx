"use client";

import { motion } from "framer-motion";
import ComputerIllustration from "./ComputerIllustration";
import RocketIllustration from "./RocketIllustration";
import ChipIllustration from "./ChipIllustration";
import CircuitIllustration from "./CircuitIllustration";

const float = (delay: number) => ({
    animate: {
        y: [0, -14, 0],
        rotate: [0, 2, -2, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
    },
});

export default function FloatingIllustrations() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
            <motion.div
                className="absolute left-[4%] top-[18%] text-blue-400/20 w-28 md:w-36"
                {...float(0)}
            >
                <ComputerIllustration className="w-full h-auto" />
            </motion.div>

            <motion.div
                className="absolute right-[6%] top-[12%] text-cyan-400/25 w-20 md:w-28"
                {...float(1.5)}
            >
                <RocketIllustration className="w-full h-auto" />
            </motion.div>

            <motion.div
                className="absolute right-[10%] bottom-[22%] text-purple-400/20 w-24 md:w-32 hidden md:block"
                {...float(0.8)}
            >
                <ChipIllustration className="w-full h-auto" />
            </motion.div>

            <motion.div
                className="absolute left-[8%] bottom-[28%] text-emerald-400/15 w-32 md:w-40 hidden lg:block"
                {...float(2)}
            >
                <CircuitIllustration className="w-full h-auto" />
            </motion.div>
        </div>
    );
}
