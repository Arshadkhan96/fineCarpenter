'use client';

import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-workshop.jpg"
        alt="Fine Carpenter Workshop"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading, serif)' }}
        >
          Crafting Quality Woodwork
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Premium handmade furniture & custom carpentry
        </p>
        <Link
          href="/products"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
}
