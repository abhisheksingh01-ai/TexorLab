import { Search, BarChart3, Share2, Code2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Boost your online visibility and rankings with data-driven SEO strategies.",
  },
  {
    icon: BarChart3,
    title: "PPC Advertising",
    desc: "Drive qualified traffic and maximize ROI with targeted ad campaigns.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Engage your audience and grow your brand across social platforms.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "High-performance, conversion-focused websites built for scale.",
  },
];

const KeyServices = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textmain">
            Our Key Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions designed to accelerate
            growth and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition">
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-semibold text-textmain mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
