import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Background() {
  const [background, setBackground] = useState(
    "linear-gradient(135deg, #0F0F0F, rgb(25, 25, 25))"
  );

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setBackground("linear-gradient(135deg,rgb(24, 24, 24), rgb(16, 16, 16))");
    } else if (scrollY >= 100 && scrollY < 300) {
      setBackground("linear-gradient(135deg, rgb(36, 36, 36), rgb(24, 24, 24))");
    } else if (scrollY >= 300 && scrollY < 500) {
      setBackground("linear-gradient(135deg, rgb(17, 17, 17), rgb(0, 0, 0))");
    } else {
      setBackground("linear-gradient(135deg, rgb(23, 23, 23), rgb(12, 12, 12))");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: background,
      }}
      initial={{ background }}
      animate={{ background }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    />
  );
}

export default Background;
