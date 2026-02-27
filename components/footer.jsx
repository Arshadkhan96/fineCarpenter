'use client';

import Link from 'next/link';
import { Armchair, DoorOpen, Box, Frame, Utensils, Home } from 'lucide-react';


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-heading, serif)' }}>
              FINE CARPENTER
            </h3>
            <p className="text-sm text-secondary-foreground/80">
              Premium handmade furniture & custom carpentry for discerning individuals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919758186776" className="hover:text-accent transition-colors">
                  +91 9758186776
                </a>
              </li>
              <li>
                <a href="mailto:aslamkssr@gmail.com" className="hover:text-accent transition-colors">
                  aslamkssr@gmail.com
                </a>
              </li>
              <li>Defance Colony, Behat Road, Saharanpur</li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center text-center">
                <Armchair className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Sofa</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DoorOpen className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Door</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Box className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Almiras</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Frame className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Windows</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Utensils className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Kitchen</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Home className="w-8 h-8 mb-2 text-accent" />
                <p className="text-xs font-medium">Interiors</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-sm text-secondary-foreground/80">
            © {new Date().getFullYear()} Fine Carpenter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
