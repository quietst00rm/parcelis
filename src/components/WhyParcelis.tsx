import React from 'react';
import { Shield, Lock, Smile, TrendingUp, CheckCircle } from 'lucide-react';

const WhyParcelis: React.FC = () => {
  const saferChoiceReasons = [
    {
      icon: Shield,
      title: 'Licensed & Compliant',
      description: 'Parcelis partners with fully licensed insurance carriers, ensuring every protected shipment is backed by a compliant, regulated insurance product — not an internal promise.'
    },
    {
      icon: Lock,
      title: 'Predictable Cost per Order',
      description: 'Self-insurance is unpredictable. With Parcelis, you pay a flat, transparent fee per protected order. No more unexpected loss spikes destroying your monthly P&L.'
    },
    {
      icon: Smile,
      title: 'Instant, Automated Claims',
      description: 'Parcelis automates the entire process: fast customer submission, auto-documentation, and streamlined review. You recover hours of operational time every week.'
    },
    {
      icon: TrendingUp,
      title: 'No Inventory Losses',
      description: 'Replacing lost shipments out of pocket destroys margins. We remove that burden. No paying for replacement inventory or double shipping costs.'
    }
  ];

  const merchantBenefits = [
    'Fully licensed & compliant',
    'Predictable per-order cost',
    'Automated claims workflow',
    'Less customer service workload',
    'Zero inventory replacement cost',
    'Better margin protection',
    'Happier customers & repeat buyers',
    'Zero regulatory risk'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Parcelis Is The Safer Choice */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Why Parcelis Is The Safer Choice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shift the risk off your balance sheet and onto ours. We are the licensed standard for logistics protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {saferChoiceReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Merchants Choose Parcelis */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
            Why Merchants Choose Parcelis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchantBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParcelis;
