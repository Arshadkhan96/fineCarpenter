'use client';

import { useState } from 'react';
import { useAdmin } from '@/app/admin-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { EditProductModal } from '@/components/edit-product-modal';

const categories = ['All', 'Chair', 'Table', 'Door', 'Custom Work'];

export default function ProductsPage() {
  const { products, deleteProduct } = useAdmin();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [deletingId, setDeletingId] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleDelete = (id) => {
    setDeletingId(id);
    deleteProduct(id);
    setTimeout(() => setDeletingId(null), 300);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Our Products
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse our collection of handcrafted furniture and custom woodwork pieces.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-sm font-semibold transition-all duration-300 text-sm tracking-wide ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`transition-all duration-300 ${deletingId === product.id ? 'opacity-50 scale-95' : ''}`}
              >
                <ProductCard
                  product={product}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      
      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        product={editingProduct}
      />
    </>
  );
}
