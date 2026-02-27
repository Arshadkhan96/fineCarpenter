'use client';

import Link from 'next/link';

export function AboutPreview() {
  return (
    <section className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Story
            </h2>
            <p className="text-foreground/80 text-lg mb-4 leading-relaxed">
              Fine Carpenter is a boutique furniture studio dedicated to the art of handcrafted woodwork. With over 14 years of experience, we create furniture that transcends trends and stands the test of time.
            </p>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              Each piece is meticulously crafted by our master artisans using only the finest sustainably sourced materials. We believe in the power of quality craftsmanship and timeless design.
            </p>
            <Link
              href="/about"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Read Our Full Story
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-sm">
              <p className="text-4xl font-bold text-primary mb-2">14+</p>
              <p className="text-foreground/70 font-semibold">Years of Experience</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-foreground/70 font-semibold">Pieces Crafted</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground/70 font-semibold">Handmade</p>
            </div>
            <div className="text-center p-6 bg-white rounded-sm">
              <p className="text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-foreground/70 font-semibold">Sustainable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
