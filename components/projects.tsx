'use client';

import React, { useEffect } from 'react';
import { projectsData } from '../lib/data';
import Card from './card';
import { FaGithub } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects');
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="font-roboto px-4 mt-24 sm:px-8 md:px-16 lg:px-24 py-8 scroll-mt-20"
      id="projects"
    >
      <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 tracking-wider text-white font-bold text-center">
        My Projects
      </h2>
      <p className="text-slate-400 text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
        I have worked on a wide range of projects, from web apps to Android
        apps. Here are some of my projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Card {...project} />
          </React.Fragment>
        ))}
      </div>

      <p className="mt-12 text-slate-400 text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
        Please visit my GitHub for more projects.
      </p>
      <div className="flex justify-center items-center mt-6">
        <div className="flex justify-center items-center p-3 bg-gradient-to-r from-[#654e9d] to-[#9874cc] text-white gap-2 rounded-full shadow-md hover:scale-105 transition-transform">
          <FaGithub />
          <div>
            <a
              href="https://github.com/MukkamalaSasank?tab=repositories"
              className="font-medium"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
