'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.9,
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
        Software Engineer with 3 years of experience delivering scalable
        solutions in Python, Java, JavaScript, and cloud platforms, combining
        rigorous academic training from California State University, Los Angeles
        (M.S. in Computer Science, GPA 3.94) with hands-on contributions to AI,
        distributed systems, and web technologies. Skilled at bridging theory
        and real-world impact, with a track record of enhancing performance and
        efficiency across fast-paced environments in sectors like healthcare,
        research, and non-profits. Adept at collaborating with diverse teams and
        applying machine learning, full-stack development, and automation to
        solve complex technical challenges while prioritizing user-centric
        design and ethical standards. Committed to continuous learning and
        innovation, eager to support teams shaping the future of intelligent
        systems and data-driven decision-making.
      </p>
      <p></p>
    </motion.section>
  );
}
