'use client';

import { motion } from "framer-motion";
import { Sprout, Sun, Factory, Truck, Store, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Sprout,
    title: "Cultivation",
    description: "Carefully selected farms using sustainable practices",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Sun,
    title: "Harvesting",
    description: "Harvested at peak maturity for optimal quality",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Factory,
    title: "Processing",
    description: "State-of-the-art facilities maintaining product integrity",
    image: "https://images.unsplash.com/photo-1581093458791-9d09a5c0d6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Truck,
    title: "Distribution",
    description: "Temperature-controlled logistics network",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Store,
    title: "Retail",
    description: "Fresh products delivered to your doorstep",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export function SupplyChain() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">FARM TO TABLE</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Supply Chain
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every step in our process is carefully monitored to ensure the highest quality
            and sustainability standards from seed to your doorstep.
          </p>
        </motion.div>

        {/* Desktop view */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-100 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center">
                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 z-10">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                      <step.icon className="w-10 h-10 text-emerald-600" />
                    </div>
                    
                    {/* Image */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile view */}
        <div className="md:hidden space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}