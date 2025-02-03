'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[45rem] text-center leading-8 scroll-mt-36 mt-28 font-roboto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-[2rem] font-bold capitalize mb-8 text-white tracking-wider">
        About me
      </h2>
      <p className="mb-3 font-medium text-slate-400">
        As a graduate student of Computer Science from CSULA with 2+ years of
        experience, I combine rigorous academic training with a passion for
        solving complex, real-world challenges through technology. My work is
        rooted in bridging theoretical concepts with practical applications,
        driven by a curiosity for how intelligent systems can innovate
        industries like healthcare, finance, and defense. With a foundation in
        both machine learning and full-stack development, I thrive in
        collaborative environments where creativity meets precision, delivering
        solutions that prioritize scalability, user-centric design, and ethical
        considerations. Committed to lifelong learning, I aim to contribute to
        teams shaping the future of AI and data-driven decision-making while
        adapting to the evolving demands of the tech landscape.
      </p>
      <p></p>
    </motion.section>
  );
}
