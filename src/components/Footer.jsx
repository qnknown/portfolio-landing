import React, { useRef, useEffect, useState } from 'react'
import styles from './components.module.css'

function Footer() {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (footerRef.current) observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <div
            className={`${styles.Footer} ${isVisible ? styles.footer_animated : ''}`}
            id='footer'
            ref={footerRef}
        >
            <div className={styles.Footer_container}>
                <h2 style={{fontWeight:'normal', color:'#C0C0C0'}} className={styles.location}>Located in Chernivtsi, UA</h2>
                <ul style={{margin:0, listStyle:'none', padding:0}} className={styles.socials}>
                    <li className={styles.socials_list}><a href="https://t.me/briddges" target="_blank" className={styles.contact_link}>Telegram</a></li>
                    <li className={styles.socials_list}><a href="" target="_blank" className={styles.contact_link}>E-mail</a></li>
                    <li className={styles.socials_list}><a href="https://t.me/briddges" target="_blank" className={styles.contact_link}>LinkedIn</a></li>
                </ul>
                <p className={styles.available_footer}>ㅤ🟢AVAILABLE FOR JOBㅤ</p>
            </div>
        </div>
    )
}

export default Footer;
