import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO, Tech Innovate",
    quote: "Excellent results! Our traffic doubled in just a few months.",
  },
  {
    name: "James P.",
    role: "Marketing Director, Startup Co.",
    quote: "Top-notch service and a fantastic ROI on every campaign.",
  },
  {
    name: "Lisa M.",
    role: "Founder, Bright Solutions",
    quote: "Incredible team. Professional, responsive, and results-driven.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textmain">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted by fast-growing startups and enterprise teams worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-600">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-textmain">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
