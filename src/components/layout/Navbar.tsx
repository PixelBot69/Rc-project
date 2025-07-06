'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, MapPin } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-4">
    <div className="relative">
      <div className="w-14 h-14 rounded-lg flex items-center justify-center ">
        <img src="/images.jpeg" alt="Logo" className="h-10 w-auto " />
      </div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-700 rounded-sm"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">RC POWER</span>
      <div className="flex items-center space-x-2">
        <div className="w-6 h-px bg-amber-700"></div>
        <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Project Limited</span>
      </div>
    </div>
  </div>
);

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = cn(
    "w-full fixed top-0 left-0 z-50 transition-all duration-300",
    isScrolled ? "bg-white shadow-md" : "bg-white"
  );

  const menuItems = [
    { 
      title: "About Us", 
      href: "/about",
    },
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

  return (
    <header className={navbarClasses}>
      {/* Top bar with elegant golden design */}
        <div className="w-full bg-slate-800 text-white border-b-2 border-amber-700">
  <div className="container mx-auto px-4 py-2 sm:py-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3 sm:space-x-6">
        <span className="text-xs sm:text-sm font-medium text-stone-300 tracking-wide">Follow us</span>
        <div className="h-3 sm:h-4 w-px bg-amber-700"></div>
        <div className="flex space-x-2 sm:space-x-4">
          <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300 p-1">
            <Facebook size={14} className="sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300 p-1">
            <Twitter size={14} className="sm:w-4 sm:h-4" />
          </a>
          <a href="#" className="text-stone-300 hover:text-amber-400 transition-colors duration-300 p-1">
            <Linkedin size={14} className="sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-8">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-700 rounded-full flex items-center justify-center">
            <Phone size={12} className="text-white sm:w-3.5 sm:h-3.5" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-white tracking-wide hidden xs:inline">
            (+91) 033-40636169
          </span>
          <span className="text-xs font-medium text-white tracking-wide xs:hidden">
            Call Us
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center">
            <Mail size={14} className="text-white" />
          </div>
          <span className="text-sm font-medium text-white tracking-wide">
            contactus@ausheenagroup.com
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Main navigation with refined design */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                <NavigationMenuItem>
                </NavigationMenuItem>
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative hover:border-b-2 border-amber-500 transition-all duration-200 text-amber-700 font-semibold"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-20 focus:outline-none text-amber-700"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className={`fixed inset-0 z-10 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
              <nav className="space-y-4">
                <div className="py-2 border-b border-gray-100">
                  <Link 
                    href="/"
                    className="block font-medium text-amber-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </div>
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2 border-b border-gray-100">
                    <Link 
                      href={item.href}
                      className="block font-medium text-amber-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;