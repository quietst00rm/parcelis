import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, FileCheck, ChevronRight } from 'lucide-react';

const WhyParcelis: React.FC = () => {
  return (
    <div className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4">
            Why Choose PARCELIS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stop worrying about regulatory exposure and margin erosion. PARCELIS provides licensed, comprehensive coverage with zero merchant involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Licensed Coverage */}
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-6 text-primary">
              <Shield size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Licensed & Compliant</h3>
            <p className="text-muted-foreground leading-relaxed">
              PARCELIS is a licensed carrier-level solution. You're not self-insuring—you're using a legitimate, regulated service.
            </p>
          </div>

          {/* Fast Claims */}
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-6 text-primary">
              <Clock size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">5-7 Day Resolution</h3>
            <p className="text-muted-foreground leading-relaxed">
              Claims are resolved quickly without any involvement from your team. Your customers get refunds or replacements fast.
            </p>
          </div>

          {/* Zero Involvement */}
          <div className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <div className="mb-6 text-primary">
              <FileCheck size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Zero Merchant Involvement</h3>
            <p className="text-muted-foreground leading-relaxed">
              No customer service overhead. No reputation damage. No endless back-and-forth. We handle everything.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/apply"
              className="btn btn-primary btn-large"
            >
              Get Started Today
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/pricing"
              className="btn btn-outline-primary btn-large"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyParcelis;
