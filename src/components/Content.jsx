import React, { useEffect, useState } from 'react'
import styles from './components.module.css'

function Content() {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className={`${styles.Content} ${animate ? styles.Content_animated : ''}`}>
            <div className={styles.First}>
                <div className={styles.experience}>
                    <h2 style={{margin:0}}>Experience</h2>
                    <h2 style={{color: '#7821E6', fontWeight:'normal'}}>University practicum</h2>
                    <p className={styles.Content_text}>Developed a web application for managing sessions on Telegram.<br></br>
                    Technologies used: Python (backend), React + Next.js (frontend)</p>
                    <p style={{color: '#C0C0C0', fontSize:'18px', margin:0}}>2024</p>
                </div>
                <div className={styles.education}>
                <h2 style={{margin:0}}>Education</h2>
                    <h2 style={{color: '#7821E6', fontWeight:'normal'}}>Yurii Fedkovych 
                    Chernivtsi National University</h2>
                    <p className={styles.Content_text}>Software engineering bachelor’s degree</p>
                    <p style={{color: '#C0C0C0', fontSize:'18px', margin:0}}>2022-2026 (Still studying)</p>

                </div>
                <div className={styles.languages}>
                <h2 style={{margin:0}}>Languages</h2>
                    <ul style={{margin:0, marginTop:20}}>
                        <li style={{fontSize:18}}>Ukrainian <b>C2</b></li>
                        <li style={{fontSize:18}}>English <b>B2+</b></li>
                    </ul>
                </div>
                <div className={styles.courses}>
                <h2 style={{margin:0}}>Courses</h2>

                    <h2 style={{color: '#7821E6', fontWeight:'normal'}}>WEB Programming (php)</h2>
                    <p className={styles.Content_text}>IABS Academy</p>
                    <p style={{color: '#C0C0C0', fontSize:'18px', margin:0}}>2019</p>

                    <h2 style={{color: '#7821E6', fontWeight:'normal'}}>Marketing of IT products</h2>
                    <p className={styles.Content_text}>Genesis</p>
                    <p style={{color: '#C0C0C0', fontSize:'18px', margin:0}}>2024</p>

                </div>
            </div>
            <div className={styles.Second}>
                <div className={styles.skillsWrapper_Main}>
                    <div className={styles.skills_Main}>
                        <h2 style={{margin:0}}>Skills</h2>
                    </div>
                </div>
                <ul className={styles.skill_list}>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills}>HTML/CSS</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills} style={{background: 'linear-gradient(191deg,rgba(27, 27, 27, 1) 80%, rgba(118, 33, 230, 0.018) 100%)'}}>Javascript</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills}>JQuery</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills} style={{background: 'linear-gradient(191deg,rgba(27, 27, 27, 1) 80%, rgba(118, 33, 230, 0.018) 100%)'}}>Typescript</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills}>Node.js</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills} style={{background: 'linear-gradient(191deg,rgba(27, 27, 27, 1) 80%, rgba(118, 33, 230, 0.018) 100%)'}}>Vue.js basics</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills}>Bootstrap</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills} style={{background: 'linear-gradient(191deg,rgba(27, 27, 27, 1) 80%, rgba(118, 33, 230, 0.018) 100%)'}}>Git</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills}>MySQL, Mongo</h2></li>
                    <li className={styles.skillsWrapper}><h2 className={styles.skills} style={{background: 'linear-gradient(191deg,rgba(27, 27, 27, 1) 80%, rgba(118, 33, 230, 0.018) 100%)'}}>React.js basics</h2></li>      
                </ul>
                <div className={styles.softsSkills}>
                    <h2 style={{color: '#7821E6', fontWeight:'normal', margin:0, textAlign:'left'}}>Personal skills</h2>
                    <ul style={{textAlign:'left', marginTop:15, marginBottom:0}}>
                        <li className={styles.Content_text}>Strong problem-solving and analytical skills</li>
                        <li className={styles.Content_text}>Flexibility and quick adaptation</li>
                        <li className={styles.Content_text}>Collaborative and independent working capabilities</li>
                        <li className={styles.Content_text}>Time Management skills</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default Content;