import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

const HomeValueProps: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
             <div className="mb-6 group-hover:scale-105 transition-transform origin-left">
                <Clock className="w-12 h-12 text-brand" strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Zero Hassle</h3>
             <div className="flex items-baseline gap-2 mb-6">
                 <span className="text-4xl font-extrabold text-brand">0 minutes</span>
                 <span className="text-gray-500 font-medium text-sm">merchant involvement</span>
             </div>
             <p className="text-gray-600 leading-relaxed text-lg">
                Zero merchant involvement in claims. Direct customers to our portal and never think about it again.
             </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
             <div className="mb-6 group-hover:scale-105 transition-transform origin-left">
                <ShieldCheck className="w-12 h-12 text-brand" strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-2">Protect Customers</h3>
             <div className="flex items-baseline gap-2 mb-6">
                 <span className="text-4xl font-extrabold text-brand">5-7 days</span>
                 <span className="text-gray-500 font-medium text-sm">claim resolution</span>
             </div>
             <p className="text-gray-600 leading-relaxed text-lg">
                Comprehensive coverage including porch piracy with fast claim resolution.
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeValueProps;