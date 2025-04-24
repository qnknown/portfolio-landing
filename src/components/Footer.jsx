import React from 'react'
import styles from './components.module.css'

function Footer() {
    return (
        <div className={styles.Footer} id='footer'>
            <div className={styles.Footer_container}>
                <h2 style={{margin:0, fontWeight:'normal', color:'#C0C0C0', marginLeft:40}}>Located in Chernivtsi, UA</h2>
                <ul style={{margin:0, listStyle:'none', padding:0}} className={styles.socials}>
                    <li className={styles.socials_list}><a href="https://t.me/briddges" target="_blank" className={styles.contact_link}>Telegram</a></li>
                    <li className={styles.socials_list}><a href="" target="_blank" className={styles.contact_link}>E-mail</a></li>
                    <li className={styles.socials_list}><a href="https://t.me/briddges" target="_blank" className={styles.contact_link}>LinkedIn</a></li>
                </ul>
                <p className={styles.available} style={{margin:0, marginRight:40}} >ㅤ🟢AVAILABLE FOR JOBㅤ</p>
            </div>
        </div>
    )
}

export default Footer;