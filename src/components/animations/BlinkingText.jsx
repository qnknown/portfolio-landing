import { motion } from 'framer-motion';
import styles from '../style/components.module.css'

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
