const companies = [
  "CompanyOne",
  "NextWave",
  "Globex",
  "Innovatech",
  "TechLabs",
];

const TrustedCompanies = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-center text-gray-500 uppercase tracking-wider text-sm font-semibold mb-10">
          Trusted by Leading Companies
        </h3>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-xl font-semibold text-gray-700"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
