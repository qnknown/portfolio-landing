import styles from './style/components.module.css'
import { Reveal } from './animations/Reveal'
import { motion } from 'framer-motion'
import { BlinkingText } from './animations/BlinkingText'
import { useState } from 'react';
import Modal from './Modal';

function Footer() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = (e) => {
        e.target.blur();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <Reveal>
                <div className={styles.Footer} style={{margin:0}}>
                    <h3 className={styles.h3} style={{margin:0}}>Contact me</h3>
                    <nav className={styles.navigation}>
                                    <ul className={styles.nav_ul}>
                                        <li className={styles.nav_item}>Telegram</li>
                                        <li className={styles.nav_item}>E-mail</li>
                                        <li className={styles.nav_item}>Other</li>
                                    </ul>
                                </nav>
                    <motion.button className={styles.hireBtn} onClick={handleClick}>
                        <BlinkingText />
                    </motion.button>
                </div>
            </Reveal>
            {isModalOpen && <Modal onClose={closeModal} />}
        </>
        
        
    )
}

export default Footer
