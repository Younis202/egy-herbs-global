'use client';

import { Coffee } from "lucide-react";

export function ProcessHero() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Coffee className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Coffee Process
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From bean to cup, discover how we craft the perfect coffee through our meticulous process, 
            ensuring quality and sustainability at every step.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-amber-200 to-amber-50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}