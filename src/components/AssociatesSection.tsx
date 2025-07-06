'use client'

import React from 'react';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

export default function ClientsSection() {
  const clients: Client[] = [
    { id: 1, name: "TATA", logo: "/tata.png" },
    { id: 2, name: "delhi metro rail corporation", logo: "/delhi.svg" },
    { id: 3, name: "PWD Govt of Maharashtra", logo: "/pwd.png" },
    { id: 4, name: "irctc", logo: "/irctc.png" },
  ];

  return (
    <section className="w-full py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Elegant badge */}
          <div className="inline-flex items-center mb-8">
            <div className="h-px w-20 bg-amber-700 mr-6"></div>
            <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
              Trusted Partners
            </span>
            <div className="h-px w-20 bg-amber-700 ml-6"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-6 tracking-tight">
            Our Clients
          </h2>
          
          <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            We are privileged to work with industry leaders and government organizations 
            who trust us with their most critical infrastructure projects.
          </p>
        </div>
        
        {/* Clients Grid */}
        <div className="relative">
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-amber-700/20 rounded-lg -m-8"></div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 p-8">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="group flex flex-col items-center justify-center"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Logo Container */}
                <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-lg shadow-md border border-slate-200 group-hover:shadow-lg group-hover:border-amber-700/30 transition-all duration-300 p-4 mb-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 rounded-lg"></div>
                </div>
                
                {/* Client Name */}
                <h3 className="text-center text-sm font-medium text-slate-700 uppercase tracking-wide leading-tight max-w-32">
                  {client.name}
                </h3>
                
                {/* Decorative element */}
                <div className="mt-3 w-8 h-px bg-amber-700/30 group-hover:bg-amber-700 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Content */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-colors duration-300 group cursor-pointer">
            <span>Become a Partner</span>
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}