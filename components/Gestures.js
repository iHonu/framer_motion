'use client';

import React from 'react';
import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-12">
      <MotionConfig transition={{ duration: 0.125, ease: 'easeInOut' }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: '2.5deg' }}
          className="example-button py-2 px-4 bg-violet-700"
        >
          Click me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: '2.5deg' }}
          className=" example-button py-2 px-4 bg-pink-500"
        >
          Click me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
