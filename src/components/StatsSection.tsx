'use client'
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const endValue = parseInt(end.replace(/\D/g, ''));
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let lastCount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing with less computation
      const easedProgress = 1 - Math.pow(1 - progress, 2.5);
      const currentCount = Math.floor(easedProgress * endValue);
      
      // Only update state when the count changes
      if (currentCount !== lastCount) {
        lastCount = currentCount;
        setCount(currentCount);
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, endValue]);
  
  const formatted = end.includes('+') ? `${count}+` : count;
  return <>{formatted}</>;
};

// SVG Icons for construction theme
const ConstructionIcons = {
  newProjects: () => (
    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20M12 16V4M8 12L4 8M16 12l4-4M4 20v-4M20 20v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ongoing: () => (
    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 10c0 3.866-3.134 7-7 7s-7-3.134-7-7h2c0 2.761 2.239 5 5 5s5-2.239 5-5h2zM5 10V8a7 7 0 0114 0v2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10H2M22 10h-6M12 6V2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  completed: () => (
    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4M12 3c-1.023 0-2.047.145-3.03.428M3 12c0-2.05.585-4.03 1.694-5.723M3.34 17c1.264 2.841 3.961 4.827 7.098 5.23M21 12c0 4.971-4.029 9-9 9m7.98-11.428A8.977 8.977 0 0021 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.337 5.073A6.97 6.97 0 0112 4.5a7 7 0 017 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  fleetSize: () => (
    <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 17h2v-5l-2-4H5L3 12v5h2M6 17h12M7 13h10M5 17a2 2 0 104 0M15 17a2 2 0 104 0M19 7h-5V5a2 2 0 012-2h1a2 2 0 012 2v2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const stats = [
    { 
      number: "08+", 
      label: "NEW PROJECTS", 
      icon: <ConstructionIcons.newProjects /> 
    },
    { 
      number: "25+", 
      label: "ONGOING", 
      icon: <ConstructionIcons.ongoing /> 
    },
    { 
      number: "45+", 
      label: "COMPLETED", 
      icon: <ConstructionIcons.completed /> 
    },
    { 
      number: "3000+", 
      label: "FLEET SIZE", 
      icon: <ConstructionIcons.fleetSize /> 
    }
  ];
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, 
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-24 bg-blue-900 text-white relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(7, 29, 65, 0.85), rgba(12, 45, 72, 0.9)), url("/indu.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Yellow accent bar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Key Highlights
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transition duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-yellow-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-3 text-yellow-400">
                  {isVisible ? (
                    <AnimatedCounter end={stat.number} duration={2000} />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-white text-sm font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;