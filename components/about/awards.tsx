'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    year: "2024",
    title: "Best Sustainable Agriculture Practice",
    organization: "Global Sustainability Awards",
    description: "Recognized for our innovative approach to sustainable farming and environmental conservation."
  },
  {
    icon: Award,
    year: "2023",
    title: "Excellence in Export Quality",
    organization: "Egyptian Chamber of Commerce",
    description: "Awarded for maintaining exceptional quality standards in herb exports."
  },
  {
    icon: Medal,
    year: "2023",
    title: "Fair Trade Champion",
    organization: "International Fair Trade Association",
    description: "Honored for outstanding commitment to fair trade practices and community development."
  },
  {
    icon: Star,
    year: "2022",
    title: "Innovation in Agriculture",
    organization: "Agricultural Innovation Forum",
    description: "Recognized for implementing innovative farming techniques while preserving traditional methods."
  }
];

export function Awards() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
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
            <span className="text-emerald-600 font-medium">RECOGNITION</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition of our commitment to quality, sustainability, and ethical business practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <award.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-sm font-medium text-emerald-600 mb-2">{award.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className="text-sm text-emerald-600 mb-3">{award.organization}</div>
                <p className="text-sm text-gray-600">{award.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}