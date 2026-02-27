'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { useAdmin } from '@/app/admin-context';
import { AdminLoginModal } from './admin-login-modal';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAdmin, logout } = useAdmin();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading, serif)' }}>
              FINE CARPENTER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                href="/admin/add-product"
                className="text-primary hover:text-primary/80 transition-colors text-sm font-medium tracking-wide bg-primary/10 px-3 py-1 rounded-sm"
              >
                Add Product
              </Link>
            )}
          </div>

          {/* Admin/Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={logout}
                className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-sm text-foreground hover:bg-muted transition-colors text-sm font-medium"
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            )}
            <button
              onClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
              className={`hidden md:inline-block px-3 py-1 rounded-sm text-sm font-medium transition-colors ${
                isAdmin
                  ? 'text-primary hover:text-primary/80'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              {isAdmin ? 'Admin' : 'Login'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <>
                <Link
                  href="/admin/add-product"
                  className="block px-3 py-2 rounded-md text-primary hover:bg-primary/10 transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Add Product
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              </>
            )}
            {!isAdmin && (
              <button
                onClick={() => {
                  setIsLoginModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-foreground hover:bg-muted transition-colors text-sm font-medium"
              >
                Admin Login
              </button>
            )}
          </div>
        )}

        {/* Admin Login Modal */}
        <AdminLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </nav>
  );
}
