import React from 'react';
import { skillsData } from '../lib/data';
import { motion } from 'framer-motion';

type skillsType = (typeof skillsData)[number];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SkillCard({ title, skills }: skillsType) {
  return (
    <div className="flex flex-col text-center items-center border border-slate-600 rounded-lg py-5">
      <h2 className="text-[1.5rem] text-slate-300 font-bold tracking-wider">
        {title}
      </h2>
      <ul className="mt-2 flex flex-wrap gap-1 px-10 items-center justify-center">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col text-slate-300">
            <motion.div
              className="flex items-center bg-[#161620] gap-2 px-3 py-2 rounded-lg border border-slate-600"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-[1rem] w-[1rem]"
              />
              <span className="text-[0.8rem]">{skill.name}</span>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
