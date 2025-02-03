'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../context/active-section-context';
import { motion } from 'framer-motion';
import { sendEmail } from '../utils/sendEmail';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      setActiveSection('Contact');
    }
  }, [inView, setActiveSection]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    await sendEmail(formData);

    setIsLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="mt-28 mb-28 max-w-6xl mx-auto px-4 w-[min(100%,45rem)] scroll-mt-32"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h2 className="text-3xl sm:text-4xl mb-4 sm:mb-6 md:mb-8 tracking-wider text-white font-bold text-center">
        Contact
      </h2>
      <p className="text-gray-300 text-center tracking-wider">
        Feel free to reach out to me for any questions or opportunities! <br />
        Please contact me directly at{' '}
        <a
          href="mailto:sasankmukkamala2303@gmail.com"
          className="text-blue-500 underline"
          target="_blank"
        >
          sasankmukkamala2303@gmail.com
        </a>{' '}
        or through this form.
        <br /> I will get back to you as soon as possible.
      </p>
      <div className="mt-10 p-10 flex flex-col justify-center items-start bg-slate-950 border border-gray-400 rounded-xl">
        <h3 className='className="text-2xl sm:text-3xl mb-4 sm:mb-6 md:mb-8 tracking-wider text-white font-bold text-center"'>
          Email Me
        </h3>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            name="senderEmail"
            placeholder="Your Email"
            className="p-3 bg-transparent border text-gray-400 border-gray-400 rounded-xl w-full mb-3"
            required
            maxLength={500}
          />
          <br />
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            className="p-3 bg-transparent border text-gray-400 border-gray-400 rounded-xl w-full mb-3"
            required
            maxLength={500}
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 bg-transparent border text-gray-400 border-gray-400 rounded-xl w-full mb-3"
            required
            maxLength={500}
          />
          <br />
          <textarea
            name="message"
            placeholder="Your Message"
            className="p-3 bg-transparent border text-gray-400 border-gray-400 rounded-xl w-full mb-3 min-h-32"
            maxLength={500}
          />
          <br />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#dc00ff] to-[#8f00ff] text-white text-center font-bold px-6 py-2 sm:px-7 sm:py-3 rounded-full text-[1.5rem] sm:text-[1rem] outline-none focus:scale-110 hover:scale-110 transition-all flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
