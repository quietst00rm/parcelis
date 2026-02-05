const tiers = [
  { label: "Growing Brand", orders: "1,000", monthly: "$1,071", annual: "$12,847" },
  { label: "Scaling Store", orders: "5,000", monthly: "$5,354", annual: "$64,242" },
  { label: "High-Volume", orders: "10,000", monthly: "$10,707", annual: "$128,484" },
  { label: "Enterprise", orders: "25,000", monthly: "$26,768", annual: "$321,210" },
];

const VolumeScenarios = () => (
  <section className="bg-[#f8fafc] py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">What Merchants at Your Scale Are Earning</h2>
      <p className="text-lg text-gray-500 mb-12">Based on 43% opt-in rate and $2.49 profit per insured package.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <div key={t.label} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">{t.label}</p>
            <p className="text-2xl font-bold text-gray-900">{t.orders}</p>
            <p className="text-sm text-gray-500 mb-4">orders/month</p>
            <hr className="border-gray-100 mb-4" />
            <p className="text-2xl font-bold text-[#1e2099]">{t.monthly}</p>
            <p className="text-sm text-gray-500 mb-2">monthly profit</p>
            <p className="text-lg font-semibold text-green-600">{t.annual}</p>
            <p className="text-sm text-gray-500">annual profit</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VolumeScenarios;
