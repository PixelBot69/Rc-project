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
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden text-white">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Minimal overlay for text contrast only */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/30" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className={`p-12 sm:p-16 text-center max-w-4xl transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Professional title with text shadow for visibility */}
          <div className="mb-8">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)'}}>
              Powering{' '}
              <span className="relative font-normal">
                <span className="transition-all duration-700 ease-in-out">
                  {words[currentWord]}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-px bg-white/80 transform origin-left transition-all duration-500 shadow-sm" />
              </span>
            </h1>
          </div>
          
          {/* Elegant subtitle with text shadow */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-xl sm:text-2xl font-light text-white mb-12 leading-relaxed max-w-3xl mx-auto" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.8)'}}>
              Complete Electrical, Solar, Automation & CCTV Solutions Under One Roof
            </p>
          </div>
          
          {/* Sophisticated button with better contrast */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <a
              href="https://wa.me/919782730455?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <Button className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white hover:text-black font-medium text-lg px-12 py-4 transition-all duration-500 group shadow-lg" style={{textShadow: 'none'}}>
                <span className="flex items-center gap-3">
                  Book a Demo
                  <div className="w-5 h-px bg-current transform origin-left transition-all duration-300 group-hover:w-8">
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-current border-t-2 border-b-2 border-t-transparent border-b-transparent transform transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom styles for elegant animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;