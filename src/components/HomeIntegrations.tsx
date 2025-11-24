import React from 'react';
import { ShoppingBag, ShoppingCart, Code2, Wrench, ArrowRight } from 'lucide-react';

const HomeIntegrations: React.FC = () => {
  const integrations = [
    { name: 'Shopify', status: 'LIVE', icon: <ShoppingBag /> },
    { name: 'NEXT Commerce', status: 'LIVE', icon: <ArrowRight className="bg-brand text-white rounded-sm p-0.5" /> },
    { name: 'WooCommerce', status: 'LIVE', icon: <ShoppingCart /> },
    { name: 'BigCommerce', status: 'LIVE', icon: <ShoppingBag /> }, 
    { name: 'Magento', status: 'LIVE', icon: <Wrench /> },
    { name: 'Custom API', status: 'AVAILABLE', icon: <Code2 /> },
  ];

  return (
    <div className="py-24 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-white mb-16">Seamlessly Integrated</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-100 transform hover:-translate-y-1">
                    <div className="text-brand mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {/* Placeholder for actual logos, using icons */}
                        <div className="w-12 h-12 flex items-center justify-center">
                           {item.name === 'Shopify' ? (
                               <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M21.5 5.5l-2-2.5-4.5 1.5-3.5-3-3.5 3-4.5-1.5-2 2.5 3 14h14l3-14zm-10 11a3 3 0 110-6 3 3 0 010 6z"/></svg>
                           ) : React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.status === 'LIVE' ? 'bg-emerald-500' : 'bg-blue-400'}`}></div>
                        <span className={`text-xs font-bold tracking-wider ${item.status === 'LIVE' ? 'text-emerald-600' : 'text-blue-500'}`}>
                            {item.status === 'LIVE' ? 'LIVE' : 'AVAILABLE'}
                        </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-3">
                        {item.name === 'Custom API' ? 'RESTful API' : item.name === 'Magento' ? 'Extension available' : item.name === 'WooCommerce' ? 'Plugin available' : item.name === 'Shopify' ? 'One-click app' : 'Full integration'}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeIntegrations;