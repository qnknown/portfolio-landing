import styles from './style/components.module.css'
import { Reveal } from './animations/Reveal'

function AboutPage() {
    return (
        <div className={styles.About_Container} id="about">
            <section className={styles.About_column}>
                    <div className={styles.Education}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Education</h3>
                        <p className={styles.light_p}>Yuriy Fedkovych Chernivtsi National University<br></br>Software engineering bachelor`s degree<br></br>2022-2026 (still studying)</p>
                    </div>
                    <div className={styles.Location}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Languages</h3>
                        <p className={styles.light_p}>Ukrainian C2<br></br>English B2+</p>
                    </div>
                    <div className={styles.Languages}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Location</h3>
                        <p className={styles.light_p}>Currently located in Chernivtsi, UA</p>
                    </div>
            </section>
            <section className={styles.About_column}>
                <div className={styles.Experience}>
                    <h3 className={styles.h3} style={{marginBottom:20}}>Experience</h3>
                    <p className={styles.light_p}>University Practicum (2024)<br></br>Developed a web application for managing sessions on Telegram. Technologies used: Python (backend), React + Next.js (frontend)</p>
                </div>
                <div className={styles.Hobbies}>
                    <div className={styles.Hobbies_text}>
                        <h3 className={styles.h3} style={{margin: 0, marginBottom:20}}>Hobbies</h3>
                        <p className={styles.light_p}>Design, gaming, creating && listening to music</p>
                    </div>
                    <img className={styles.Hobbies_img} src='/img/photo1.png'></img>
                </div>
            </section>
        </div>
    )
}

export default AboutPage;
