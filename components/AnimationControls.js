'use client';
import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const AnimationControls = () => {
  const controls = useAnimationControls();
  const handelClick = () => {
    controls.start('flip');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <button
        onClick={handelClick}
        className="example-button py-2 px-8 bg-pink-600"
      >
        Flip It
      </button>
      <motion.div
        variants={{ initial: { rotate: '0deg' }, flip: { rotate: '360deg' } }}
        initial="initial"
        animate={controls}
        className="w-32 h-32 bg-slate-800"
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
