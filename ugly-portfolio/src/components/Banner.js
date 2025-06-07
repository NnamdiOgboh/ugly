import React from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="banner">
      <motion.div 
        className="banner-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="banner-text" variants={itemVariants}>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
          >
            Welcome to My Artistic Journey
          </motion.h1>
          <motion.p 
            className="artist-intro"
            variants={itemVariants}
          >
            Hello! I'm an artist passionate about expressing emotions and stories through visual art. 
            My work explores the beauty in imperfection, the raw emotions of human experience, and 
            the unconventional perspectives that make art truly meaningful. Each piece tells a story, 
            captures a moment, or challenges the viewer to see the world through a different lens.
          </motion.p>
          <motion.p 
            className="artist-mission"
            variants={itemVariants}
          >
            Through "uglyarts," I aim to redefine beauty standards in art and showcase that true 
            artistry lies not in perfection, but in authenticity and emotional depth. Every brushstroke, 
            every color choice, and every composition is a piece of my soul shared with the world.
          </motion.p>
          <motion.button 
            className="cta-button" 
            onClick={() => {
              const gallery = document.getElementById('gallery');
              if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
            }}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
        <motion.div 
          className="banner-image"
          initial={{ x: 100, opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 80 }}
        >
          <motion.div 
            className="artist-placeholder"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 20px 50px rgba(255, 255, 255, 0.3)"
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span>🎨</span>
            <p>Artist Photo</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;

