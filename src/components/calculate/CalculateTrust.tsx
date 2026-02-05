import { Shield, Clock, Package } from "lucide-react";

const points = [
  { Icon: Shield, title: "Backed by The Hartford", sub: "Fortune 500 insurer, A-rated" },
  { Icon: Clock, title: "5-7 Day Claims Resolution", sub: "Zero merchant involvement" },
  { Icon: Package, title: "$2,500 per box coverage", sub: "$25,000 per shipment max" },
];

const CalculateTrust = () => (
  <section className="bg-[#f8fafc] py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {points.map(({ Icon, title, sub }) => (
          <div key={title} className="text-center">
            <Icon className="mx-auto mb-3 text-[#1e2099]" size={32} />
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-sm text-gray-500">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CalculateTrust;
