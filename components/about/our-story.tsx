'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1591472053294-8b455c80adae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Egyptian herbs being harvested"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-50 rounded-full -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-300"></div>
              <span className="text-emerald-600 font-medium">OUR STORY</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              A Legacy of Egyptian Herbal Excellence
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 2010, Egy Herbs Global emerged from a deep appreciation for Egypt's rich botanical heritage. Our journey began in the fertile lands along the Nile Delta, where generations of farmers have cultivated the world's finest herbs and spices.
              </p>
              
              <p>
                What started as a small family operation has grown into a global enterprise, but our core values remain unchanged. We continue to work directly with local farmers, ensuring sustainable practices and fair compensation while delivering premium quality herbs to customers worldwide.
              </p>
              
              <p>
                Today, we're proud to be a leading exporter of Egyptian herbs, combining traditional farming wisdom with modern agricultural science to produce the highest quality products for our global partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}