'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [products, setProducts] = useState([
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
    {
      id: 4,
      name: 'Wooden Door',
      category: 'Door',
      image: '/product-door.jpg',
      description: 'Premium handcrafted wooden entrance door',
    },
    {
      id: 5,
      name: 'Modern Bookshelf',
      category: 'Custom Work',
      image: '/product-cabinet.jpg',
      description: 'Contemporary wooden bookshelf for any space',
    },
    {
      id: 6,
      name: 'Executive Chair',
      category: 'Chair',
      image: '/product-chair.jpg',
      description: 'Premium executive office chair in natural wood',
    },
    {
      id: 7,
      name: 'Conference Table',
      category: 'Table',
      image: '/product-table.jpg',
      description: 'Large wooden conference table for boardrooms',
    },
    {
      id: 8,
      name: 'Decorative Door Frame',
      category: 'Door',
      image: '/product-door.jpg',
      description: 'Artistic wooden door frame with intricate details',
    },
  ]);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedAdminState = localStorage.getItem('fineCarpenterAdmin');
    if (savedAdminState === 'true') {
      setIsAdmin(true);
    }

    const savedProducts = localStorage.getItem('fineCarpenterProducts');
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts);
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Failed to parse saved products:', error);
      }
    }
  }, []);

  const login = (email, password) => {
    if (email === 'fineCarpenter786@gmail.com' && password === '9758188') {
      setIsAdmin(true);
      localStorage.setItem('fineCarpenterAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.setItem('fineCarpenterAdmin', 'false');
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      gallery: product.gallery || [product.image],
      fullDescription: product.fullDescription || product.description,
      details: product.details || ['Premium quality construction', 'Handcrafted finish']
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('fineCarpenterProducts', JSON.stringify(updatedProducts));
    return newProduct;
  };

  const updateProduct = (id, updates) => {
    const updatedProducts = products.map(p => 
      p.id === id ? { ...p, ...updates } : p
    );
    setProducts(updatedProducts);
    localStorage.setItem('fineCarpenterProducts', JSON.stringify(updatedProducts));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('fineCarpenterProducts', JSON.stringify(updatedProducts));
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout, products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
