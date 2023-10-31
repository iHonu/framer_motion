'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { ones: true });

  useEffect(() => {
    if (isInView) {
      document.body.style.background = 'red';
    } else {
      document.body.style.background = 'white';
    }
  }, [isInView]);

  return (
    <>
      <div className=" h-[150vh]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen bg-blue-400"
      />
      <div
        ref={ref}
        className="h-screen bg-green-700"
        style={{ transition: '1s background' }}
      />
    </>
  );
};

export default ViewBasedAnimation;
