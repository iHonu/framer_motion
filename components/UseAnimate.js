'use client';
import { useAnimate } from 'framer-motion';

const UseAnimate = () => {
  return (
    <div className="grid h-screen place-content-center">
      <Basic />
    </div>
  );
};

const Basic = () => {
  const [scope, animate] = useAnimate();

  const handleAnimate = async () => {
    await animate('#target', { x: 150 });
    await animate('#target', { y: 150, rotate: 180 }, { duration: 1 });
    await animate('button', { rotate: 150 });
    await animate('#target', { borderRadius: '50%' }, { duration: 1 });
    await animate(
      '#target',
      { x: 0, y: 0, rotate: 0, borderRadius: 0 },
      { duration: 1 },
    );
    await animate('button', { rotate: 0 });
  };

  return (
    <div ref={scope}>
      <div id="target" className="h-24 w-24 bg-violet-500"></div>
      <button
        onClick={() => handleAnimate()}
        className="mt-4 rounded-md bg-slate-900 px-4 py-2 text-cyan-50 font-semibold"
      >
        Trigger Animation
      </button>
    </div>
  );
};

export default UseAnimate;
