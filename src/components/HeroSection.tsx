'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSlider: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Excellence', 'Innovation', 'Progress', 'Success'];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Elegant overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-amber-700 z-30"></div>

      {/* Content Container */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-5xl">
          
          {/* Elegant badge */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } mb-8`}>
            <div className="inline-flex items-center">
              <div className="h-px w-16 bg-amber-700 mr-6"></div>
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                Since 1986
              </span>
              <div className="h-px w-16 bg-amber-700 ml-6"></div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className={`transform transition-all duration-1200 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          } mb-8`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-white leading-tight tracking-tight">
              Powering{' '}
              <span className="relative inline-block">
                <span className="text-amber-400 transition-all duration-700 ease-in-out">
                  {words[currentWord]}
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-amber-700 transform origin-left" />
              </span>
            </h1>
          </div>
          
          {/* Decorative divider */}
          <div className={`transform transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } mb-8`}>
            <div className="w-24 h-0.5 bg-amber-700 mx-auto"></div>
          </div>
          
          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-900 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } mb-12`}>
            <p className="text-2xl sm:text-3xl font-light text-stone-200 leading-relaxed max-w-4xl mx-auto">
              Complete Electrical, Solar, Automation & CCTV Solutions Under One Roof
            </p>
          </div>
          
          {/* Call to action */}
          <div className={`transform transition-all duration-1000 delay-1200 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <a
              href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <div className="inline-flex items-center px-12 py-5 bg-slate-900/80 border-2 border-amber-700 text-white font-medium text-lg tracking-wide hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 group backdrop-blur-sm">
                <span className="mr-4">Book a Demo</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
          
          {/* Bottom decorative elements */}
          <div className={`transform transition-all duration-1000 delay-1500 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          } mt-16`}>
            <div className="flex justify-center space-x-4">
              <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
              <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className={`transform transition-all duration-1000 delay-1800 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex flex-col items-center text-amber-400">
            <span className="text-sm font-medium tracking-wider uppercase mb-2">Scroll</span>
            <div className="w-px h-12 bg-amber-700/50">
              <div className="w-px h-4 bg-amber-700 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;