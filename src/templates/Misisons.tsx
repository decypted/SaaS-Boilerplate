'use client';
import { motion } from 'framer-motion';
import React from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

const Missions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const scrollToCalendly = () => {
    const el = document.getElementById('calendly');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="missions-container "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="missions-background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
      </motion.div>
      <div className="missions-content">
        <motion.h1
          className="unbounded mx-auto mt-40 max-w-4xl text-6xl font-bold uppercase"
          variants={itemVariants}
        >
          Time is a debt you can't repay. Get Time back, automate with us.
        </motion.h1>
        <motion.p className="text-md mx-auto mt-5 max-w-2xl md:text-lg" variants={itemVariants}>
          Time slips again, and in business, it's your most precioius, irreplaceable asset to grow and scale. Stop the drain. Our expert automation services will help you reclaim your teams time to focus on what truly drives growth. Get time back.
        </motion.p>
        <button
          type="button"
          className={buttonVariants({ variant: 'outline', size: 'lg' })}
          onClick={scrollToCalendly}
        >
          Book a Call
        </button>
      </div>
    </motion.div>
  );
};

export default Missions;
