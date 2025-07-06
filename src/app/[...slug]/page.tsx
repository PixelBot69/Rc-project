import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/content/service';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next'

import { 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  ArrowRightCircle,
  Users,
  Activity,
  Briefcase,
  Phone,
  Mail,
  Package,
  Wrench,
  Settings
} from 'lucide-react';

// Updated interface to match Next.js expectations
export interface ServicePageProps {
  params: { slug: string[] }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Service data interface
export interface ServiceData {
  title: string;
  description: string;
  content: string;
  image?: string;
  features?: string[];
  metaDescription?: string;
  relatedServices?: string[];
  heroBackground?: string;
  brandLogos?: {
    name: string;
    logo: string;
  }[];
}

export type ServicesData = Record<string, ServiceData>;

export default async function ServicePage({ params, searchParams }: ServicePageProps) {
  // Ensure params.slug is properly handled
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = await getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }

  // Mock additional services for the two-column layout
  const mockServices = [
    {
      id: "01",
      title: service.title,
      description: service.description,
      content: service.content,
      image: service.image || "/api/placeholder/400/300",
      features: service.features || [
        "We Supply: Premium quality materials sourced from trusted manufacturers worldwide",
        "We Install: Professional installation services with precision and attention to detail", 
        "Service & Site Management: Complete project oversight from planning to final inspection",
        "Consultation & Training: Expert guidance and training programs for optimal maintenance and care"
      ]
    },
    {
      id: "02",
      title: "Design & Build",
      description: "Our design and build service offers comprehensive solutions from conceptualization to completion. We combine creative design with practical construction expertise to deliver exceptional results.",
      content: "Transform your space with our integrated design and build approach that ensures seamless project delivery from initial concept through final installation.",
      image: service.image || "/api/placeholder/400/300",
      features: [
        "Custom Design Solutions: Tailored designs that meet your specific requirements, aesthetic preferences, and functional needs to create unique and personalized spaces.",
        "Project Management: Comprehensive end-to-end coordination, including scheduling, budgeting, procurement, and stakeholder communication, ensuring timely delivery and maintaining quality standards.",
        "Technical Expertise: Utilization of advanced construction techniques, innovative materials, and industry best practices to optimize durability, sustainability, and efficiency.",
        "Quality Assurance: Rigorous multi-stage testing, inspection, and compliance checks throughout the project lifecycle to guarantee superior craftsmanship and client satisfaction.",
        "Sustainability Focus: Integration of eco-friendly materials and energy-efficient design principles to minimize environmental impact and reduce operational costs.",
        "Collaborative Process: Close collaboration with clients, architects, and subcontractors to ensure transparency, adaptability, and alignment with project goals.",
        "Post-Completion Support: Offering maintenance guidance, warranty services, and future upgrade planning for long-term value and peace of mind.",
        "Budget Optimization: Strategic cost management techniques to maximize value without compromising quality or design integrity."
      ]
    }
  ];

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
                Our Expertise
              </span>
              <div className="h-px w-20 bg-amber-700 ml-6"></div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-light mb-6 tracking-tight">
              Our Services
            </h1>
            
            <div className="w-24 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            
            <p className="text-xl text-stone-300 leading-relaxed font-light max-w-3xl mx-auto">
              Comprehensive solutions across electrical, automation, and infrastructure sectors
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column - Service 01 */}
          <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            {/* Service Image */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={mockServices[0].image}
                alt={mockServices[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Service Content */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-serif font-medium text-white">{mockServices[0].id}</span>
                </div>
                <h2 className="text-2xl font-serif font-medium text-slate-900">{mockServices[0].title}</h2>
              </div>
              
              <div className="w-12 h-0.5 bg-amber-700 mb-6"></div>
              
              <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">
                {mockServices[0].description}
              </p>

              {/* Service Content */}
              <div className="mb-8">
                <div 
                  className="text-slate-600 leading-relaxed prose prose-sm max-w-none prose-headings:text-slate-900 font-light"
                  dangerouslySetInnerHTML={{ __html: mockServices[0].content }}
                />
              </div>

              {/* Service Features */}
              <div className="space-y-6 mb-8">
                <h4 className="text-xl font-serif font-medium text-slate-900">Key Features</h4>
                <div className="w-8 h-0.5 bg-amber-700 mb-6"></div>
                {mockServices[0].features.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0], feature.split(':')[1]] 
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="border-l-2 border-amber-700 pl-6 py-2">
                      <h5 className="font-medium text-slate-900 mb-2">{title}</h5>
                      {description && <p className="text-slate-600 font-light leading-relaxed">{description.trim()}</p>}
                    </div>
                  );
                })}
              </div>

              {/* Additional Service Details */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="text-lg font-serif font-medium text-slate-900 mb-4">Why Choose This Service?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Industry-leading expertise and experience</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Comprehensive warranty and support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-light">Competitive pricing and flexible payment options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Service 02 */}
          <div className="bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden">
            {/* Service Content */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-lg font-serif font-medium text-white">{mockServices[1].id}</span>
                </div>
                <h2 className="text-2xl font-serif font-medium text-slate-900">{mockServices[1].title}</h2>
              </div>
              
              <div className="w-12 h-0.5 bg-amber-700 mb-6"></div>
              
              <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">
                {mockServices[1].description}
              </p>

              {/* Service Content */}
              <div className="mb-8">
                <div 
                  className="text-slate-600 leading-relaxed prose prose-sm max-w-none prose-headings:text-slate-900 font-light"
                  dangerouslySetInnerHTML={{ __html: mockServices[1].content }}
                />
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-stone-100 border border-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium tracking-wide">SUPPLY</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-stone-100 border border-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium tracking-wide">INSTALLATION</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-stone-100 border border-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Settings className="w-8 h-8 text-amber-700" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium tracking-wide">SUPPORT</p>
                </div>
              </div>

              {/* Service Features for Service 02 */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-serif font-medium text-slate-900">Service Features</h4>
                <div className="w-8 h-0.5 bg-amber-700 mb-6"></div>
                {mockServices[1].features.slice(0, 4).map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0], feature.split(':')[1]] 
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-medium text-slate-900 mb-1">{title}</h5>
                        {description && <p className="text-slate-600 font-light leading-relaxed">{description.trim()}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Process Timeline */}
              <div className="mb-8">
                <h4 className="text-lg font-serif font-medium text-slate-900 mb-4">Our Process</h4>
                <div className="w-8 h-0.5 bg-amber-700 mb-6"></div>
                <div className="space-y-4">
                  {[
                    "Initial consultation and site assessment",
                    "Design development and material selection", 
                    "Project execution and quality control",
                    "Final inspection and handover"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center mr-4 text-sm font-medium text-white">
                        {index + 1}
                      </div>
                      <span className="text-slate-600 font-light">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Service Image */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={mockServices[1].image}
                alt={mockServices[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Additional Service Information */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Service Guarantee</h3>
              <div className="w-12 h-0.5 bg-amber-700 mb-6"></div>
              <p className="text-slate-600 mb-6 font-light leading-relaxed">
                We stand behind our work with comprehensive warranties and ongoing support. Our commitment to excellence ensures your complete satisfaction with every project.
              </p>
              <div className="space-y-3">
                {[
                  "5-year warranty on all installations",
                  "24/7 emergency support available",
                  "Regular maintenance programs",
                  "Quality assurance inspections"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    <span className="text-slate-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Contact Information</h3>
              <div className="w-12 h-0.5 bg-amber-700 mb-6"></div>
              <p className="text-slate-600 mb-6 font-light leading-relaxed">
                Ready to get started? Contact our team of experts to discuss your project requirements and receive a personalized quote.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600 font-light">+91 978-273-0455</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600 font-light">info@company.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-600 font-light">Free consultation available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6">
            <div className="inline-flex items-center px-10 py-4 bg-slate-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-colors duration-300 group cursor-pointer">
              <span className="text-lg mr-4">Get Started</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="inline-flex items-center px-10 py-4 border-2 border-slate-900 text-slate-900 font-medium tracking-wide hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer">
              <span className="text-lg">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static routes for all known services
export async function generateStaticParams() {
  const serviceData = await import('@/content/service');
  return serviceData.getAllServiceSlugs().map(slug => ({ slug }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const service = await getServiceBySlug(slugArray);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Your Company Name`,
    description: service.metaDescription || service.description,
  };
}