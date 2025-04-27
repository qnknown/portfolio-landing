import styles from './style/components.module.css';
import { RevealTop } from './animations/Reveal';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { BlinkingText } from './animations/BlinkingText';
import { useState } from 'react';
import Modal from './Modal';

function Header() {
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
            <RevealTop>
                <div className={styles.header}>
                    <h2 className={styles.name}>Antoshchenko Taras</h2>
                    <nav className={styles.navigation}>
                        <ul className={styles.nav_ul}>
                            <li className={styles.nav_item}>
                                <Link to="skills" smooth={true} duration={10}>Skills</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link to="about" smooth={true} duration={100}>About</Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link to="contact" smooth={true} duration={100}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <motion.button className={styles.hireBtn} onClick={handleClick}>
                        <BlinkingText />
                    </motion.button>
                </div>
            </RevealTop>
            
            {isModalOpen && <Modal onClose={closeModal} />}
        </>
        
    );
}

export default Header;
