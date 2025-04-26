import styles from './style/components.module.css'
import { Reveal } from './animations/Reveal'

function SkillsPage() {
    return (
        <div className={styles.Skills_Container} id="skills">
            <Reveal>
                <section className={styles.Skills_top}>
                    <h2 className={styles.h2}>Expretise</h2>
                </section>
            </Reveal>
            
            <section className={styles.Skills_content}>
                <Reveal>
                    <div className={styles.Skills_row}>
                        <div className={styles.Skill}>
                            <h3 className={styles.h3}>Front-end development</h3>
                            <p className={styles.light_p}>Versatile Front-end developer with experience in <b>JS, TS, Node, JQuery, React.js basics, Bootstrap or Tailwind</b></p>
                        </div>
                        <div className={styles.Skill}>
                            <h3 className={styles.h3}>Version control systems</h3>
                            <p className={styles.light_p}>Familiar with git and It’s features. Had experience working with <b>GitHub</b></p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className={styles.Skills_row}>
                        <div className={styles.Skill}>
                            <h3 className={styles.h3}>Database development</h3>
                            <p className={styles.light_p}>Experienced with both SQL/noSQL databases, including: <b>MySQL, Mongo DB</b></p>
                        </div>
                        <div className={styles.Skill}>
                            <h3 className={styles.h3}>Task management</h3>
                            <p className={styles.light_p}>Had experience of working with <b>Jira, Trello and Notion</b>, which significantly improved my productivity</p>
                        </div>
                    </div>
                </Reveal>
                
            </section>
        </div>
    )
}

export default SkillsPage;
