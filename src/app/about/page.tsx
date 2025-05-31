import React from 'react';
import Link from 'next/link';
import AboutSection from '@/components/FeaturedProjectsSection';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Team Photo */}
      <section className="relative">
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src="/group.jpeg" 
            alt="RC POWER Team" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>

          {/* Company Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                <span className="text-yellow-600 font-semibold">We Are The RC POWER</span> – A cluster of diverse companies founded in 1986. We pioneer in the verticals of Electricity, Railway Engineering, Food and Supply, Industrial Equipment, Warehousing, and Education. "Every challenge is an opportunity", says Mr. Saroj Agarwal, The Chairman of RC POWER.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="text-yellow-600 font-semibold">Thirty-four years ago,</span> a renowned multinational brand could not manage to set up a 132 kV transmission line in the state of Nagaland, due to technical issues and non-supporting conditions. The state of Nagaland was in dire need of someone to work on setting up the line to provide adequate electricity to its citizens. This is when Mr. Agarwal, a fresher then, took up this challenge with four other loyal employees and turned it into an opportunity. He befriends perseverance and hard work.
              </p>
            </div>
          </div>
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
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We Are The RC POWER – A cluster of diverse companies founded in 
                  1986. We pioneer in the verticals of Electricity, Railway Engineering, Food and 
                  Supply, Industrial Equipment, Warehousing, and Education. "Every challenge 
                  is an opportunity", says Mr. Saroj Agarwal, the Chairman of RC POWER.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Aim</h3>
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Target</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To double the combined group turnover by 2030
                  </p>
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </div>
    </section>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                To add value to our customers at lowest price by optimizing our costs and resources
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                To double the combined group turnover by 2030
              </p>
            </div>
          </div>

          {/* Business Verticals */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Business Verticals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Electricity</h4>
                <p className="text-sm text-gray-600">Power transmission and distribution solutions</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Railway Engineering</h4>
                <p className="text-sm text-gray-600">Infrastructure and engineering services</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Food & Supply</h4>
                <p className="text-sm text-gray-600">Food processing and supply chain management</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Industrial Equipment</h4>
                <p className="text-sm text-gray-600">Manufacturing and industrial solutions</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Warehousing</h4>
                <p className="text-sm text-gray-600">Storage and logistics services</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                <p className="text-sm text-gray-600">Educational institutions and training</p>
              </div>
            </div>
          </div>

          {/* Leadership Quote */}
          <div className="bg-yellow-600 text-white rounded-lg p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl font-medium mb-4">
              "Every challenge is an opportunity"
            </blockquote>
            <cite className="text-lg opacity-90">
              – Mr. Saroj Agarwal, Chairman of RC POWER
            </cite>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-white px-8 py-4 rounded-full font-medium hover:bg-yellow-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
