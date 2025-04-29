import styles from './style/components.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { img: "img/Proj1.png", title: "Portfilio site", description: "Simple portfolio landing." },
    { img: "img/Proj2.png", title: "Web app", description: "Telegram sessions management application." },
    { img: "img/Proj3.png", title: "Desktop app", description: "Database management app." },
];

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 для влево, 1 для вправо
    const total = projects.length;

    const paginate = (dir) => {
        setDirection(dir);
        setCurrentIndex((prev) => (prev + dir + total) % total);
    };

    const getProject = (offset) => {
        const index = (currentIndex + offset + total) % total;
        return projects[index];
    };

    return (
        <div className={styles.Projects_Wrapper}>
            <h2 className={styles.h2} style={{ marginTop: 20 }}>Recent projects</h2>
            <div className={styles.carouselContainer}>
                <button onClick={() => paginate(-1)} className={styles.carouselBtn}>‹</button>

                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel} style={{ display: 'flex', gap: '20px', transition: 'transform 0.4s ease' }}>
                        {[-1, 0, 1].map((offset) => {
                            const project = getProject(offset);
                            const isActive = offset === 0;

                            return (
                                <motion.div
                                    key={project.title}
                                    className={styles.Project}
                                    initial={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.4 }}
                                    animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.4 }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        zIndex: isActive ? 2 : 1,
                                    }}
                                >
                                    <img src={project.img} className={styles.Project_img} alt={project.title} />
                                    <h3 className={styles.h3} style={{ margin: 0, transform:'translate(0,-20px)' }}>{project.title}</h3>
                                    <p className={styles.light_p} style={{ margin: 0, fontSize:18, transform:'translate(0,-10px)' }}>{project.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>


                <button onClick={() => paginate(1)} className={styles.carouselBtn}>›</button>
            </div>
        </div>
    );
}

export default Projects;
