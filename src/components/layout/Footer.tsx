'use client';

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

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
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Section */}
      <div className="relative">
        {/* Top decorative line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
        
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info & Logo */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <img src="/images.jpeg" alt="RC Power Logo" className="h-20 w-auto mb-6" />
                <p className="text-stone-300 leading-relaxed font-light text-base">
                  'A' Class Electrical & Civil Government Approved Contractors, registered with various Government of India Electrical Bodies since 1986.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-xl font-serif font-medium text-white mb-6">Follow Us</h3>
                <div className="w-12 h-0.5 bg-amber-700 mb-6"></div>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/share/16gJCZWiY9/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-stone-300 hover:bg-amber-700 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.rcpplimited.com" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-stone-300 hover:bg-amber-700 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.568 12.414c-.185.664-.42 1.293-.69 1.887-.225.494-.476.973-.75 1.434-.352.589-.727 1.15-1.126 1.68-.239.318-.485.625-.74.918-.52.599-1.06 1.16-1.622 1.677C12.865 19.79 12.44 20 12 20s-.865-.21-1.64-.99c-.562-.517-1.102-1.078-1.622-1.677-.255-.293-.501-.6-.74-.918-.399-.53-.774-1.091-1.126-1.68-.274-.461-.525-.94-.75-1.434-.27-.594-.505-1.223-.69-1.887C5.254 11.662 5.125 10.844 5.125 10c0-3.796 3.079-6.875 6.875-6.875S18.875 6.204 18.875 10c0 .844-.129 1.662-.307 2.414z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/rameshchoudhary_jpr?igsh=MXJjeW5kdjFvc3lpaQ==" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-stone-300 hover:bg-amber-700 hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-serif font-medium text-white mb-6">Contact Information</h3>
              <div className="w-12 h-0.5 bg-amber-700 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 font-medium">Phone</p>
                    <p className="text-white">+91 94621 63124</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 font-medium">Email</p>
                    <p className="text-white">rcpplimited733@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 font-medium">Website</p>
                    <p className="text-white">www.rcpplimited.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-serif font-medium text-white mb-6">Our Office</h3>
              <div className="w-12 h-0.5 bg-amber-700 mb-8"></div>
              
              <div className="space-y-6">
                {/* Registered Office */}
                <div>
                  <div className="flex items-start space-x-4 mb-3">
                    <MapPin className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                    <h4 className="text-white font-medium">Registered Office</h4>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed ml-9">
                    P.No. B4/32, South Part,<br />
                    Chitrakoot, Vaishali Nagar,<br />
                    Jaipur-302021 (RAJ.)
                  </p>
                </div>

                {/* Company Registration Details */}
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-white font-medium mb-3">Company Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="text-stone-400 w-12">CIN:</span>
                      <span className="text-stone-300">U42909RJ2023PLC087797</span>
                    </div>
                    <div className="flex">
                      <span className="text-stone-400 w-12">GST:</span>
                      <span className="text-stone-300">08AAMCR6996H1ZI</span>
                    </div>
                    <div className="flex">
                      <span className="text-stone-400 w-12">PAN:</span>
                      <span className="text-stone-300">AAMCR6996H</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-serif font-medium text-white mb-6">Our Services</h3>
              <div className="w-12 h-0.5 bg-amber-700 mb-8"></div>
              
              <ul className="space-y-3">
                {serviceCategories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={category.href}
                      className="text-stone-300 hover:text-amber-700 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-3 text-amber-700 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            
            {/* Policy Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/copyright-policy" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">Copyright Policy</Link>
              <Link href="/hyperlinking-policy" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">Hyperlinking Policy</Link>
              <Link href="/disclaimer" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">Disclaimer</Link>
              <Link href="/privacy-policy" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">Terms & Conditions</Link>
              <Link href="/rtia" className="text-sm text-stone-400 hover:text-amber-700 transition-colors duration-300">RTI Act</Link>
            </div>

            {/* Update & Visitors Info */}
            <div className="text-sm text-stone-400 space-y-1">
              <div>Last Updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
              <div>Visitors Count: 620,012</div>
            </div>
          </div>

          <Separator className="my-6 bg-slate-700" />

          {/* Copyright Text */}
          <div className="text-center text-sm text-stone-400">
            <p>Copyright © {currentYear} RC POWER Project Limited. All Rights Reserved.</p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 w-14 h-14 bg-amber-700 text-white rounded-full shadow-xl hover:bg-amber-600 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;