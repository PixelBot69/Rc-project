'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "LT & HT Work",
      href: "/lt-ht-work",
    },
    {
      title: "132 KVA GSs",
      href: "/kva-gs",
    },
    {
      title: "CCTV Work",
      href: "/cctv-work",
    },
    {
      title: "Solar Work",
      href: "/solar-work",
    },
    {
      title: "Industrial Automation",
      href: "/industrial-automation",
    },
    { 
      title: "Contact Us", 
      href: "/contact",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      {/* Main Footer with diagonal cut */}
      <div className="bg-white py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Logo and Company Info */}
            <div className="mb-8 md:mb-0 max-w-md">
              <div className="flex items-center mb-4">
                <img src="/images.jpeg" alt="PowerGrid Logo" className="h-16 w-auto" />
              </div>
              
              {/* Registered Office */}
              <div className="mb-4">
                <h3 className="text-yellow-900 font-semibold mb-2">Registered Office</h3>
                <div className="flex items-start text-yellow-900">
                  <div className="mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <p className="text-sm">
                    B-9, Qutab Institutional Area,<br />
                    Katwaria Sarai, New Delhi-110016
                  </p>
                </div>
              </div>
              
              {/* Corporate Office */}
              <div>
                <h3 className="text-yellow-900 font-semibold mb-2">Corporate Office</h3>
                <div className="flex items-start text-yellow-900">
                  <div className="mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <p className="text-sm">
                    Saudamini, Plot No.2, Sector 29, Gurgaon<br />
                    (Haryana) - 122001, INDIA
                  </p>
                </div>
              </div>
            </div>

            {/* Share Price */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-yellow-900 font-semibold mb-3">Contact us</h3>
              <div className="bg-white rounded-md p-3">
                <div className="grid gap-4">
                  <div className="flex items-center">
                    <span className="text-yellow-900 mr-1 font-medium">Phone Number:</span>
                    <span className=" px-2 py-1 rounded  text-yellow-900">8840948923</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-900 mr-1 font-medium">Email:</span>
                    <span className=" px-2 py-1 rounded  text-yellow-900">indianpiear@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-yellow-900 font-semibold mb-4">Our Services</h3>
              <ul className="grid grid-cols-1 gap-2">
                {serviceCategories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={category.href}
                      className="text-yellow-900 hover:text-yellow-700 transition-colors text-sm flex items-center"
                    >
                      <span className="mr-2">›</span>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-yellow-900 font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="bg-yellow-200 p-2 rounded-full text-yellow-900 hover:bg-yellow-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="bg-yellow-200 p-2 rounded-full text-yellow-900 hover:bg-yellow-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </Link>
              <Link href="https://youtube.com" className="bg-yellow-200 p-2 rounded-full text-yellow-900 hover:bg-yellow-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.013 1.103-.074 2.015l-.007.102-.01.103-.02.242-.01.104a6.32 6.32 0 0 1-.218 1.4 2.013 2.013 0 0 1-1.412 1.412c-1.136.31-5.258.332-6.104.335h-.089c-.822-.002-4.987-.033-6.11-.335a2.015 2.015 0 0 1-1.414-1.412 6.59 6.59 0 0 1-.222-1.4l-.007-.103-.007-.104-.02-.242-.01-.104c-.06-.91-.07-1.769-.072-1.955v-.076c.002-.193.014-1.103.072-2.013l.006-.103.008-.105.02-.241.01-.103a6.357 6.357 0 0 1 .22-1.4 2.014 2.014 0 0 1 1.412-1.42c1.124-.3 5.29-.333 6.11-.336zm-.035 3.507v4.2l3.645-2.1-3.646-2.1z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal cut effect */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 bg-yellow-500" 
          style={{ 
            clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0% 100%)' 
          }}
        ></div>
      </div>

      {/* Copyright Bar with diagonal cut at top */}
      <div className="bg-yellow-500 text-white pt-16 pb-4 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Policy Links */}
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link href="/copyright-policy" className="text-xs text-yellow-800 hover:underline hover:text-yellow-800">Copyright Policy</Link>
              <span className="text-xs">|</span>
              <Link href="/hyperlinking-policy" className="text-xs text-yellow-800 hover:underline hover:text-yellow-800">Hyperlinking Policy</Link>
              <span className="text-xs">|</span>
              <Link href="/disclaimer" className="text- text-yellow-800 hover:underline hover:text-yellow-800">Disclaimer</Link>
              <span className="text-xs">|</span>
              <Link href="/privacy-policy" className="text-xs text-yellow-800 hover:underline hover:text-yellow-800">Privacy Policy</Link>
              <span className="text-xs">|</span>
              <Link href="/terms-conditions" className="text-xs text-yellow-800 hover:underline hover:text-yellow-800">Terms & Conditions</Link>
              <span className="text-xs">|</span>
              <Link href="/rtia" className="text-xs text-yellow-800 hover:underline hover:text-yellow-800">RTI Act</Link>
            </div>

            {/* Update & Visitors */}
            <div className="text-xs text-yellow-800">
              <div>Last Updated : 21 May, 2025</div>
              <div>Visitors Count : 620012</div>
            </div>
          </div>

          {/* Copyright Text */}
          <div className="mt-4 text- text-yellow-800">
            Copyright © {currentYear} Power Grid Corporation of India Ltd. (POWERGRID), Ministry of Power. All Rights Reserved
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="absolute right-8 bottom-16 bg-yellow-200 text-yellow-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
