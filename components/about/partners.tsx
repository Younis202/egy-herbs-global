'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const partners = [
  {
    name: "Global Organic Alliance",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "International organic certification body ensuring our products meet global organic standards."
  },
  {
    name: "Sustainable Trade Initiative",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Partnership promoting sustainable and ethical trade practices in agriculture."
  },
  {
    name: "Egyptian Agricultural Research Center",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Collaboration for research and development in sustainable farming methods."
  },
  {
    name: "Fair Trade International",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Certification partner ensuring fair compensation and working conditions."
  }
];

export function Partners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">OUR PARTNERS</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Strategic Partnerships
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations to maintain the highest standards of quality and sustainability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 text-center h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}