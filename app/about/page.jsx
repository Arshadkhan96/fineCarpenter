import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-workshop.jpg"
            alt="Fine Carpenter Workshop"
            fill
            className="object-cover"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Story
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Introduction */}
          <section className="mb-16">
            <h2
              className="text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              FINE CARPENTER – Crafting Wood into Art
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Fine Carpenter was created with a simple vision — to transform raw wood into beautiful, functional, and long-lasting designs for modern living spaces. What started as a passion for craftsmanship has evolved into a professional digital platform showcasing high-quality carpentry and interior solutions.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              We specialize in premium woodwork products including Doors, Windows, Kitchen Cabinets, Almiras (Wardrobes), and custom Furniture. Each product is carefully crafted to deliver durability, elegance, and practical usability, suitable for both modern and traditional interiors.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              The platform provides a clean and user-friendly experience where users can explore products, view detailed information, and get inspiration for their homes and spaces.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              An integrated Admin Panel allows authorized access for managing products efficiently, including adding, editing, and deleting items while maintaining full control over the content.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              <strong>Goal:</strong> To establish a professional online presence for carpentry services, enabling users to explore Doors, Windows, Kitchen setups, Almiras, and Furniture in an elegant and accessible way.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-16 p-8 bg-muted rounded-sm">
            <h2
              className="text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Mission
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed">
              To create exceptional handcrafted furniture that enriches lives and spaces. We are committed to sustainable practices, using only responsibly sourced materials. Our mission is to provide clients with furniture that combines uncompromising quality with elegant design, creating pieces that become cherished heirlooms passed down through generations.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-muted rounded-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
                <p className="text-foreground/70">
                  We use only the finest materials and employ time-tested techniques to ensure every piece meets our exacting standards.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Sustainability</h3>
                <p className="text-foreground/70">
                  All our materials are responsibly sourced and sustainable. We believe luxury and environmental responsibility go hand in hand.
                </p>
              </div>
              <div className="p-6 bg-muted rounded-sm">
                <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-foreground/70">
                  We respect tradition while embracing modern design. Our pieces balance timeless aesthetics with contemporary functionality.
                </p>
              </div>
            </div>
          </section>

          {/* The Artisans */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Master Artisans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                  At the heart of Fine Carpenter are our master artisans—skilled craftspeople with decades of combined experience. Each team member brings a unique perspective and expertise to their work, from design conceptualization to the final finishing touches.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Our artisans are not just woodworkers; they are artists dedicated to their craft. They invest countless hours perfecting their skills, continuously learning new techniques, and pushing the boundaries of what's possible in furniture design.
                </p>
              </div>
              <div className="relative h-96 rounded-sm overflow-hidden bg-muted">
                <Image
                  src="/hero-workshop.jpg"
                  alt="Artisans at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2
              className="text-3xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Process
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Design Consultation</h3>
                  <p className="text-foreground/70">
                    We begin with a thorough consultation to understand your vision, preferences, and requirements. Our design team works closely with you to develop concepts that align with your aesthetic and functional needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Material Selection</h3>
                  <p className="text-foreground/70">
                    We carefully select premium materials based on your specifications. Our team sources sustainably harvested woods and ensures every piece meets our strict quality standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Handcrafting</h3>
                  <p className="text-foreground/70">
                    Our master artisans meticulously hand-craft each piece using traditional woodworking techniques combined with modern precision. Every detail is carefully considered and executed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Quality Assurance</h3>
                  <p className="text-foreground/70">
                    Every finished piece undergoes rigorous quality testing. We examine structural integrity, finish quality, and overall craftsmanship before a piece leaves our studio.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Delivery & Support</h3>
                  <p className="text-foreground/70">
                    We arrange professional delivery and installation. Our commitment to excellence extends beyond completion—we provide ongoing support and maintenance advice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-b border-border">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">14+</p>
              <p className="text-foreground/70 font-semibold">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-foreground/70 font-semibold">Pieces Crafted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-foreground/70 font-semibold">Handmade</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-foreground/70 font-semibold">Sustainable</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
