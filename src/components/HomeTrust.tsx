import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const HomeTrust: React.FC = () => {
  return (
    <div className="py-24 bg-brand border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-20">Licensed. Legitimate. Reliable.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Col 1 */}
            <div className="flex flex-col items-center">
                <div className="mb-6 text-white">
                    <Shield className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Powered by InsureShip</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto mb-8 h-12">
                    Industry-leading insurance infrastructure. Real underwriting, real coverage, real payouts.
                </p>
                <div className="border border-white/20 rounded-full px-4 py-2 text-[10px] font-bold text-white tracking-widest uppercase">
                    Licensed Reinsurance Provider
                </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col items-center">
                <div className="mb-6 text-white">
                    <Award className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto mb-8 h-12">
                    Not a tech workaround. Licensed in all operating states. Full DOI oversight.
                </p>
                <div className="border border-white/20 rounded-full px-4 py-2 text-[10px] font-bold text-white tracking-widest uppercase">
                    State-Regulated Coverage
                </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col items-center">
                <div className="mb-6 text-white">
                    <Clock className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">5-7 Day Claims</h3>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xs mx-auto mb-8 h-12">
                    Faster than carriers. Professional claim adjusters. Zero merchant involvement.
                </p>
                <div className="border border-white/20 rounded-full px-4 py-2 text-[10px] font-bold text-white tracking-widest uppercase">
                    Industry-Leading Speed
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HomeTrust;
