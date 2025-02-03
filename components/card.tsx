'use client';

import { projectsData } from '../lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];

export default function Card({
  title,
  description,
  tags,
  imageUrl,
  date,
  source,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <section className="group bg-[#161620] p-[1.25rem] h-[33rem] max-w-[20rem] mx-auto rounded-[0.625rem] cursor-pointer transition-all duration-500 ease-in-out hover:transform hover:-translate-y-[0.625rem] hover:shadow-[0_0_3.125rem_0.25rem_rgba(0,0,0,0.6)] hover:brightness-110">
        <Image
          src={imageUrl}
          alt="project"
          quality={95}
          className="w-full h-[11.25rem] rounded-[0.625rem] shadow-[0_0_1rem_0.125rem_rgba(0,0,0,0.3)]"
        />
        <ul className="flex flex-wrap gap-[0.5rem] mt-[1.25rem]">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-[#654e9d] bg-opacity-20 text-[#654e9d] text-[0.70rem] font-medium rounded-full px-[0.5rem] py-[0.25rem]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-[1rem]">
          <h3 className="text-slate-300 text-[1.25rem] font-semibold line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-500 text-[0.75rem] mt-[0.25rem]">{date}</p>
          <p className="text-slate-500 text-[0.8rem] mt-[0.5rem] line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex gap-2 px-[0.5rem]">
          {' '}
          {/* Add padding to the sides */}
          <button
            className="hidden group-hover:block w-[calc(50%-0.25rem)] mt-[1rem] py-[0.5rem] bg-[#1b1e27] text-[#a5acab] text-[0.875rem] font-bold rounded-[0.625rem] transition-all duration-800 ease-in-out"
            onClick={() => window.open(source)}
          >
            Github
          </button>
          <button className="hidden group-hover:block w-[calc(50%-0.25rem)] mt-[1rem] py-[0.5rem] bg-[#942dc4] text-white text-[0.875rem] font-bold rounded-[0.625rem] transition-all duration-800 ease-in-out">
            Live Demo
          </button>
        </div>
      </section>
    </motion.div>
  );
}
