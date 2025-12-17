import React from "react";
import { Search, BarChart3, Share2, Code2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Boost your organic ranking with technical audits, keyword strategies, and backlink campaigns.",
  },
  {
    icon: BarChart3,
    title: "PPC Advertising",
    desc: "Maximize ROI with laser-targeted ad campaigns on Google, Meta, and LinkedIn.",
  },
  {
    icon: Share2,
    title: "Social Marketing",
    desc: "Build community and brand loyalty through engaging content and influencer partnerships.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Lightning-fast, SEO-friendly websites built on modern stacks like React and Next.js.",
  },
];

const KeyServices = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#24215c] via-[#1e1b4b] to-[#0f172a] overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-indigo-400/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-[15%] -right-[10%] w-[360px] h-[360px] bg-purple-500/15 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 py-16">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Our Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
              Services
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            End-to-end digital solutions built to scale traffic, leads, and revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-xl p-6
                         hover:border-indigo-400/30 hover:-translate-y-1 transition-all duration-300
                         hover:shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg
                              bg-white/5 border border-white/10 text-indigo-300
                              group-hover:bg-indigo-500 group-hover:text-white transition-all mb-5">
                <service.icon size={22} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-5 group-hover:text-slate-200 transition-colors">
                {service.desc}
              </p>

              {/* Link */}
              <div className="flex items-center text-sm text-indigo-300 font-medium group-hover:text-indigo-200">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
