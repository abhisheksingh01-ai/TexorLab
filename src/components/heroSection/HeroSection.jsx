import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] pt-28 md:pt-32 pb-6 overflow-hidden selection:bg-indigo-500 selection:text-white">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[12%] -right-[10%] w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute top-[25%] -left-[10%] w-56 h-56 bg-purple-500/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="text-white z-10">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-indigo-200 mb-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-70"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            Growth-Focused Web Platforms
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug tracking-tight mb-3">
            Stop Just Existing Online.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-purple-300 font-medium">
              Start Growing Revenue.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed mb-4">
            Your website should be your best salesperson, not a digital brochure.
            We build growth-ready platforms combining design, technical SEO,
            and marketing for scaling startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <a
              href="#"
              className="group w-full sm:w-auto justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            >
              Get My Growth Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#"
              className="group w-full sm:w-auto justify-center border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              Get a Free Site Audit
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <div className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full bg-slate-700 border border-[#1e1b4b]"
                ></div>
              ))}
            </div>
            <p>Trusted by scaling startups</p>
          </div>
        </div>

        {/* Right */}
        <div className="relative mt-4 lg:mt-0">
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-500 blur-[60px] opacity-30 -z-10 rounded-full"></div>

          <div className="relative transform rotate-1 hover:rotate-0 transition-all duration-300">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden">
              <div className="h-6 border-b border-white/10 flex items-center px-3 space-x-2 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
              </div>

              <img
                src="./Hero.jpg"
                alt="Growth Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
