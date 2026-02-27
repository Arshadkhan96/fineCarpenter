'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    
    // Create WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/919758186776?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our furniture or want to discuss a custom project? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Phone</h3>
                  <a
                    href="tel:+919758186776"
                    className="text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    +91 9758186776
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Email</h3>
                  <a
                    href="mailto:info@finecarpenter.com"
                    className="text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    aslamkssr@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Address</h3>
                  <p className="text-foreground/80">
                    Defance Colony
                    <br />
                    Behat Road
                    <br />
                    Saharanpur, India
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-foreground/80">
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              {submitted && (
                <div className="mb-6 p-4 bg-accent/20 border border-accent rounded-sm">
                  <p className="text-foreground font-semibold">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-border rounded-sm bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="border-t border-border pt-16">
            <h2
              className="text-3xl font-bold text-foreground mb-8"
              style={{ fontFamily: 'var(--font-heading, serif)' }}
            >
              Visit Our Studio
            </h2>
            <div className="relative h-96 rounded-sm overflow-hidden bg-muted">
              <iframe
                title="Fine Carpenter Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.8904842656316!2d77.5630903!3d29.9918719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec1b1f003027f%3A0xe2e40ca86b6d3b22!2sFine%20Carpenter!5e0!3m2!1sen!2sin!4v1708962234567"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
