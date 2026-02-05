const stats = [
  { number: "$15.7B", label: "lost to porch piracy in 2024" },
  { number: "250,000", label: "packages stolen daily in the US" },
  { number: "79%", label: "won't return after a bad delivery" },
];

const CalculateHero = () => (
  <section className="bg-[#1e2099] pt-16 md:pt-24 pb-12">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 mt-8">
        Your Shipping Protection Is Leaving Money on the Table
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mt-8">
        {stats.map((s, i) => (
          <div key={s.number} className="flex items-center gap-6 md:gap-16">
            {i > 0 && <div className="hidden md:block w-px h-10 bg-white/20" />}
            <div className="text-center">
              <p className="text-3xl font-bold text-white">{s.number}</p>
              <p className="text-sm text-white/70 max-w-[160px] mx-auto">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculateHero;
