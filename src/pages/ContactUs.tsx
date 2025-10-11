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

            {/* Calendly Embed */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="cinematic-card border border-white/20 shadow-cinematic overflow-hidden">
                <div className="aspect-[9/16] md:aspect-[16/9]">
                  <iframe
                    src="https://calendly.com/kvit/15-minutes-discovery-call?month=2025-10"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a call with HOOD"
                    className="w-full h-full min-h-[700px]"
                  ></iframe>
                </div>
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
