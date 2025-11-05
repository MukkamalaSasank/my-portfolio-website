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
        Software Engineer specializing in building scalable, cloud-native
        applications using Python, Java, and TypeScript. I bring over three
        years of experience developing and optimizing distributed systems,
        RESTful APIs, and CI/CD pipelines across academia, startups, and
        research organizations. My background includes delivering measurable
        performance gains—improving system efficiency by up to 30% and reducing
        deployment errors by 60%—through automation, microservices architecture,
        and data-driven engineering. With an M.S. in Computer Science (GPA 3.94)
        from California State University, Los Angeles, I combine strong
        theoretical foundations with practical expertise in modern web
        technologies, AI/ML integration, and cloud platforms. I thrive in
        collaborative, agile environments where technical rigor meets
        creativity—whether optimizing backend performance, enhancing user
        experience, or developing intelligent applications that bridge data and
        decision-making. Driven by curiosity and continuous improvement, I’m
        passionate about designing reliable, impactful software solutions that
        advance the future of AI, automation, and scalable systems.
      </p>
      <p></p>
    </motion.section>
  );
}
