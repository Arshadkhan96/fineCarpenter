'use client';

import { useState, useEffect } from 'react';
import { useAdmin } from '@/app/admin-context';
import { X, Lock } from 'lucide-react';

export function AdminLoginModal({ isOpen, onClose }) {
  const { login } = useAdmin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Disable scroll + CLEANUP (IMPORTANT FIX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto'; // 🔥 FIX: restore scroll properly
    };
  }, [isOpen]);

  // ✅ ESC close (correct)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (login(email, password)) {
        setEmail('');
        setPassword('');
        onClose();
      } else {
        setError('Access Denied: Invalid credentials');
      }
      setLoading(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 min-h-screen"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-card rounded-lg shadow-2xl w-full max-w-md p-8 relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lock size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Admin Login
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
          >
            <X size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="fineCarpenter786@gmail.com"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input text-foreground placeholder-muted-foreground transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-foreground">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input text-foreground placeholder-muted-foreground transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm hover:opacity-70 transition"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 text-sm rounded-lg border border-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 font-semibold mt-6"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          Admin access only. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}