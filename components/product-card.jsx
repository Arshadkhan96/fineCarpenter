'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Edit2, Trash2 } from 'lucide-react';
import { useAdmin } from '@/app/admin-context';
import { useState } from 'react';

export function ProductCard({ product, onEdit, onDelete }) {
  const { isAdmin } = useAdmin();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      setIsDeleting(true);
      setTimeout(() => {
        onDelete(product.id);
      }, 300);
    }
  };

  return (
    <div className="group">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64 rounded-sm overflow-hidden mb-4 bg-muted">
          {product.image.startsWith('data:') ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
          
          {/* Admin Controls Overlay */}
          {isAdmin && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onEdit(product);
                }}
                className="p-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
                title="Edit product"
              >
                <Edit2 size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete();
                }}
                className="p-2 bg-red-500 text-white rounded-sm hover:bg-red-600 transition-colors"
                title="Delete product"
                disabled={isDeleting}
              >
                <Trash2 size={20} />
              </button>
            </div>
          )}
        </div>
      </Link>
      <Link href={`/products/${product.id}`}>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading, serif)' }}>
          {product.name}
        </h3>
      </Link>
      <p className="text-sm text-muted-foreground">{product.category}</p>
      {product.description && (
        <p className="text-xs text-foreground/60 mt-2 line-clamp-2">{product.description}</p>
      )}
    </div>
  );
}
