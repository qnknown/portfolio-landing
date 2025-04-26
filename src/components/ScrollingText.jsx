'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import styles from './style/components.module.css'

export default function Home() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden">
      <div />
      <div ref={container}>
        <Slide direction={'left'} left={"-100%"} progress={scrollYProgress} />
        <Slide direction={'right'} left={"-30%"} progress={scrollYProgress} />
      </div>
      <div />
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);
  return (
    <motion.div style={{ x: translateX, left: props.left, position:'relative', display:'flex', whiteSpace:'nowrap' }}>
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  )
}

const Phrase = () => {
  return (
    <div className={styles.scroller}>
      <p className={styles.scroller_text} style={{lineHeight:0}}>JAVASRIPT TYPESRIPT NODE VUE REACT</p>
    </div>
  )
}
