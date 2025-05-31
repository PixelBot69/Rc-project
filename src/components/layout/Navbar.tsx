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
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative w-12 h-8 flex items-center justify-center">
      <img src="/images.jpeg" alt="Logo" className="h-12 w-auto" />
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-bold text-yellow-600">RC Power </span>
      <span className="text-sm font-medium text-yellow-600">Project Limited</span>
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
      {/* Top bar with social links and contact info */}
      <div className="w-full bg-yellow-500 text-yellow-900 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Follow us —</span>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-yellow-700">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-yellow-700">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-yellow-700">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm text-yellow-900">(+91) 033-40636169</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="hidden sm:inline text-sm text-yellow-900">
  contactus@ausheenagroup.com
</span>

            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
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
                          "relative hover:border-b-2 border-yellow-500 transition-all duration-200 text-yellow-700"
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
            className="lg:hidden z-20 focus:outline-none text-yellow-700"
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
                    className="block font-medium text-yellow-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </div>
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2 border-b border-gray-100">
                    <Link 
                      href={item.href}
                      className="block font-medium text-yellow-700"
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
