import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg border-4 border-amber-200">
              <img 
                src="/about.png" 
                alt="RC POWER Office Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We Are The RC POWER – A cluster of diverse companies founded in 
                  1986. We pioneer in the verticals of Electricity, Railway Engineering, Food and 
                  Supply, Industrial Equipment, Warehousing, and Education. "Every challenge 
                  is an opportunity", says Mr. , the Chairman of RC POWER.
                </p>
                
                <p>
                  Thirty-four years ago, a renowned multinational brand could not manage to set 
                  up a 132 kV transmission line in the state of Nagaland, due to technical issues 
                  and non-supporting conditions.
                </p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To add value to our customers at lowest price by optimizing our costs and 
                    resources
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To double the combined group turnover by 2030
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <div className="pt-4">
            <Link
  href="/about"
  className="inline-block bg-amber-400 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-500 transition duration-300 shadow-lg hover:shadow-xl
             mx-auto sm:mx-0 block sm:inline-block text-center sm:text-left"
>
  Read More
</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
