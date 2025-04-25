import React, { useEffect, useState } from 'react'
import styles from './components.module.css'

function Header() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`${styles.header_main} ${animate ? styles.header_main_animated : ''}`}>
            <ul className={styles.header_list}>
                <li className={styles.header_list_item}>ABOUT</li>
                <li className={styles.header_list_item}>
                    <a href="#footer" className={styles.contact_link}>CONTACT</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
