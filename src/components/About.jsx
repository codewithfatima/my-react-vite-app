import React from 'react';
import { Link } from 'react-router-dom'
import { DiMongodb } from "react-icons/di";
import { FaMobileScreen } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { PiBracketsAngleBold } from "react-icons/pi";

const About = () => {
  return (
    <div className='mt-18 mb-20 opacity-0 animate-fadeIn abnimation-delay-1000 text-center'>
      <h1 className="text-3xl md:text-6xl font-bold text-emerald-400 mb-4 animation-fadeIn">
        About Me</h1>
      <p className='text-gray-300 text-lg'>Get to know me better</p>
      <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg mb-20"></span>

      {/* left side */}
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-20 text-left  px-4 md:px-0'>
        <div className='w-full md:w-1/2'>
          <h2 className="text-2xl md:text-3xl mt-10 font-bold text-emerald-400 mb-6">
            A passionate Full-Stack Developer with a keen eye for detail
          </h2>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            I’m a dedicated developer who thrives on building clean, scalable, and user-friendly applications.
            From crafting responsive frontends with modern frameworks like <span className="text-emerald-400">React </span>
            to developing efficient backends with <span className="text-emerald-400">Node.js</span> and
            <span className="text-emerald-400"> MongoDB</span>, I enjoy turning ideas into real, impactful products.
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            With a strong focus on problem-solving and detail, I’m always eager to learn new technologies, embrace challenges,
            and contribute to projects that make a difference. Beyond coding, I value teamwork, communication,
            and continuous improvement to grow as both a developer and collaborator.
          </p>

          <button className='bg-emerald-500 text-white rounded-full px-6 py-2 cursor-pointer transition duration-300 ease-in-out 
          hover:scale-105 hover:shadow-lg hover:bg-emerald-600'>
            <Link>
              Let’s Connect →
            </Link>
          </button>

        </div>

        {/* rightside */}

        <div className='w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  my-auto '>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <DiMongodb className="text-green-500 text-5xl mb-2" />
            <span className="text-green-500">MongoDB</span>
          </div>

          <div className="flex flex-col  items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <FaReact className="text-cyan-400 text-5xl mb-2" />
            <span className="text-blue-300">React</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <FaMobileScreen className="text-blue-400 text-5xl mb-2" />
            <span className="text-blue-400">Responsive</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <IoLogoJavascript className="text-yellow-400 text-5xl mb-2" />
            <span className="text-yellow-500">JavaScript</span>
          </div>

          <div className="flex flex-col items-center bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-105 transition border border-green-200">
            <PiBracketsAngleBold className="text-purple-400 text-5xl mb-2" />
            <span className="text-purple-300">Code</span>
          </div>
        </div>
      </div>



    </div>
  )
}

export default About