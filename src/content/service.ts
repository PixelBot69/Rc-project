

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
  
 
  export const services: ServicesData = {
    "lt-ht-work": {
      title: "LT & HT Work",
      description: "Complete Low Tension and High Tension electrical solutions for industrial, commercial, and residential applications with certified expertise and safety compliance.",
      content: `
        <div class="service-content">
          <h2>Professional LT & HT Electrical Services</h2>
          
          <p>Our Low Tension (LT) and High Tension (HT) electrical services provide comprehensive solutions for power distribution, installation, and maintenance across various sectors. With certified electricians and state-of-the-art equipment, we ensure safe, reliable, and efficient electrical systems.</p>
          
          <h3>Low Tension (LT) Services</h3>
          <p>Our LT services cover voltage systems up to 1000V AC, including residential, commercial, and light industrial applications. We specialize in power distribution panels, motor control centers, lighting systems, and electrical installations that meet all safety standards.</p>
          
          <h3>High Tension (HT) Services</h3>
          <p>For voltages above 1000V AC, our HT services include substation work, transformer installations, switchgear maintenance, and high-voltage cable laying. Our team is trained in handling complex electrical systems with the highest safety protocols.</p>
          
          <h3>Safety & Compliance</h3>
          <p>All our work strictly adheres to national electrical codes, safety regulations, and industry standards. We conduct thorough testing, commissioning, and provide detailed documentation for all installations and maintenance work.</p>
        </div>
      `,
      image: "/heroLT.jpg",
      features: [
        "Low Tension electrical installations and maintenance",
        "High Tension substation work and transformer installations",
        "Power distribution panel setup and configuration",
        "Motor control center design and installation",
        "Electrical safety audits and compliance testing",
        "Emergency electrical repair services",
        "Cable laying and termination work",
        "Switchgear installation and maintenance",
        "Electrical system commissioning and testing",
        "24/7 technical support and maintenance"
      ],
      metaDescription: "Professional LT & HT electrical services including power distribution, substation work, and electrical installations with certified safety compliance.",
      relatedServices: ["industrial-automation", "solar-work"],
      heroBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      brandLogos: [
        { name: "Schneider Electric", logo: "/images/brands/schneider.png" },
        { name: "ABB", logo: "/images/brands/abb.png" },
        { name: "Siemens", logo: "/images/brands/siemens.png" },
        { name: "L&T", logo: "/images/brands/lt.png" }
      ]
    },
  
    "kva-gs": {
      title: "132 KVA GSs",
      description: "High-capacity 132 KVA Generator Sets for reliable backup power solutions with advanced control systems and comprehensive maintenance services.",
      content: `
        <div class="service-content">
          <h2>132 KVA Generator Sets - Reliable Power Solutions</h2>
          
          <p>Our 132 KVA Generator Sets provide robust and reliable backup power solutions for critical applications including hospitals, data centers, manufacturing facilities, and commercial complexes. These high-capacity generators ensure uninterrupted power supply during outages.</p>
          
          <h3>Advanced Generator Technology</h3>
          <p>Our 132 KVA generators feature state-of-the-art diesel engines, advanced alternators, and intelligent control systems. They are designed for both prime and standby power applications with excellent fuel efficiency and low emissions.</p>
          
          <h3>Control & Monitoring Systems</h3>
          <p>Each generator set comes equipped with advanced digital control panels, remote monitoring capabilities, and automatic transfer switches. Real-time monitoring of engine parameters, fuel levels, and system status ensures optimal performance.</p>
          
          <h3>Installation & Commissioning</h3>
          <p>Our expert team handles complete installation including site preparation, foundation work, fuel system setup, and electrical connections. We ensure proper commissioning with load testing and system integration.</p>
          
          <h3>Maintenance & Support</h3>
          <p>Comprehensive maintenance programs including scheduled servicing, parts replacement, and emergency repairs. Our service team provides 24/7 support to ensure maximum uptime and reliability.</p>
        </div>
      `,
      image: "/132HERO.jpg",
      features: [
        "High-efficiency 132 KVA diesel generators",
        "Advanced digital control and monitoring systems",
        "Automatic transfer switch integration",
        "Remote monitoring and diagnostics",
        "Weatherproof acoustic enclosures",
        "Fuel management and monitoring systems",
        "Load bank testing and commissioning",
        "Preventive maintenance programs",
        "24/7 emergency service support",
        "Compliance with emission standards"
      ],
      metaDescription: "132 KVA Generator Sets for reliable backup power with advanced control systems, installation, and comprehensive maintenance services.",
      relatedServices: ["lt-ht-work", "industrial-automation"],
      heroBackground: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      brandLogos: [
        { name: "Cummins", logo: "/images/brands/cummins.png" },
        { name: "Caterpillar", logo: "/images/brands/caterpillar.png" },
        { name: "Volvo Penta", logo: "/images/brands/volvo.png" },
        { name: "Kirloskar", logo: "/images/brands/kirloskar.png" }
      ]
    },
  
    "cctv-work": {
      title: "CCTV Work",
      description: "Advanced CCTV surveillance systems with HD cameras, intelligent analytics, and comprehensive security solutions for complete protection and monitoring.",
      content: `
        <div class="service-content">
          <h2>Advanced CCTV Surveillance Systems</h2>
          
          <p>Our comprehensive CCTV solutions provide state-of-the-art security surveillance for residential, commercial, and industrial properties. We design and install customized systems that offer complete coverage, high-definition recording, and intelligent monitoring capabilities.</p>
          
          <h3>High-Definition Camera Systems</h3>
          <p>We offer a wide range of HD and 4K cameras including dome cameras, bullet cameras, PTZ cameras, and specialized cameras for different environments. All cameras feature night vision, weatherproof housing, and advanced image processing.</p>
          
          <h3>Intelligent Video Analytics</h3>
          <p>Our systems include advanced analytics such as motion detection, facial recognition, intrusion detection, and people counting. Smart alerts and automated responses enhance security effectiveness and reduce false alarms.</p>
          
          <h3>Network Video Recording (NVR)</h3>
          <p>High-capacity NVR systems with redundant storage, remote access capabilities, and cloud backup options. Multiple recording modes and intelligent storage management ensure long-term data retention.</p>
          
          <h3>Remote Monitoring & Mobile Access</h3>
          <p>24/7 remote monitoring capabilities with mobile app access allow real-time viewing from anywhere. Push notifications, live streaming, and playback features provide complete control over your security system.</p>
        </div>
      `,
      image: "/CCTVHERO.webp",
      features: [
        "HD and 4K security camera installation",
        "Intelligent video analytics and facial recognition",
        "Network Video Recording (NVR) systems",
        "Remote monitoring and mobile app access",
        "Motion detection and intrusion alerts",
        "Night vision and weatherproof cameras",
        "Cloud storage and backup solutions",
        "Access control system integration",
        "24/7 monitoring and support services",
        "Customized security system design"
      ],
      metaDescription: "Professional CCTV surveillance systems with HD cameras, intelligent analytics, and remote monitoring for comprehensive security solutions.",
      relatedServices: ["industrial-automation"],
      heroBackground: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      brandLogos: [
        { name: "Hikvision", logo: "/images/brands/hikvision.png" },
        { name: "Dahua", logo: "/images/brands/dahua.png" },
        { name: "Axis Communications", logo: "/images/brands/axis.png" },
        { name: "Bosch Security", logo: "/images/brands/bosch.png" }
      ]
    },
  
    "solar-work": {
      title: "Solar Work",
      description: "Complete solar energy solutions including system design, installation, and maintenance for residential, commercial, and industrial applications with maximum efficiency.",
      content: `
        <div class="service-content">
          <h2>Comprehensive Solar Energy Solutions</h2>
          
          <p>Our solar energy services provide complete end-to-end solutions for harnessing clean, renewable energy. From initial consultation and system design to installation and ongoing maintenance, we deliver high-efficiency solar systems that reduce energy costs and environmental impact.</p>
          
          <h3>Solar System Design & Engineering</h3>
          <p>Our expert team conducts detailed site assessments, energy audits, and custom system design to maximize solar energy generation. We consider factors like roof orientation, shading, local weather patterns, and energy consumption to optimize system performance.</p>
          
          <h3>High-Efficiency Solar Panels</h3>
          <p>We install premium solar panels with industry-leading efficiency ratings and long-term warranties. Our panels are designed to withstand harsh weather conditions while maintaining optimal performance for decades.</p>
          
          <h3>Grid-Tie & Off-Grid Systems</h3>
          <p>Whether you need grid-connected systems with net metering or complete off-grid solutions with battery storage, we provide customized configurations to meet your specific energy requirements and budget.</p>
          
          <h3>Installation & Commissioning</h3>
          <p>Professional installation by certified technicians ensures safety, compliance, and optimal performance. We handle all permits, inspections, and utility interconnections for a hassle-free experience.</p>
          
          <h3>Monitoring & Maintenance</h3>
          <p>Advanced monitoring systems track energy production and system health in real-time. Our maintenance services include regular inspections, cleaning, and performance optimization to ensure maximum ROI.</p>
        </div>
      `,
      image: "/SOLARHERO.webp",
      features: [
        "Custom solar system design and engineering",
        "High-efficiency solar panel installation",
        "Grid-tie and off-grid system solutions",
        "Battery storage and backup systems",
        "Energy monitoring and management systems",
        "Net metering and utility interconnection",
        "Rooftop and ground-mount installations",
        "Commercial and industrial solar projects",
        "Preventive maintenance and cleaning services",
        "Performance monitoring and optimization"
      ],
      metaDescription: "Complete solar energy solutions including system design, installation, and maintenance for maximum efficiency and cost savings.",
      relatedServices: ["lt-ht-work", "industrial-automation"],
      heroBackground: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      brandLogos: [
        { name: "Tata Solar", logo: "/images/brands/tata-solar.png" },
        { name: "Adani Solar", logo: "/images/brands/adani.png" },
        { name: "Vikram Solar", logo: "/images/brands/vikram.png" },
        { name: "Luminous", logo: "/images/brands/luminous.png" }
      ]
    },
  
    "industrial-automation": {
      title: "Industrial Automation",
      description: "Advanced industrial automation solutions including PLC programming, SCADA systems, and process control for enhanced productivity and efficiency.",
      content: `
        <div class="service-content">
          <h2>Advanced Industrial Automation Solutions</h2>
          
          <p>Our industrial automation services transform manufacturing and industrial processes through cutting-edge technology solutions. We design, implement, and maintain automated systems that enhance productivity, improve quality, reduce costs, and ensure operational safety.</p>
          
          <h3>PLC Programming & Control Systems</h3>
          <p>Expert PLC programming and control system design for various industrial applications. Our team works with leading PLC brands to create efficient, reliable automation solutions tailored to your specific process requirements.</p>
          
          <h3>SCADA & HMI Systems</h3>
          <p>Comprehensive SCADA (Supervisory Control and Data Acquisition) systems with intuitive HMI interfaces provide real-time monitoring, control, and data visualization. Remote access capabilities enable monitoring from anywhere.</p>
          
          <h3>Process Control & Instrumentation</h3>
          <p>Advanced process control solutions including temperature, pressure, flow, and level control systems. Precision instrumentation and sensor integration ensure optimal process performance and quality control.</p>
          
          <h3>Industrial Communication Networks</h3>
          <p>Implementation of industrial communication protocols including Ethernet/IP, Modbus, Profibus, and DeviceNet. Seamless integration of various automation components and systems.</p>
          
          <h3>Robotics & Motion Control</h3>
          <p>Robotic automation solutions and precision motion control systems for manufacturing, packaging, and material handling applications. Custom robotic cells designed for specific production requirements.</p>
          
          <h3>System Integration & Commissioning</h3>
          <p>Complete system integration services bringing together all automation components into a cohesive, efficient system. Thorough testing, commissioning, and operator training ensure smooth implementation.</p>
        </div>
      `,
      image: "/INDUMAIN.jpg",
      features: [
        "PLC programming and control system design",
        "SCADA and HMI system development",
        "Process control and instrumentation",
        "Industrial communication networks",
        "Robotics and motion control solutions",
        "Variable frequency drive (VFD) programming",
        "Safety system design and implementation",
        "Data acquisition and reporting systems",
        "System integration and commissioning",
        "Training and technical support services"
      ],
      metaDescription: "Advanced industrial automation solutions including PLC programming, SCADA systems, and process control for enhanced manufacturing efficiency.",
      relatedServices: ["lt-ht-work", "cctv-work"],
      heroBackground: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      brandLogos: [
        { name: "Rockwell Automation", logo: "/images/brands/rockwell.png" },
        { name: "Siemens", logo: "/images/brands/siemens.png" },
        { name: "ABB", logo: "/images/brands/abb.png" },
        { name: "Schneider Electric", logo: "/images/brands/schneider.png" }
      ]
    }
  };
export function getServiceBySlug(slug: string[]): ServiceData | null {
    const path = slug.join('/');
    return services[path] || null;
  }
  
  // Helper function to get all service slugs (useful for static generation)
  export function getAllServiceSlugs(): string[][] {
    return Object.keys(services).map(slug => slug.split('/'));
  }