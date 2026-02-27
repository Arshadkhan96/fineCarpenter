'use client';

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Classic Dining Chair',
    category: 'Chair',
    image: '/product-chair.jpg',
    description: 'Handcrafted wooden dining chair with premium finish',
  },
  {
    id: 2,
    name: 'Elegant Dining Table',
    category: 'Table',
    image: '/product-table.jpg',
    description: 'Solid wood dining table, perfect centerpiece for any dining room',
  },
  {
    id: 3,
    name: 'Custom Cabinet',
    category: 'Custom Work',
    image: '/product-cabinet.jpg',
    description: 'Bespoke wooden cabinet tailored to your specifications',
  },
];

export function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          style={{ fontFamily: 'var(--font-heading, serif)' }}
        >
          Featured Collection
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our selection of premium handmade furniture pieces, each crafted with meticulous attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group cursor-pointer"
          >
            <div className="relative h-80 rounded-sm overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold tracking-wide mb-2">
                {product.category}
              </p>
              <h3
                className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                style={{ fontFamily: 'var(--font-heading, serif)' }}
              >
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-2">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
