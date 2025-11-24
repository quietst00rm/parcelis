import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Clock, Users, TrendingUp, AlertCircle, Check, ShieldCheck } from 'lucide-react';

const WhyParcelis: React.FC = () => {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Why Parcelis Is The Safer Choice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Shift the risk off your balance sheet and onto ours. We are the licensed standard for logistics protection.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Licensed & Compliant */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Licensed & Compliant</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parcelis partners with fully licensed insurance carriers, ensuring every protected shipment is backed by a compliant, regulated insurance product — not an internal promise.
              </p>
            </div>
          </div>

          {/* Predictable Cost per Order */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <DollarSign size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Predictable Cost per Order</h3>
              <p className="text-muted-foreground leading-relaxed">
                Self-insurance is unpredictable. With Parcelis, you pay a flat, transparent fee per protected order. No more unexpected loss spikes destroying your monthly P&L.
              </p>
            </div>
          </div>

          {/* Instant, Automated Claims */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <Clock size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Instant, Automated Claims</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parcelis automates the entire process: fast customer submission, auto-documentation, and streamlined review. You recover hours of operational time every week.
              </p>
            </div>
          </div>

          {/* No Inventory Losses */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <TrendingUp size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">No Inventory Losses</h3>
              <p className="text-muted-foreground leading-relaxed">
                Replacing lost shipments out of pocket destroys margins. We remove that burden. No paying for replacement inventory or double shipping costs.
              </p>
            </div>
          </div>

          {/* Less Customer Service Workload */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Less Customer Service Workload</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stop dedicating hours to investigating lost packages. Parcelis handles the claims directly, freeing your team to focus on growth.
              </p>
            </div>
          </div>

          {/* Zero Regulatory Risk */}
          <div className="flex gap-4 items-start">
            <div className="text-primary flex-shrink-0 mt-1">
              <AlertCircle size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Zero Regulatory Risk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Avoid potential fines and legal complications. With Parcelis, you're using a properly licensed solution, not operating in a gray area.
              </p>
            </div>
          </div>
        </div>

        {/* Why Merchants Choose Parcelis */}
        <div className="bg-card rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Merchants Choose Parcelis
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Fully licensed & compliant</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Predictable per-order cost</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Automated claims workflow</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Less customer service workload</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Zero inventory replacement cost</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Better margin protection</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Happier customers & repeat buyers</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Check className="text-primary w-6 h-6" strokeWidth={2.5} />
              <span className="text-sm font-medium text-foreground">Zero regulatory risk</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary rounded-xl shadow-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to secure your shipments?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Don't let hidden risks sink your business.
          </p>
          <Link
            to="/apply"
            className="btn btn-outline-primary bg-white text-primary hover:bg-white/95 px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
          >
            Learn More About Parcelis Protection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyParcelis;
