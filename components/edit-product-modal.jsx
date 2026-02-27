'use client';

import { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { useAdmin } from '@/app/admin-context';

const categories = ['Chair', 'Table', 'Door', 'Custom Work'];

export function EditProductModal({ isOpen, onClose, product }) {
  const { updateProduct } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Chair',
    image: '',
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        category: product.category || 'Chair',
        image: product.image || '',
      });
      setPreview(product.image || null);
    }
  }, [product]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.description || !formData.image) {
      alert('Please fill in all fields and upload an image');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      // Update product
      updateProduct(product.id, {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        image: formData.image,
      });

      setLoading(false);
      onClose();
    }, 500);
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading, serif)' }}>
            Edit Product
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-sm transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Product Image
            </label>
            <div className="relative">
              {preview ? (
                <div className="relative h-64 rounded-sm overflow-hidden bg-muted">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFormData({ ...formData, image: '' });
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-sm text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <label className="block border-2 border-dashed border-border rounded-sm p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                  <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                  <p className="text-foreground font-medium mb-1">Upload Image</p>
                  <p className="text-muted-foreground text-sm">Drag and drop or click to select</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    required
                  />
                </label>
              )}
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Premium Wooden Chair"
              className="w-full px-4 py-3 border border-border rounded-sm bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-border rounded-sm bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your product in detail..."
              rows="5"
              className="w-full px-4 py-3 border border-border rounded-sm bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-border rounded-sm font-semibold hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating...' : 'Update Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
