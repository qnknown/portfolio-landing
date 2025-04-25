import React from 'react'
import styles from './components.module.css'

function Main() {

    
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
        <div className={ styles.Main }>
            <div className={ styles.Main_top }>
                <h2 className={styles.h2}>Front-end developer</h2>
                <p className={styles.available}>ㅤ🟢AVAILABLE FOR JOBㅤ</p>
            </div>
            <div className={ styles.Main_content }>
                <div style={{display: 'flex', flexDirection:'column', alignItems: 'flex-start'}}>
                    <h1 style={{margin:0}}>Antoshchenko Taras</h1>
                    <p className={styles.Main_text}>Versatile Front-End Developer with a strong foundation in HTML, CSS, JavaScript.</p>
                    <div style={{display:'flex', flexDirection:'row', marginBottom:40}}>
                        <button className={ styles.hireBtn }>Hire Me</button>
                        <button className={ styles.emailBtn } onClick={copyEmail}>Copy Emailㅤ<span class="material-symbols-outlined">content_copy</span></button>
                    </div>
                </div>
                <img src="/img/photo1.png" alt='developer' className={styles.img}/>
            </div>
        </div>
    )
    
}

export default Main;