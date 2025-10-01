import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Project10 from '../../src/assets/Project10.jpg';
import Project8 from '../../src/assets/Project8.png';
import Project5 from '../../src/assets/Project5.png';


const Project = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      image: Project10,
      title: 'E-Commerce Website',
      category: 'back',
      github: 'https://github.com/codewithfatima/E-Commerce-Website',
      demo: 'https://e-commerce-website-0irp.onrender.com',
      tech: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      id: 2,
      image: Project8,
      title: 'MERN Quiz Website',
      category: 'back',
      github: 'https://github.com/codewithfatima/Quiz-App',
      demo: 'https://quiz-app-1-f9lg.onrender.com',
      tech: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      id: 2,
      image: Project5,
      title: 'Fully React Tailwindcss website',
      category: 'front',
      github: 'https://github.com/codewithfatima/Quiz-App',
      demo: 'https://quiz-app-1-f9lg.onrender.com',
      tech: ['Tailwind css' ,'React' ]
    },
      {
      id: 2,
      image: Project8,
      title: 'Weather Website',
      category: 'front',
      github: 'https://github.com/codewithfatima/Quiz-App',
      demo: 'https://quiz-app-1-f9lg.onrender.com',
      tech: [ 'Tailwindcss', 'React', 'Redux']
    },
  ];

  const fadeIn = (direction = 'up', delay = 0.3) => ({
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
  });

  const tabs = ['all', 'front', 'back'];

  return (
    <section id='portfolio' className="py-16 px-5 bg-[#0f172a] text-white">
      {/* Heading */}
      <motion.h5
        className="text-emerald-400 text-xl text-center"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        My Recent Work
      </motion.h5>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border border-emerald-400 text-sm transition 
              ${
                activeTab === tab
                  ? 'bg-emerald-400 text-[#0f172a] font-bold'
                  : 'text-emerald-400 hover:bg-emerald-500 hover:text-black'
              }`}
          >
            {tab === 'all' ? 'All' : tab === 'front' ? 'Front-End' : 'Back-End'}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projects
          .filter((project) => activeTab === 'all' || project.category === activeTab)
          .map(({ id, image, title, github, demo, tech }) => (
            <article
              key={id}
              className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">{title}</h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tech?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-emerald-400 text-[#0f172a] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-emerald-400 hover:text-[#0f172a] transition"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm bg-emerald-400 text-[#0f172a] px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
      </motion.div>
    </section>
  );
};

export default Project;
