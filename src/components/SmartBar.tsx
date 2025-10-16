import { Download } from 'lucide-react';

const SmartBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm border-b border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-3">
          <span className="text-white text-sm md:text-base font-medium">
            🎁 Free SaaS Video Production Guide
          </span>
          <a
            href="/saas-video-production-guide.pdf"
            download="HOOD-SaaS-Video-Production-Guide.pdf"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <Download className="h-4 w-4" />
            Download Free PDF
          </a>
        </div>
      </div>
    </div>
  );
};
export default SmartBar;