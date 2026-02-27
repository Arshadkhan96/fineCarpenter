'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';

const defaultProducts = {
  1: {
    name: 'Classic Dining Chair',
    category: 'Chair',
    image: '/product-chair.jpg',
    gallery: ['/product-chair.jpg', '/product-chair.jpg', '/product-chair.jpg'],
    description: 'Handcrafted wooden dining chair with premium finish',
    fullDescription:
      'Our Classic Dining Chair is the perfect blend of comfort and elegance. Handcrafted from premium solid wood, this chair features meticulous attention to detail and superior craftsmanship. Each chair is individually finished to bring out the natural beauty of the wood grain.',
    details: [
      'Solid wood construction',
      'Hand-applied finish',
      'Ergonomic design',
      'Dimensions: 45"H x 18"W x 20"D',
      'Weight capacity: 300 lbs',
      'Fully customizable',
    ],
  },
  2: {
    name: 'Elegant Dining Table',
    category: 'Table',
    image: '/product-table.jpg',
    gallery: ['/product-table.jpg', '/product-table.jpg', '/product-table.jpg'],
    description: 'Solid wood dining table, perfect centerpiece for any dining room',
    fullDescription:
      'This stunning Elegant Dining Table serves as the focal point of any dining room. Crafted from sustainably sourced premium wood, it showcases natural grain patterns and a luxurious finish. Perfect for both intimate dinners and large gatherings.',
    details: [
      'Solid wood construction',
      'Seats 6-8 people',
      'Dimensions: 72"L x 36"W x 30"H',
      'Hand-finished surface',
      'Extendable options available',
      'Custom sizes upon request',
    ],
  },
  3: {
    name: 'Custom Cabinet',
    category: 'Custom Work',
    image: '/product-cabinet.jpg',
    gallery: ['/product-cabinet.jpg', '/product-cabinet.jpg', '/product-cabinet.jpg'],
    description: 'Bespoke wooden cabinet tailored to your specifications',
    fullDescription:
      'Our Custom Cabinet is designed to meet your exact needs. Whether you need storage for your living room, bedroom, or office, we craft each cabinet to your specifications. Choose from a variety of wood types, finishes, and hardware.',
    details: [
      'Fully customizable design',
      'Premium wood selection',
      'Multiple door and drawer options',
      'Adjustable shelving',
      '6-8 week lead time',
      'Professional installation available',
    ],
  },
  4: {
    name: 'Wooden Door',
    category: 'Door',
    image: '/product-door.jpg',
    gallery: ['/product-door.jpg', '/product-door.jpg', '/product-door.jpg'],
    description: 'Premium handcrafted wooden entrance door',
    fullDescription:
      'Make a statement with our premium Wooden Door. Each door is handcrafted to perfection with attention to every detail. Our doors are built to last and provide both security and aesthetic appeal to any home or business.',
    details: [
      'Solid wood construction',
      'Weather-resistant finish',
      'Custom sizing available',
      'Various wood species to choose from',
      'Hardware included',
      'Professional installation recommended',
    ],
  },
  5: {
    name: 'Modern Bookshelf',
    category: 'Custom Work',
    image: '/product-cabinet.jpg',
    gallery: ['/product-cabinet.jpg', '/product-cabinet.jpg', '/product-cabinet.jpg'],
    description: 'Contemporary wooden bookshelf for any space',
    fullDescription:
      'Display your collection with style using our Modern Bookshelf. Combining minimalist design with sturdy construction, this bookshelf adds character to any room while providing ample storage.',
    details: [
      'Premium wood construction',
      'Multiple shelving options',
      'Dimensions: 60"H x 36"W x 12"D',
      'Weight capacity: 500 lbs',
      'Wall-mounted or freestanding',
      'Custom finishes available',
    ],
  },
  6: {
    name: 'Executive Chair',
    category: 'Chair',
    image: '/product-chair.jpg',
    gallery: ['/product-chair.jpg', '/product-chair.jpg', '/product-chair.jpg'],
    description: 'Premium executive office chair in natural wood',
    fullDescription:
      'Elevate your office with our Executive Chair. Combining luxury with functionality, this chair is perfect for the discerning professional. Handcrafted from premium wood with superior comfort and support.',
    details: [
      'Solid wood frame',
      'Premium leather or fabric upholstery',
      'Swivel and height-adjustable base',
      'Dimensions: 40"H x 26"W x 28"D',
      'Weight capacity: 350 lbs',
      'Fully customizable materials',
    ],
  },
  7: {
    name: 'Conference Table',
    category: 'Table',
    image: '/product-table.jpg',
    gallery: ['/product-table.jpg', '/product-table.jpg', '/product-table.jpg'],
    description: 'Large wooden conference table for boardrooms',
    fullDescription:
      'Impress your clients with our impressive Conference Table. Built for durability and style, this table is ideal for corporate boardrooms and executive offices. Custom sizes and finishes available.',
    details: [
      'Solid wood construction',
      'Seats 10-14 people',
      'Dimensions: 120"L x 48"W x 30"H',
      'Integrated cable management',
      'Custom configurations',
      'Delivery and installation included',
    ],
  },
  8: {
    name: 'Decorative Door Frame',
    category: 'Door',
    image: '/product-door.jpg',
    gallery: ['/product-door.jpg', '/product-door.jpg', '/product-door.jpg'],
    description: 'Artistic wooden door frame with intricate details',
    fullDescription:
      'Add architectural interest to your home with our Decorative Door Frame. Each frame is hand-carved with intricate details, showcasing the artistry of master craftsmen. A true statement piece for any entryway.',
    details: [
      'Hand-carved details',
      'Premium wood selection',
      'Custom dimensions available',
      'Multiple finish options',
      'Compatible with any door',
      'Professional installation available',
    ],
  },
};

export default function ProductDetailsClient({ params }) {
  const [product, setProduct] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = await params;
      setCurrentProductId(id);
      
      // Safe client-side localStorage access
      let products = [];
      if (typeof window !== "undefined") {
        const storedProducts = localStorage.getItem("fineCarpenterProducts");
        products = storedProducts ? JSON.parse(storedProducts) : [];
      }
      
      // Try to find product in localStorage products first
      let foundProduct = products.find(p => p.id.toString() === id.toString());
      
      if (!foundProduct) {
        // Fallback to default products for backward compatibility
        foundProduct = defaultProducts[parseInt(id)];
        if (foundProduct) {
          // Convert default product to match expected structure
          foundProduct = {
            id: parseInt(id),
            ...foundProduct,
            gallery: foundProduct.gallery || [foundProduct.image],
            fullDescription: foundProduct.fullDescription || foundProduct.description,
            details: foundProduct.details || ['Premium quality construction', 'Handcrafted finish']
          };
        }
      } else {
        // Ensure dynamic product has all required fields
        foundProduct = {
          ...foundProduct,
          gallery: foundProduct.gallery || [foundProduct.image],
          fullDescription: foundProduct.fullDescription || foundProduct.description,
          details: foundProduct.details || ['Premium quality construction', 'Handcrafted finish']
        };
      }
      
      setProduct(foundProduct);
      setLoading(false);
    };

    loadProduct();
  }, [params]);

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-foreground">Loading product details...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading, serif)' }}>
                Product Not Found
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Sorry, we couldn't find the product you're looking for. It may have been removed or the product ID might be incorrect.
              </p>
              
              <div className="bg-muted p-8 rounded-sm mb-10">
                <p className="text-foreground/80 mb-4">
                  <span className="font-semibold text-foreground">Product ID:</span> {currentProductId || 'Unknown'}
                </p>
                <p className="text-sm text-foreground/60">
                  If you believe this is an error, please contact our customer service team at <a href="tel:+919758186776" className="text-primary hover:text-primary/80 transition-colors font-semibold">+91 9758186776</a>
                </p>
              </div>

              <div className="space-y-4 mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-6">What would you like to do?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/products"
                    className="block bg-primary text-primary-foreground px-6 py-4 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                  >
                    Browse All Products
                  </Link>
                  <Link
                    href="/about"
                    className="block border-2 border-primary text-primary px-6 py-4 rounded-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block bg-secondary text-secondary-foreground px-6 py-4 rounded-sm font-semibold hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>

              <div className="border-t border-border pt-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">Featured Products</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((id) => {
                    const prod = defaultProducts[id];
                    if (!prod) return null;
                    return (
                      <Link key={id} href={`/products/${id}`} className="group cursor-pointer">
                        <div className="relative h-48 rounded-sm overflow-hidden mb-3 bg-muted">
                          <Image
                            src={prod.image}
                            alt={prod.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{prod.category}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/products" className="text-primary hover:text-primary/80">
              Products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{product.name}</span>
          </div>

          {/* Product Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              {/* Main Image */}
              <div className="relative h-96 rounded-sm overflow-hidden bg-muted mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((image, idx) => (
                  <div key={idx} className="relative h-24 rounded-sm overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src={image} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-accent text-sm font-semibold tracking-widest mb-4 uppercase">
                {product.category}
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'var(--font-heading, serif)' }}
              >
                {product.name}
              </h1>

              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Details List */}
              <div className="mb-10">
                <h3 className="font-semibold text-foreground mb-4 text-lg">Product Details</h3>
                <ul className="space-y-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/70">
                      <span className="text-accent text-xl leading-none mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="border-t border-border pt-8">
                <p className="text-muted-foreground text-sm mb-6">
                  Interested in this product? Get in touch to discuss customization options or place an order.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Contact for Order
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20 border-t border-border pt-20">
            <h2
              className="text-3xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
                if (id.toString() === currentProductId?.toString()) return null;
                
                // First try localStorage, then fallback to default products
                let relatedProduct = null;
                if (typeof window !== "undefined") {
                  const storedProducts = localStorage.getItem("fineCarpenterProducts");
                  const products = storedProducts ? JSON.parse(storedProducts) : [];
                  relatedProduct = products.find(p => p.id.toString() === id.toString());
                }
                
                if (!relatedProduct) {
                  relatedProduct = defaultProducts[id];
                }
                
                if (!relatedProduct) return null;
                return (
                  <a key={id} href={`/products/${id}`} className="group cursor-pointer">
                    <div className="relative h-64 rounded-sm overflow-hidden mb-4 bg-muted">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                      style={{ fontFamily: 'var(--font-heading, serif)' }}
                    >
                      {relatedProduct.name}
                    </h3>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
