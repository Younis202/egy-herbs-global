"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductHero() {
  return (
    <section className="relative bg-gray-900 text-white py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&q=80"
          alt="Coffee plantation"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Our Premium Coffee Collection
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our carefully curated selection of specialty coffee beans,
            sourced from the world's finest growing regions and roasted to
            perfection.
          </p>
          <Button
            variant="default"
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}