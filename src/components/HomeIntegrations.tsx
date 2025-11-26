import React from 'react';
import { Code2 } from 'lucide-react';
import shopifyLogo from '@/assets/platforms/shopify.svg';
import nextLogo from '@/assets/platforms/29next.png';
import woocommerceLogo from '@/assets/platforms/woocommerce.svg';
import bigcommerceLogo from '@/assets/platforms/bigcommerce.svg';
import magentoLogo from '@/assets/platforms/magento.svg';

interface Integration {
  name: string;
  status: 'LIVE' | 'AVAILABLE';
  logo?: string;
  icon?: React.ReactElement;
}

const HomeIntegrations: React.FC = () => {
  const integrations: Integration[] = [
    { name: 'Shopify', status: 'LIVE', logo: shopifyLogo },
    { name: 'NEXT Commerce', status: 'LIVE', logo: nextLogo },
    { name: 'WooCommerce', status: 'LIVE', logo: woocommerceLogo },
    { name: 'BigCommerce', status: 'LIVE', logo: bigcommerceLogo }, 
    { name: 'Magento', status: 'LIVE', logo: magentoLogo },
    { name: 'Custom API', status: 'AVAILABLE', icon: <Code2 /> },
  ];

  return (
    <div className="py-24 bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-white mb-16">Seamlessly Integrated</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-100 transform hover:-translate-y-1">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-32 h-12 flex items-center justify-center">
                           {item.logo ? (
                               <img src={item.logo} alt={`${item.name} logo`} className="h-8 w-auto object-contain" />
                           ) : (
                               <div className="text-brand">
                                   {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                               </div>
                           )}
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