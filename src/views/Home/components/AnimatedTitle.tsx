import { motion } from 'framer-motion';
import { containerVariants, letterVariants } from '../helpers/variants';
import styles from '../Home.module.scss';

interface AnimatedTitleProps {
    title: string;
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => (
    <motion.h1
        className={styles.title}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
    >
        {title.split('').map((letter, index) => (
            <motion.span
                key={index}
                variants={letterVariants}
                transition={{ duration: 0.4 }}
            >
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.h1>
);
