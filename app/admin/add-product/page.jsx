'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/app/admin-context';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Upload } from 'lucide-react';

const categories = ['Chair', 'Table', 'Door', 'Custom Work'];

export default function AddProductPage() {
  const router = useRouter();
  const { isAdmin, addProduct } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    fullDescription: '',
    category: 'Chair',
    image: '',
    details: [''],
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Redirect if not admin
  if (!isAdmin) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-foreground/70 text-lg">You must be logged in as admin to access this page.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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

  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData({ ...formData, details: newDetails });
  };

  const addDetailField = () => {
    setFormData({ ...formData, details: [...formData.details, ''] });
  };

  const removeDetailField = (index) => {
    const newDetails = formData.details.filter((_, i) => i !== index);
    setFormData({ ...formData, details: newDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name || !formData.description || !formData.image) {
      alert('Please fill in all required fields and upload an image');
      setLoading(false);
      return;
    }

    // Filter out empty details
    const validDetails = formData.details.filter(detail => detail.trim() !== '');

    setTimeout(() => {
      // Add product to context
      addProduct({
        name: formData.name,
        description: formData.description,
        fullDescription: formData.fullDescription || formData.description,
        category: formData.category,
        image: formData.image,
        details: validDetails.length > 0 ? validDetails : ['Premium quality construction', 'Handcrafted finish']
      });

      setSuccess(true);
      setLoading(false);

      // Redirect after 1.5 seconds
      setTimeout(() => {
        router.push('/products');
      }, 1500);
    }, 500);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Add New Product
            </h1>
            <p className="text-muted-foreground text-lg">
              Create and add a new product to your catalog.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                Short Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of your product..."
                rows="3"
                className="w-full px-4 py-3 border border-border rounded-sm bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                required
              />
            </div>

            {/* Full Description */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Description
              </label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleInputChange}
                placeholder="Detailed description of your product, craftsmanship, materials, etc..."
                rows="5"
                className="w-full px-4 py-3 border border-border rounded-sm bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">Optional - if not provided, short description will be used</p>
            </div>

            {/* Product Details */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Product Details
              </label>
              <div className="space-y-2">
                {formData.details.map((detail, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={detail}
                      onChange={(e) => handleDetailChange(index, e.target.value)}
                      placeholder={`Detail ${index + 1} (e.g., Solid wood construction)`}
                      className="flex-1 px-4 py-2 border border-border rounded-sm bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    {formData.details.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeDetailField(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addDetailField}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  + Add Detail
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Add specific features, dimensions, or specifications</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-sm">
                <p className="text-green-700 font-medium">✓ Product added successfully!</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding Product...' : 'Add Product'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
