'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import photo from '../public/photo.jpg';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Home');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="flex flex-col sm:flex-row justify-center items-center w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 sm:mt-20 gap-4 sm:gap-6 mb-24 scroll-mt-80"
      id="home"
    >
      <div className="order-1 sm:order-2 flex items-center justify-center mt-8 sm:mt-0 relative min-w-max">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.4,
            }}
          >
            <Image
              src={photo}
              alt="Sasank Mukkamala"
              quality={95}
              className="h-64 w-64 sm:h-96 sm:w-96 md:h-128 md:w-128 lg:h-160 lg:w-160 rounded-full object-cover border-[0.3rem] border-[#942dc4] shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="order-2 sm:order-1 w-full sm:w-1/2 text-slate-100 font-poppins text-center sm:text-left"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Hi, I am
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-2">
          Sasank Mukkamala
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
          And I&apos;m a{' '}
          <span className="relative">
            <span className="absolute top-0 left-0 w-full h-full blur-xl opacity-70" />
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',
                2000,
                'Machine Learning Engineer',
                2000,
                'Artificial Intelligence Engineer',
                2000,
                'Software Engineer',
                2000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
              className="text-[#942dc4] font-extrabold"
            />
          </span>
        </p>
        <motion.h1
          className="mt-4 mb-6 font-medium text-sm sm:text-base text-slate-400 leading-relaxed max-w-md mx-auto sm:mx-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Turning visionary concepts into cutting-edge realities through AI,
          machine learning, and seamless full-stack development.
        </motion.h1>
        <motion.div
          className="flex flex-wrap sm:flex-row gap-4 justify-center sm:justify-start"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            className="bg-gradient-to-r from-[#dc00ff] to-[#8f00ff] text-white text-center font-bold px-6 py-2 sm:px-7 sm:py-3 rounded-full text-[1.5rem] sm:text-[1rem] outline-none focus:scale-110 hover:scale-110 transition-all"
            href="/Sasank_Mukkamala_Resume_Software_Engineer.pdf"
            download
          >
            Check Resume
          </a>
          <Link
            href="#contact"
            className="group bg-white text-black text-center font-bold px-6 py-2 gap-1 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base flex justify-center items-center outline-none focus:scale-110 hover:scale-110 transition-all"
            onClick={() => setActiveSection('Contact')}
          >
            Contact me
            <BsArrowRight className="opacity-70 group-hover-translate-x-1 transition" />
          </Link>
          <a
            className="bg-white p-4 sm:p-4 text-sm sm:text-base text-black gap-2 rounded-full flex justify-center items-center outline-none focus:scale-110 hover:scale-110 transition-all"
            href="https://www.linkedin.com/in/sasank-mukkamala/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 sm:p-4 text-sm sm:text-base text-black gap-2 rounded-full flex justify-center items-center outline-none focus:scale-110 hover:scale-110 transition-all"
            href="https://github.com/MukkamalaSasank?tab=repositories"
            target="_blank"
          >
            <BsGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
