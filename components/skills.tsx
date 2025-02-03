'use client';

import React, { useEffect } from 'react';
import { skillsData } from '../lib/data';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';
import SkillCard from './skillCard';

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Skills');
    }
  }, [inView, setActiveSection]);
  return (
    <section
      ref={ref}
      className="font-roboto px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] py-[2rem] scroll-mt-20"
      id="skills"
    >
      <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 tracking-wider text-white font-bold text-center">
        My Skills
      </h2>
      <p className="text-slate-400 text-center text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] max-w-[40rem] mx-auto">
        Here are my skills on which I have been working on for the past few
        years.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] mt-[3rem] max-w-[50rem]">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <SkillCard {...skill} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
