import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Share2,
  Code2,
  Smartphone,
  Bug,
  MapPin,
  Video,
  Monitor,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import { ALL_SERVICES } from "./serviceData";

const iconMap = {
  website: Monitor,
  app: Smartphone,
  marketing: Share2,
  seo: Search,
  social: Share2,
  map: MapPin,
  video: Video,
  bug: Bug,
  default: Code2
};

const KeyServices = ({ limit = null }) => {
  const displayedServices = limit ? ALL_SERVICES.slice(0, limit) : ALL_SERVICES;
  const showViewAllButton = limit && limit < ALL_SERVICES.length;

  return (
    <section
      className="relative py-12 overflow-hidden z-0" // reduced from py-16
      style={{
        background:
          "linear-gradient(90deg, #201c4f 0%, #262361 50%, #2a276b 70%, #2e2c7d 100%)"
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/3 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8"> {/* reduced mb */}
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-indigo-900/30 border border-indigo-400/30 backdrop-blur-md shadow-[0_0_10px_rgba(99,102,241,0.3)] mb-3">
            <Layers className="w-4 h-4 text-indigo-300" />
            <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">
              Multi-Dimensional Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            Our Key{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200">
                Services
              </span>
            </span>
          </h2>

          <p className="text-sm md:text-base text-indigo-100/70 max-w-2xl mx-auto leading-relaxed">
            We craft immersive digital experiences that elevate your brand and drive real-world results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* reduced gap */}
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.key] || iconMap.default;

            return (
              <div
                key={service.id}
                style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                className="group relative h-full rounded-2xl p-[1px] transition-all duration-500
                           bg-gradient-to-b from-white/10 via-white/5 to-transparent
                           hover:from-indigo-400/50 hover:via-purple-400/50 hover:to-indigo-900/50
                           hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="relative h-full bg-[#1a1838]/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-4 flex flex-col overflow-hidden z-10
                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]
                                group-hover:shadow-[inset_0_0_12px_rgba(99,102,241,0.2),0_15px_30px_-8px_rgba(30,27,79,0.8)] transition-all duration-500">

                  <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[130%] transition-all duration-1000 ease-in-out z-20 pointer-events-none"></div>

                  <div className="relative w-12 h-12 mb-4 rounded-2xl flex items-center justify-center z-20
                                  bg-gradient-to-br from-white/10 to-white/0 border border-white/20
                                  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.5)]
                                  group-hover:scale-105 group-hover:shadow-[0_10px_20px_-5px_rgba(99,102,241,0.5),inset_0_0_6px_rgba(99,102,241,0.2)]
                                  group-hover:border-indigo-400/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                    <IconComponent
                      className="text-indigo-200 group-hover:text-white transition-colors duration-500 relative z-10"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="relative z-20 flex flex-col grow">
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight drop-shadow-sm">
                      {service.title}
                    </h3>

                    <p className="text-sm text-indigo-100/60 leading-relaxed mb-4 grow group-hover:text-indigo-100/90 transition-colors duration-500 font-light">
                      {service.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="inline-flex items-center text-sm font-bold text-indigo-300 group-hover:text-white transition-all duration-300
                                       px-2 py-1 rounded-lg bg-white/0 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 border border-transparent">
                        <span>Explore Dimension</span>
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-4 rounded-2xl bg-indigo-500/30 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 translate-y-2 group-hover:translate-y-4"></div>
                <div className="absolute inset-4 rounded-2xl bg-purple-600/20 blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-20 translate-y-2 group-hover:translate-y-3"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAllButton && (
          <div className="mt-12 text-center relative z-20"> {/* reduced mt */}
            <Link
              to="/services"
              className="group relative inline-flex items-center justify-center
                         bg-[#1a1838] border-2 border-indigo-500/30 rounded-full
                         overflow-hidden transition-all duration-500
                         hover:scale-105 hover:border-indigo-400
                         shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]"
            >
              <div className="relative z-10 px-6 py-2 font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" />
                View All Universe
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-indigo-600/40 blur-md"></div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyServices;
