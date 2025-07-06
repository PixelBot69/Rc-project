import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function RcPowerContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                Get In Touch
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-light mb-6 tracking-tight">
              Contact Us
            </h1>
            
            <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            
            <p className="text-xl text-stone-300 leading-relaxed font-light max-w-3xl mx-auto">
              Ready to discuss your electrical infrastructure project? Our team of experts is here to help bring your vision to life.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Contact Information
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              How to Reach Us
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Email Card */}
            <div className="bg-stone-50 border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:border-amber-700/30 transition-all duration-300 group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Email Us</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6 group-hover:w-16 transition-all duration-300"></div>
              <a 
                href="mailto:rcpplimited733@gmail.com" 
                className="text-amber-700 hover:text-amber-600 transition-colors duration-300 text-lg font-medium"
              >
                rcpplimited733@gmail.com
              </a>
              <p className="text-slate-600 text-sm mt-3 font-light">
                For general inquiries and project discussions
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-stone-50 border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:border-amber-700/30 transition-all duration-300 group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Call Us</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6 group-hover:w-16 transition-all duration-300"></div>
              <a 
                href="tel:+919462163124" 
                className="text-amber-700 hover:text-amber-600 transition-colors duration-300 text-lg font-medium"
              >
                +91 94621 63124
              </a>
              <p className="text-slate-600 text-sm mt-3 font-light">
                Available during business hours for immediate assistance
              </p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-stone-50 border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:border-amber-700/30 transition-all duration-300 group">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 transition-colors duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Business Hours</h3>
              <div className="w-12 h-0.5 bg-amber-700 mx-auto mb-6 group-hover:w-16 transition-all duration-300"></div>
              <div className="text-slate-600 font-light leading-relaxed">
                <p className="mb-2"><span className="font-medium">Monday - Friday:</span><br />9:00 AM - 6:00 PM</p>
                <p className="mb-2"><span className="font-medium">Saturday:</span><br />10:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Sunday:</span><br />Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-700 text-sm font-medium tracking-wider uppercase">
                Our Location
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6 tracking-tight">
              Visit Our Office
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Address Information */}
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mr-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-slate-900">Registered Office</h3>
              </div>
              
              <div className="w-16 h-0.5 bg-amber-700 mb-8"></div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-slate-900 mb-3">Address</h4>
                  <p className="text-slate-600 font-light leading-relaxed">
                    P. No. B4/32, South Part,<br />
                    Chitrakoot, Vaishali Nagar,<br />
                    Jaipur-302021 (RAJ.)
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-medium text-slate-900 mb-4">Company Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="text-slate-900 font-medium">CIN:</span>
                        <span className="text-slate-600 font-light ml-2">U42909RJ2023PLC087797</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="text-slate-900 font-medium">GST No:</span>
                        <span className="text-slate-600 font-light ml-2">08AAMCR6996H1ZI</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3 mt-2"></div>
                      <div>
                        <span className="text-slate-900 font-medium">PAN No:</span>
                        <span className="text-slate-600 font-light ml-2">AAMCR6996H</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-medium text-slate-900 mb-4">Getting Here</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      <span className="text-slate-600 font-light">Located in the heart of Vaishali Nagar</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      <span className="text-slate-600 font-light">Easy access from major city routes</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                      <span className="text-slate-600 font-light">Well-connected by public transport</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5299661532814!2d75.73294917543877!3d26.89552227667147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d8b6e6e6e7%3A0x6c7b8a8a8a8a8a8a!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-700"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center mb-8">
              <div className="h-px w-20 bg-amber-700 mr-6"></div>
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
                Ready to Start?
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 tracking-tight">
              Let's Power Your Next Project
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              From electrical transmission to industrial automation - we're here to provide comprehensive solutions for your infrastructure needs.
            </p>
            
            <div className="inline-flex items-center space-x-6">
              <a
                href="tel:+919462163124"
                className="inline-flex items-center px-10 py-5 bg-slate-900 border-2 border-amber-700 text-white font-medium tracking-wide hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mr-4" />
                <span className="text-lg">Call Now</span>
              </a>
              
              <a
                href="mailto:rcpplimited733@gmail.com"
                className="inline-flex items-center px-10 py-5 bg-amber-700 border-2 border-amber-700 text-white font-medium tracking-wide hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 mr-4" />
                <span className="text-lg">Send Email</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/30 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700/60 rotate-45"></div>
            <div className="w-2 h-2 bg-amber-700 rotate-45"></div>
          </div>
        </div>
      </section>
    </div>
  );
}