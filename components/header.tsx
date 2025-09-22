'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '../context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mb-20">
      {/* Desktop background bar */}
      <motion.div
        className="hidden sm:block fixed top-6 left-0 right-0 mx-auto py-7
                    h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40
                    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      {/* Navbar container */}
      <nav
        className="fixed top-0 left-0 w-full h-[4.5rem] flex items-center px-4
                   sm:top-[1.7rem] sm:left-1/2 sm:h-[3.25rem] sm:w-[36rem]
                   sm:rounded-full sm:-translate-x-1/2 sm:px-6"
      >
        {/* Burger toggle button */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden z-[999] p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop menu */}
        <ul
          className="hidden sm:flex sm:flex-row sm:gap-5 sm:items-center mx-auto
                     text-[0.9rem] font-medium text-slate-700"
        >
          {links.map((link) => (
            <li
              key={link.hash}
              className="relative flex items-center justify-center"
            >
              <Link
                href={link.hash}
                className={clsx(
                  'flex items-center justify-center px-3 py-2 hover:text-gray-950 transition',
                  { 'text-gray-950': activeSection === link.name }
                )}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="bg-gray-100 rounded-full absolute inset-0 -z-10" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile sidebar sliding menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 sm:hidden z-50"
      >
        <ul className="flex flex-col gap-4 text-[1rem] font-medium text-slate-700">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className={clsx(
                  'block px-3 py-2 hover:text-gray-950 transition',
                  { 'text-gray-950': activeSection === link.name }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
