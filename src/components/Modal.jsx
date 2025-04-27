import styles from './style/components.module.css';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Modal({ onClose }) {
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

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <motion.div 
                className={styles.modalContent}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Interested in collaborating?</h2>
                <p>All links:</p>
                <div className={styles.iconRow}>
                    <a href="https://t.me/briddges" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane size={30} />
                    </a>
                    <a href="" rel="noopener noreferrer" onClick={(e) => { 
                        e.preventDefault(); 
                        copyEmail(); 
                    }}>
                        <FaEnvelope size={30} />
                    </a>
                    <a href="https://linkedin.com/in/yourLinkedIn" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Modal;
