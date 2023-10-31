'use client';
import React from 'react';

const AnimationControls = () => {
  return (
    <div className="h-screen flex flex-col-reverse items-center justify-center gap-8">
      <div className="w-32 h-32 bg-slate-800"></div>
      <button className="example-button py-2 px-8 bg-pink-600">Flip It</button>
    </div>
  );
};

export default AnimationControls;
