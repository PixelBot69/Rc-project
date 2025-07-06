'use client'
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
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
      
      // Smooth easing
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * endValue);
      
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

// Refined SVG Icons with classic styling
const ClassicIcons = {
  newProjects: () => (
    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 21h18M12 3v18M8 7l-4-4M16 7l4-4M3 17v4M21 17v4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  ongoing: () => (
    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  completed: () => (
    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  fleetSize: () => (
    <svg className="w-16 h-16 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="3" y="11" width="18" height="8" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="15" r="1" fill="currentColor" />
      <circle cx="16" cy="15" r="1" fill="currentColor" />
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
      icon: <ClassicIcons.newProjects /> 
    },
    { 
      number: "25+", 
      label: "ONGOING", 
      icon: <ClassicIcons.ongoing /> 
    },
    { 
      number: "45+", 
      label: "COMPLETED", 
      icon: <ClassicIcons.completed /> 
    },
    { 
      number: "3000+", 
      label: "FLEET SIZE", 
      icon: <ClassicIcons.fleetSize /> 
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
      { threshold: 0.2 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef} 
      className="py-32 bg-slate-900 text-white relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.9)), url("/indu.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Classic decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-700"></div>
      
      {/* Elegant pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-20 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Our Achievements
            </span>
            <div className="h-px w-20 bg-amber-700 ml-6"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-serif font-light text-white mb-6 tracking-tight">
            Key Highlights
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mx-auto"></div>
        </div>
        
        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="text-amber-700 group-hover:text-amber-600 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  {/* Classic border decoration */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-amber-700 group-hover:w-20 transition-all duration-300"></div>
                </div>
                
                {/* Number */}
                <div className="text-6xl lg:text-7xl font-serif font-light mb-4 text-white group-hover:text-amber-100 transition-colors duration-300">
                  {isVisible ? (
                    <AnimatedCounter end={stat.number} duration={2500} />
                  ) : (
                    "0"
                  )}
                </div>
                
                {/* Label */}
                <div className="text-stone-300 text-base font-medium tracking-wider uppercase">
                  {stat.label}
                </div>
                
                {/* Subtle decorative element */}
                <div className="mt-6 mx-auto w-8 h-8 border border-amber-700/30 rotate-45 group-hover:border-amber-700/50 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center px-10 py-5 bg-slate-900 border-2 border-amber-700 text-white font-medium tracking-wide hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 group cursor-pointer">
            <span className="text-lg">Contact Us</span>
            <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/50 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/25 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;