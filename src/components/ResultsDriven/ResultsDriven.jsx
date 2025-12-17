import React from "react";
import { 
  CheckCircle2, 
  ArrowRight,  
  Zap,
} from "lucide-react";

const points = [
  "Grow your traffic & conversions",
  "Advanced SEO techniques",
  "Targeted ad campaigns",
  "Comprehensive performance analytics",
];

const ResultsDriven = () => {
  return (
    <section 
      className="relative py-12 overflow-hidden" // reduced from py-24
      style={{
        background: "linear-gradient(90deg, #201c4f 0%, #262361 50%, #2a276b 70%, #2e2c7d 100%)"
      }}
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* reduced gap */}

        {/* LEFT SIDE: Image */}
        <div className="relative group z-20">
          <div 
            className="relative rounded-lg overflow-hidden 
                       transform -rotate-2 shadow-[0_6px_20px_rgb(0,0,0,0.25)] 
                       transition-all duration-500 ease-out
                       group-hover:rotate-0 group-hover:scale-[1.02]"
          >
            <img
              src="./Result.jpg"
              alt="Analytics Dashboard Results"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 blur-2xl -z-10 transform -rotate-2 rounded-lg"></div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-indigo-900/30 border border-indigo-500/30 mb-3 backdrop-blur-sm">
            <Zap className="w-3 h-3 text-amber-300" />
            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">
              High Impact Results
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-3">
            Results-Driven Strategies <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-white to-purple-200">
              for Your Success
            </span>
          </h2>

          <p className="text-base text-indigo-100/70 max-w-lg mb-6 leading-relaxed font-light">
            We don't just rely on guesswork. Our approach combines cutting-edge technology, 
            data-driven frameworks, and deep analytics to deliver consistent, scalable growth.
          </p>

          <ul className="space-y-3 mb-6"> {/* reduced spacing */}
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <div className="shrink-0 w-7 h-7 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center 
                                  group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-300 group-hover:text-emerald-400 transition-colors" />
                </div>
                <span className="text-base text-indigo-50 font-medium group-hover:translate-x-1 transition-transform">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-6 py-3 
                         bg-white text-[#201c4f] rounded-full font-bold text-base overflow-hidden
                         shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]
                         hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]
                         transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1">
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsDriven;
