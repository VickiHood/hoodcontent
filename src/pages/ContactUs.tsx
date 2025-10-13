import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen cinematic-section">
      <SEO 
        title="Contact HOOD - Schedule Your Free Video Strategy Call"
        description="Get in touch with HOOD's video production experts. Schedule a free consultation to discuss your SaaS video needs and transform your product story."
        keywords="contact HOOD, video production consultation, SaaS video strategy, free consultation"
      />
      <ModernHeader />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 cinematic-section relative overflow-hidden">
          <div className="absolute inset-0 cinematic-grain opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight cinematic-text-shadow">
                Let's Create Something
                <span className="cinematic-gradient-text"> Amazing Together</span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
                Ready to transform your SaaS product story? Schedule a free consultation with our video production experts.
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="cinematic-card border border-white/20 shadow-cinematic overflow-hidden p-6 md:p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const formData = new FormData(form);
                    const name = String(formData.get('name') || '');
                    const email = String(formData.get('email') || '');
                    const message = String(formData.get('message') || '');
                    const subject = encodeURIComponent(`Consultation request from ${name || 'Website visitor'}`);
                    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                    window.location.href = `mailto:hello@hood.club?subject=${subject}&body=${body}`;
                  }}
                  className="grid gap-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                      <input id="name" name="name" type="text" required className="w-full bg-black/30 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/60" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                      <input id="email" name="email" type="email" required className="w-full bg-black/30 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/60" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full bg-black/30 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/60" placeholder="Tell us about your project"></textarea>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <button type="submit" className="cinematic-cta text-lg px-10 py-4 font-semibold rounded-md">Send Email</button>
                    <a href="mailto:hello@hood.club" className="text-yellow-400 hover:text-yellow-300">Or email us directly</a>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cinematic-card border border-white/20 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Call</h3>
                <p className="text-gray-300 text-sm">
                  Free 15-minute discovery call to discuss your project
                </p>
              </div>

              <div className="cinematic-card border border-white/20 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:hello@hood.club" className="text-yellow-400 hover:text-yellow-300 text-sm">
                  hello@hood.club
                </a>
              </div>

              <div className="cinematic-card border border-white/20 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm">
                  Lisbon, Portugal<br />
                  Remote-first team
                </p>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 cinematic-text-shadow">
                What You'll Get on the Call
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Strategy</h3>
                  <p className="text-gray-300">
                    Tailored video strategy specifically for your SaaS product
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Insights</h3>
                  <p className="text-gray-300">
                    Professional recommendations from experienced video producers
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-white mb-2">ROI Focused</h3>
                  <p className="text-gray-300">
                    Data-driven approach to maximize your video marketing results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
