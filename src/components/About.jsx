import styles from './style/components.module.css'
import { Reveal } from './animations/Reveal'

function AboutPage() {
    return (
        <div className={styles.About_Container} id="about">
            <section className={styles.About_column}>
                    <div className={styles.Education}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Education</h3>
                        <p className={styles.light_p}>Yuriy Fedkovych Chernivtsi National University<br></br><b>Software engineering bachelor`s degree</b><br></br><i>2022-2026 (still studying)</i></p>
                    </div>
                    <div className={styles.Location}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Languages</h3>
                        <p className={styles.light_p}>Ukrainian <b>C2</b><br></br>English <b>B2+</b></p>
                    </div>
                    <div className={styles.Languages}>
                        <h3 className={styles.h3} style={{marginBottom:20}}>Location</h3>
                        <p className={styles.light_p}>Currently located in <i>Chernivtsi, UA</i></p>
                    </div>
            </section>
            <section className={styles.About_column}>
                <div className={styles.Experience}>
                    <h3 className={styles.h3} style={{marginBottom:20}}>Experience</h3>
                    <p className={styles.light_p}><b>University Practicum (2024)</b><br></br>Developed a web application for managing sessions on Telegram. Technologies used: Python (backend), React + Next.js (frontend)</p>
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
