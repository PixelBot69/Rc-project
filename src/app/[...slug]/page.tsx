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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50">
      {/* Header */}
    

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-amber-900 mb-4 tracking-wide">OUR SERVICES</h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Service 01 */}
          <div className="bg-white rounded-lg shadow-lg border border-amber-100 overflow-hidden flex flex-col">
            {/* Service Image - Fixed gap issue */}
            <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
              <Image
                src={mockServices[0].image}
                alt={mockServices[0].title}
                fill
                className="object-cover block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Service Content */}
            <div className="p-8 flex-grow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{mockServices[0].id}</span>
                </div>
                <h2 className="text-2xl font-light text-amber-900">Service {mockServices[0].id} {mockServices[0].title}</h2>
              </div>
              
              <p className="text-amber-800 mb-6 leading-relaxed">
                {mockServices[0].description}
              </p>

              {/* Service Content */}
              <div className="mb-6">
                <div 
                  className="text-amber-800 leading-relaxed prose prose-sm max-w-none prose-headings:text-amber-900"
                  dangerouslySetInnerHTML={{ __html: mockServices[0].content }}
                />
              </div>

              {/* Service Features */}
              <div className="space-y-4">
                {mockServices[0].features.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0], feature.split(':')[1]] 
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-amber-900 mb-1">{title}</h4>
                        {description && <p className="text-sm text-amber-700">{description.trim()}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Service Details */}
              <div className="mt-8 pt-6 border-t border-amber-100">
                <h4 className="font-medium text-amber-900 mb-4">Why Choose This Service?</h4>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    Industry-leading expertise and experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    Comprehensive warranty and support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                    Competitive pricing and flexible payment options
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Service 02 */}
          <div className="bg-white rounded-lg shadow-lg border border-amber-100 overflow-hidden flex flex-col">
            {/* Service Content */}
            <div className="p-8 flex-grow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded mr-3 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{mockServices[1].id}</span>
                </div>
                <h2 className="text-2xl font-light text-amber-900">Service {mockServices[1].id} {mockServices[1].title}</h2>
              </div>
              
              <p className="text-amber-800 mb-6 leading-relaxed">
                {mockServices[1].description}
              </p>

              {/* Service Content */}
              <div className="mb-8">
                <div 
                  className="text-amber-800 leading-relaxed prose prose-sm max-w-none prose-headings:text-amber-900"
                  dangerouslySetInnerHTML={{ __html: mockServices[1].content }}
                />
              </div>

              {/* Service Icons */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mx-auto mb-3 flex items-center justify-center border border-amber-200">
                    <Package className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-xs text-amber-800 font-medium">SUPPLY</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mx-auto mb-3 flex items-center justify-center border border-amber-200">
                    <Wrench className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-xs text-amber-800 font-medium">INSTALLATION</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mx-auto mb-3 flex items-center justify-center border border-amber-200">
                    <Settings className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-xs text-amber-800 font-medium">SITE SUPPORT</p>
                </div>
              </div>

              {/* Service Features for Service 02 */}
              <div className="space-y-4 mb-8">
                {mockServices[1].features.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0], feature.split(':')[1]] 
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-amber-900 mb-1">{title}</h4>
                        {description && <p className="text-sm text-amber-700">{description.trim()}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Process Timeline */}
              <div className="mb-8">
                <h4 className="font-medium text-amber-900 mb-4">Our Process</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-amber-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-white">1</div>
                    Initial consultation and site assessment
                  </div>
                  <div className="flex items-center text-sm text-amber-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-white">2</div>
                    Design development and material selection
                  </div>
                  <div className="flex items-center text-sm text-amber-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-white">3</div>
                    Project execution and quality control
                  </div>
                  <div className="flex items-center text-sm text-amber-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mr-3 text-xs font-medium text-white">4</div>
                    Final inspection and handover
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Image - Fixed gap issue */}
            <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
              <Image
                src={mockServices[1].image}
                alt={mockServices[1].title}
                fill
                className="object-cover block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Additional Service Information */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg border border-amber-100 p-8">
              <h3 className="text-xl font-light text-amber-900 mb-4">Service Guarantee</h3>
              <p className="text-amber-800 mb-4">
                We stand behind our work with comprehensive warranties and ongoing support. Our commitment to excellence ensures your complete satisfaction with every project.
              </p>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• 5-year warranty on all installations</li>
                <li>• 24/7 emergency support available</li>
                <li>• Regular maintenance programs</li>
                <li>• Quality assurance inspections</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg border border-amber-100 p-8">
              <h3 className="text-xl font-light text-amber-900 mb-4">Contact Information</h3>
              <p className="text-amber-800 mb-4">
                Ready to get started? Contact our team of experts to discuss your project requirements and receive a personalized quote.
              </p>
              <div className="space-y-3 text-sm text-amber-700">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-amber-600" />
                  +91 978-273-0455
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-amber-600" />
                  info@company.com
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-3 text-amber-600" />
                  Free consultation available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-none font-light tracking-wide mr-4 shadow-lg"
          >
            Get Started
          </Button>
          <Button 
            variant="outline"
            className="border-amber-400 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-none font-light tracking-wide shadow-lg"
          >
            Learn More
          </Button>
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