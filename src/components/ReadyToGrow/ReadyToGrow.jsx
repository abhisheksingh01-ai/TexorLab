const ReadyToGrow = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-secondary to-primary overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Partner with a results-driven digital team and start scaling your
          brand with confidence today.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <a
            href="#"
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
          >
            Get Started
          </a>

          <a
            href="#"
            className="border border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGrow;
