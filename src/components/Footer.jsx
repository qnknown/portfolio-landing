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

    const copyEmail = () => {
        const email = "taras6514@gmail.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("Email copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV_Taras.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <>
            <Reveal>
                <div className={styles.Footer} style={{margin:0}}>
                    <h3 className={styles.h3} style={{margin:0}}>Contact me</h3>
                    <nav className={styles.navigation}>
                                    <ul className={styles.nav_ul}>
                                        <li className={styles.nav_item}><a href="https://t.me/briddges" target="_blank" rel="noopener noreferrer" style={{color:"white", textDecoration:"none"}}>Telegram</a></li>
                                        <li className={styles.nav_item} onClick={copyEmail}>E-mail</li>
                                        <li className={styles.nav_item} onClick={downloadCV}><a href="/CV.pdf" download="My_CV_Taras.pdf" style={{ color: "white", textDecoration: "none" }}>CV (PDF)</a></li>
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
