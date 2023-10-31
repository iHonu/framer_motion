'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BasicOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="h-screen flex items-center justify-center gap-12">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button w-32"
        layout
      >
        Toggle
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0] }}
            transition={{
              duration: 2,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.8, 1],
            }}
            exit={{ rotate: 360, scale: 0, y: 0 }}
            className=" w-32 h-32 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicOfMotion;
