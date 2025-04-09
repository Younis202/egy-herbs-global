'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
          alt="Contact us hero background"
        />
        <div className="absolute inset-0 bg-gray-900/75 mix-blend-multiply" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Have questions about our products or services? We're here to help. Reach out to our team and we'll get back to you shortly.
        </p>
      </div>
    </div>
  );
}