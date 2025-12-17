import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { 
  Search, 
  Share2, 
  Code2, 
  Smartphone, 
  Bug, 
  MapPin, 
  Video, 
  Monitor, 
  ArrowRight 
} from "lucide-react";
import { ALL_SERVICES } from "./serviceData"; // Ensure this path is correct

// Icon Mapping
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
  // Logic: Use limit if provided, otherwise show all
  const displayedServices = limit ? ALL_SERVICES.slice(0, limit) : ALL_SERVICES;
  
  // Logic: Only show the button if we are NOT showing all services
  const showViewAllButton = limit && limit < ALL_SERVICES.length;

  return (
    <section className="relative bg-linear-to-b from-[#24215c] via-[#1e1b4b] to-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-105 h-105 bg-indigo-400/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-[15%] -right-[10%] w-90 h-90 bg-purple-500/15 rounded-full blur-[110px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Our Key{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-purple-300">
              Services
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Get more traffic, more leads, and more sales. We build digital solutions that actually work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.key] || iconMap.default;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-xl p-6
                           hover:border-indigo-400/30 hover:-translate-y-1 transition-all duration-300
                           hover:shadow-lg hover:shadow-indigo-500/20 flex flex-col"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg
                                bg-white/5 border border-white/10 text-indigo-300
                                group-hover:bg-indigo-500 group-hover:text-white transition-all mb-5">
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5 group-hover:text-slate-200 transition-colors grow">
                  {service.desc}
                </p>

                <div className="flex items-center text-sm text-indigo-300 font-medium group-hover:text-indigo-200 mt-auto cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
        {showViewAllButton && (
           <div className="mt-12 text-center">
             <Link 
               to="/services" 
               className="inline-flex items-center justify-center px-8 py-3 
                          border border-indigo-500/30 bg-indigo-600/10 backdrop-blur-sm
                          text-base font-medium rounded-full text-indigo-100 
                          hover:bg-indigo-600 hover:text-white hover:scale-105 
                          transition-all duration-300 shadow-lg shadow-indigo-900/20"
             >
               View All Services
               <ArrowRight className="w-4 h-4 ml-2" />
             </Link>
           </div>
        )}

      </div>
    </section>
  );
};

export default KeyServices;