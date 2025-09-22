'use client';

import React, { useState, useEffect } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';
import { experiencesData } from '../lib/data';

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Experience');
    }
  }, [inView, setActiveSection]);

  // Hook to detect if screen width is below 640px (single column)
  function useIsSingleColumn() {
    const [isSingleColumn, setIsSingleColumn] = useState(false);

    useEffect(() => {
      function check() {
        setIsSingleColumn(window.innerWidth < 1280); // sm breakpoint
      }

      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    return isSingleColumn;
  }

  const isSingleColumn = useIsSingleColumn();

  return (
    <section
      id="experience"
      className="mt-16 mb-16 max-w-6xl mx-auto px-4 scroll-mt-28"
      ref={ref}
    >
      <h2 className="text-[2rem] capitalize mb-[1rem] sm:mb-[1.5rem] md:mb-[2rem] font-roboto tracking-wider text-white font-bold text-center">
        Experience
      </h2>
      <VerticalTimeline className="text-gray-400">
        {experiencesData.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: '#0f1525',
                  boxShadow: 'none',
                  border: '1px solid rgba(0,0,0,0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                date={isSingleColumn ? undefined : experience.date} // Hide date on single column
                dateClassName="font-bold"
                icon={
                  <div className="flex justify-center items-center">
                    <img
                      src={experience.icon}
                      alt={experience.title}
                      className="rounded-full"
                    />
                  </div>
                }
              >
                <div className="flex gap-5 mb-5">
                  <img
                    src={experience.icon}
                    alt={experience.company}
                    className="h-[4rem] w-[4rem] rounded-xl"
                  />
                  <div className="flex flex-col flex-wrap">
                    <h3 className="text-slate-400 font-extrabold text-[1rem]">
                      {experience.title}
                    </h3>
                    <span className="text-gray-500 text-[0.75rem]">
                      {experience.company}
                    </span>
                    <span className="text-gray-500 text-[0.75rem]">
                      {experience.location}
                    </span>
                    {!isSingleColumn && (
                      <span className="text-gray-500 text-[0.75rem]">
                        {experience.date}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-slate-400 text-[0.8rem] font-bold font-roboto text-wrap">
                  {experience.description}
                </span>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
