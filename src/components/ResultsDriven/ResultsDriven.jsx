import { CheckCircle } from "lucide-react";

const points = [
  "Grow your traffic & conversions",
  "Advanced SEO techniques",
  "Targeted ad campaigns",
  "Comprehensive performance analytics",
];

const ResultsDriven = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left – Product Mockup */}
        <div className="relative">
          <div className="bg-slate-100 rounded-xl shadow-xl p-6">
            <img
              src="https://dummyimage.com/600x400/e5e7eb/9ca3af&text=Analytics+Dashboard"
              alt="Analytics Dashboard"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right – Content */}
        <div>
          <h2 className="text-4xl font-bold text-textmain leading-tight">
            Results-Driven Strategies <br />
            <span className="text-secondary">for Your Success</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-lg">
            Our approach combines cutting-edge technology, proven marketing
            frameworks, and deep analytics to deliver consistent, scalable
            growth.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="text-accent" size={22} />
                <span className="text-gray-700 font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsDriven;
