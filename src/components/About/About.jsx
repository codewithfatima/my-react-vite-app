import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FadeIn } from './variants';
import AboutMe from '../../assets/AboutMe.jpg'
import './about.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const fadeIn = (direction, duration = 0.5) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? -50 : 50,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 25,
          delay: duration,
        },
      },
    };
  }

  const slideInFromRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 40,
        damping: 25,
        mass: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section id="about" variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.5,
        },
      },
    }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}>
      <motion.h2 variants={fadeIn('up', 0.3)}>About Me</motion.h2>

      <div className="about__container">
        <motion.div className="about__image" variants={fadeIn('left', 0.3)}>
          <img src={AboutMe} alt="About Me" />
        </motion.div>

        <div className="about__content">
          <motion.p
            ref={ref}
            variants={FadeIn('left', 0.3)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="about__text"
          >
            I’m Full Stack Developer with a year of hands-on experience specializing
            in MERN stack development. Equipped with a robust skill set in <span> HTML5, CSS 3,tailwindcss
            Bootstrap, JavaScript, JSON, jQuery, MongoDB, Express.js, React.js , React Native , Npm ,JWT, ES6 & basic knowledge of .NET And ASPNET, Node.js,
            for testing like manual testing, Docker,  Google Cloud, GitHub.</span>
            I thrive in crafting seamless, scalable, and visually captivating web applications.
            From conceptualization to deployment, I bring creativity and efficiency
            to every project, ensuring exceptional user experiences and optimized
            performance. Ready to leverage my expertise to drive digital innovation
            and exceed expectations in the ever-evolving tech landscape.
          </motion.p>
          <motion.button
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="bte">Let's Talk</motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
