import styles from './style/components.module.css'
import { Reveal } from './animations/Reveal'

function Interested() {
    return (
        <div className={styles.Interested} id="contact" style={{marginTop:40}}>
            <Reveal>
                <h3 className={styles.h3} style={{marginTop: 40, marginBottom:0}}>Interested in collaborating?</h3>
                <p className={styles.light_p}>Let's talk</p>
            </Reveal>
        </div>
    )
}

export default Interested;
