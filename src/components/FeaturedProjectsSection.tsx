import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/about.png" 
                alt="RC POWER Office Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
            {/* Classic decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-700 rounded-lg -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              {/* Elegant badge */}
              <div className="inline-flex items-center">
                <div className="h-px w-12 bg-amber-700 mr-4"></div>
                <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                  Since 1986
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-serif font-light text-slate-900 leading-tight tracking-tight">
                About Us
              </h1>
              
              <div className="w-16 h-0.5 bg-amber-700"></div>
              
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
                <p className="font-light">
                  <span className="text-amber-700 font-medium">RC Power Project Limited</span> is 'A' class Electrical Civil Contractors and is registered with various Government of India Electrical Bodies like JVVNL (Jaipur), JDVVNL (Jodhpur), AVVNL(Ajmer), NNJ, JDA, RHCL, M&HC, RSIRDCL, UIT (Kota, Bhilwara, Udaipur) UPCL (Dehradun – Uttarakhand), TUDA- Tripura.
                </p>
                
                <p className="font-light">
                  <span className="text-amber-700 font-medium">Railways involved</span> in offering services in the field of, supplying, installation, testing and commissioning of Electrical & Civil Projects. Our goal is to provide our customers with the best quality products and with our team of experienced and passionate trades people we pride ourselves on building great customer relationships.
                </p>
              </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="space-y-8">
              {/* Mission */}
              <div className="border-l-4 border-amber-700 pl-8 py-4">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-medium text-slate-900">Mission</h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                      To add value to our customers at lowest price by optimizing our costs and resources
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="border-l-4 border-amber-700 pl-8 py-4">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-medium text-slate-900">Vision</h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                      To double the combined group turnover by 2030
                    </p>
                  </div>
                </div>
              </div>
            </div>



            {/* Read More Button */}
            <div className="pt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium tracking-wide
                         hover:bg-amber-700 transition-colors duration-300 group"
              >
                <span>Read More</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;