import { ChevronRight } from "lucide-react";

const steps = [
  { num: "1", title: "Install", desc: "Add Parcelis to your Shopify store from the App Store. One click. No code. Live in under 15 minutes." },
  { num: "2", title: "Set Your Price", desc: "Choose what to charge customers for protection at checkout. The default gives you roughly 50% margin on every insured package." },
  { num: "3", title: "Collect Profit", desc: "Customers opt in at checkout. We handle every claim start to finish. You keep the spread. Your team does nothing." },
];

const CalculateHowItWorks = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Three Steps. Zero Hassle.</h2>
      <p className="text-lg text-gray-500 mb-12">Three steps. Zero hassle. Pure profit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-start">
        {steps.map((s, i) => (
          <div key={s.num} className="relative flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1e2099] text-white flex items-center justify-center text-xl font-bold mb-4">
              {s.num}
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-500 text-sm max-w-[240px]">{s.desc}</p>
            {i < 2 && (
              <ChevronRight className="hidden md:block absolute -right-4 top-4 text-gray-300" size={24} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculateHowItWorks;
