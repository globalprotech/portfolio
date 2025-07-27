import { useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const stats = [
  {
    value: '08+',
    label: 'Years of Expertise\nin Technology',
  },
  {
    value: '200+',
    label: 'Clients Served with\nTailored Solutions',
  },
  {
    value: '50+',
    label: 'Seasoned IT\nProfessionals',
  },
];

const cardPositions = [
  { left: '5%', top: '10%' },
  { left: '40%', top: '40%' },
  { left: '75%', top: '15%' },
];

const pathD = 'M 0 80 Q 250 0 400 160 Q 600 320 1000 120';

const StatsTimeline = () => {
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Animate progress from 0 to 1 and loop
  useAnimationFrame((t) => {
    setProgress(((t / 2000) % 1)); // 2s loop for dot
    setRotation(((t / 8000) % 360)); // 8s loop for rotation
  });

  // Get dot position along the path
  let dot = { x: 0, y: 0 };
  if (pathRef.current) {
    const length = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(progress * length);
    dot = { x: point.x, y: point.y };
  }

  return (
    <section className="relative w-full h-[340px] md:h-[320px] flex items-center justify-center bg-transparent mb-20">
      {/* SVG Curved Path */}
      <svg
        className="absolute left-0 top-0 w-full h-full z-0"
        viewBox="0 0 1000 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: '500px 160px', // Center of the SVG
        }}
      >
        {/* Main Path with Moving Gradient */}
        <motion.path
          ref={pathRef}
          d={pathD}
          stroke="url(#moving-gradient)"
          strokeWidth="12"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(56, 189, 248, 0.3))',
          }}
        />
        
        {/* Rolling Dot Animation */}
        {pathRef.current && (
          <motion.circle
            r="16"
            fill="url(#timeline-gradient)"
            cx={dot.x}
            cy={dot.y}
            style={{ 
              filter: 'drop-shadow(0 2px 12px #38bdf8aa)',
              transform: `rotate(-${rotation}deg)`, // Counter-rotate the dot to stay upright
            }}
          />
        )}
        
        <defs>
          {/* Moving Gradient for the Line */}
          <linearGradient id="moving-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#6366f1">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#38bdf8">
              <animate
                attributeName="offset"
                values="0;1;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          
          {/* Static Gradient for the Dot */}
          <linearGradient id="timeline-gradient" x1="0" y1="0" x2="1000" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stat Cards */}
      {stats.map((stat, i) => (
        <motion.div
          key={stat.value}
          className="absolute z-10 shadow-xl rounded-2xl"
          style={{
            left: cardPositions[i].left,
            top: cardPositions[i].top,
            width: '220px',
            height: '160px',
            background: 'rgba(255,255,255,0.7)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid #e0e7ef',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            {stat.value}
          </span>
          <span className="block text-center text-gray-700 whitespace-pre-line text-lg font-medium">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsTimeline; 