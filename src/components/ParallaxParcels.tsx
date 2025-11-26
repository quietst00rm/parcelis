import React, { useState, useEffect } from 'react';

interface ParallaxParcelsProps {
  opacity?: number;
}

const ParallaxParcels: React.FC<ParallaxParcelsProps> = ({ opacity = 1 }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solid 3D Cubes
  const Parcel = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      style={style}
    >
       {/* Top Face - Lightest */}
       <path d="M12 2L2 7L12 12L22 7L12 2Z" fillOpacity="0.9"/>
       {/* Left Face - Darkest (Shadow) */}
       <path d="M2 7V17L12 22V12L2 7Z" fillOpacity="0.4"/>
       {/* Right Face - Mid Tone */}
       <path d="M22 7V17L12 22V12L22 7Z" fillOpacity="0.6"/>
    </svg>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity }}>
      
      {/* --- MASSIVE FOREGROUND (Hero Parcels) --- */}
      
      {/* Top Left - Huge */}
      <div 
        className="absolute top-[5%] left-[-5%]"
        style={{ 
            transform: `translateY(${scrollY * 0.5}px) rotate(${10 + scrollY * 0.15}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-80 h-80 text-white/10" />
      </div>

      {/* Middle Right - Massive */}
      <div 
        className="absolute top-[40%] right-[-10%]"
        style={{ 
            transform: `translateY(${scrollY * 0.6}px) rotate(${-20 - scrollY * 0.2}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-96 h-96 text-blue-400/10" />
      </div>

      {/* REMOVED BOTTOM LEFT LARGE PARCEL HERE */}


      {/* --- MIDGROUND (Medium-Large) --- */}

      <div 
        className="absolute top-[20%] right-[15%]"
        style={{ 
            transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.25}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-48 h-48 text-white/5" />
      </div>

      <div 
        className="absolute top-[55%] left-[15%]"
        style={{ 
            transform: `translateY(${scrollY * 0.35}px) rotate(${-scrollY * 0.15}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-56 h-56 text-blue-200/10" />
      </div>

      <div 
        className="absolute bottom-[20%] right-[30%]"
        style={{ 
            transform: `translateY(${scrollY * 0.45}px) rotate(${90 + scrollY * 0.15}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-40 h-40 text-indigo-400/5" />
      </div>


      {/* --- BACKGROUND (Supporting Elements - Reduced Count) --- */}

      <div 
        className="absolute top-[10%] left-[40%]"
        style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-32 h-32 text-white/5" />
      </div>

      <div 
        className="absolute top-[30%] left-[60%]"
        style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(${-scrollY * 0.12}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-24 h-24 text-blue-300/5" />
      </div>

      <div 
        className="absolute top-[75%] left-[35%]"
        style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(${45 + scrollY * 0.18}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-28 h-28 text-indigo-200/5" />
      </div>

      <div 
        className="absolute bottom-[10%] right-[10%]"
        style={{ 
            transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * 0.2}deg)`,
            transition: 'transform 0.05s linear'
        }}
      >
        <Parcel className="w-32 h-32 text-white/5" />
      </div>

    </div>
  );
};

export default ParallaxParcels;