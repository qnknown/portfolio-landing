import { motion } from 'framer-motion';

export function BlinkingText() {
    return (
        <motion.span
            animate={{
                opacity: [1, 0.1, 1],
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
            }}
        >
            Hire me
        </motion.span>
    );
};
