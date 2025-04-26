import styles from './style/components.module.css'
import { RevealText, Reveal } from './animations/Reveal'
import Header from './Header';
import Background from './animations/Background';
import { scroller } from 'react-scroll';

function WelcomePage() {
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 100,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <div className={styles.Welcome}>
            <Header />
            <div className={styles.Welcome_main}>
                <RevealText>
                    <h1 className={styles.h1}>FRONTEND<span class="material-symbols-outlined" style={{transform: 'translateY(-10px) rotate(45deg)', scale:2, position: "absolute", overflow:"visible"}}>code</span></h1>
                </RevealText>
                <RevealText>
                    <h1 className={styles.dev_h1}>DEVELOPMENT</h1>
                </RevealText>
                <RevealText>
                    <h1 className={styles.h1}>SPECIALIST</h1> 
                </RevealText>
                           
            </div>
            <Reveal>
                <div className={styles.Welcome_bot}>
                    <p className={`${styles.regular_p} ${styles.leftText}`}>Learn about my skills</p>
                    <button className={styles.scrollBtn} onClick={() => scrollToSection('skills')}>v</button>
                    <p className={`${styles.regular_p} ${styles.rightText}`} style={{fontStyle:'italic', fontWeight:'lighter'}}>Junior Front-end Developer</p>
                </div>
            </Reveal>
            
        </div>
    )
}

export default WelcomePage;
