import { Linkedin, Instagram } from 'lucide-react';
const AboutFounders = () => {
  return <section className="py-20 cinematic-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl cinematic-flare"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl cinematic-flare" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 cinematic-text-shadow">Meet the Founder</h3>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">The visionary behind HOOD who turns SaaS stories into revenue-driving video content</p>
        </div>
      <div className="flex justify-center max-w-5xl mx-auto">
          <div className="cinematic-card p-8 text-center hover-scale border border-white/20 shadow-cinematic max-w-md">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 p-1">
                <img alt="Victor Koech - Founder" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/victor-koech.jpg" />
              </div>
            </div>
            <h4 className="text-2xl font-semibold text-white mb-2">Victor Koech</h4>
            <p className="text-yellow-400 font-medium mb-4 text-lg">Founder & Creative Director</p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-yellow-400/10 text-yellow-400 text-sm font-medium px-4 py-2 rounded-full border border-yellow-400/20">Video Production Expert</span>
              <span className="bg-yellow-400/10 text-yellow-400 text-sm font-medium px-4 py-2 rounded-full border border-yellow-400/20">8 Years Experience</span>
              <span className="bg-white/5 text-gray-200 text-sm font-medium px-4 py-2 rounded-full border border-white/20">Brand Storyteller</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">The creative powerhouse behind our stunning visuals. Victor has worked with major brands like Bosch and Siberian Wellness, creating everything from YouTube content to real estate ads. His secret? Making every frame count in telling your brand's story.</p>
            
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/kvitey.contentcreator" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutFounders;