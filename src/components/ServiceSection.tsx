'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Shield, Sun, Cpu, Building, Gauge } from "lucide-react";

interface Service {
  id: number;
  image: string;
  title: string;
  companyName: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    image: "/lt.jpg",
    title: "LT WORK",
    companyName: "Rausheena Technical Services",
    description: "We provide comprehensive low tension electrical services including design, installation, maintenance and repair for residential and commercial properties.",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    color: "bg-yellow-400"
  },
  {
    id: 2,
    image: "/133kva.jpg",
    title: "132 KVA GSS",
    companyName: "Rausheena Power Systems",
    description: "Our expertise in 132 KVA Grid Substations allows us to handle large-scale power infrastructure projects with complete solutions.",
    icon: <Gauge className="w-6 h-6 text-yellow-700" />,
    color: "bg-yellow-500"
  },
  {
    id: 3,
    image: "/cctv.jpg",
    title: "CCTV WORK",
    companyName: "Rausheena Security Solutions",
    description: "We provide state-of-the-art CCTV surveillance systems with advanced monitoring capabilities and expert installation services.",
    icon: <Shield className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-300"
  },
  {
    id: 4,
    image: "/solar.webp",
    title: "SOLAR WORK",
    companyName: "Rausheena Renewable Energy",
    description: "Our solar power solutions include system design, installation, and maintenance for residential, commercial, and industrial applications.",
    icon: <Sun className="w-6 h-6 text-yellow-600" />,
    color: "bg-yellow-400"
  },
  {
    id: 5,
    image: "/automatioj.avif",
    title: "INDUSTRIAL AUTOMATION",
    companyName: "Rausheena Automation Systems",
    description: "We specialize in industrial automation solutions including SCADA systems, PLC programming, HMI development, and process control integration.",
    icon: <Cpu className="w-6 h-6 text-yellow-700" />,
    color: "bg-yellow-500"
  },
  {
    id: 6,
    image: "/HT.png",
    title: "HT WORK",
    companyName: "Rausheena Power Infrastructure",
    description: "Our High Tension electrical services cover transmission lines, substations, and power distribution networks for industrial and utility-scale projects.",
    icon: <Building className="w-6 h-6 text-yellow-600" />,
    color: "bg-yellow-400"
  },
];

const BusinessServicesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Get 3 visible cards centered around current index
  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      cards.push({ ...services[index], position: i });
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-yellow-50" />
            </div>
            <Badge variant="secondary" className="text-sm font-medium text-yellow-700 bg-yellow-200">
              Our Services
            </Badge>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-800 via-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-4">
            Business Verticals
          </h1>
          
          <p className="text-lg text-yellow-700 max-w-2xl mx-auto leading-relaxed">
            Rausheena Group specializes in six core business verticals, delivering comprehensive solutions 
            across electrical, automation, and security sectors.
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-yellow-100/90 backdrop-blur-sm border-2 border-yellow-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-yellow-700" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-yellow-100/90 backdrop-blur-sm border-2 border-yellow-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-yellow-700" />
            </Button>
          </div>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {getVisibleCards().map((service, index) => (
                  <motion.div
                    key={`${service.id}-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: service.position === 0 ? 1 : 0.7,
                      y: 0,
                      scale: service.position === 0 ? 1 : 0.95,
                    }}
                    transition={{ delay: index * 0.1 }}
                    className={`${service.position === 0 ? 'md:order-2' : service.position === -1 ? 'md:order-1' : 'md:order-3'} ${service.position !== 0 ? 'hidden md:block' : ''}`}
                  >
                    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-yellow-50/80 backdrop-blur-sm">
                      <div className="relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover rounded-t-lg transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute top-4 left-4 p-2 rounded-md ${service.color} bg-opacity-70 shadow-md`}>
                          {service.icon}
                        </div>
                      </div>

                      <CardHeader className="px-6 pt-6">
                        <CardTitle className="text-yellow-900 text-2xl font-semibold tracking-wide">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-yellow-800 font-semibold text-sm mt-1">
                          {service.companyName}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 text-yellow-700 leading-relaxed text-sm">
                        {service.description}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? "bg-yellow-600 shadow-lg shadow-yellow-300" : "bg-yellow-300 hover:bg-yellow-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessServicesSlider;
