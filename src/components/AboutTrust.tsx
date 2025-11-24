import React from 'react';
import { Shield, Check, Users, Award } from 'lucide-react';

const AboutTrust: React.FC = () => {
  return (
    <div className="py-24 bg-gray-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100/50 rounded-[3rem] p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center mb-16">
                Built on Trust and Transparency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                
                <div className="flex gap-6 items-start">
                    <div className="text-[#1e22aa]">
                        <Shield className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory Compliance</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Licensed, legitimate insurance backed by trusted underwriters, ensuring you are fully compliant in every state you ship to.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <div className="text-[#1e22aa]">
                        <Check className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Customer Confidence</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Build lasting trust with comprehensive protection customers value, knowing their purchases are safe from cart to doorstep.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <div className="text-[#1e22aa]">
                        <Users className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Operational Excellence</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Streamlined claims management that keeps your team focused on growth rather than chasing lost packages.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <div className="text-[#1e22aa]">
                        <Award className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Industry Leadership</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Backed by InsureShip's proven track record, serving thousands of merchants with unmatched claim resolution speed.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTrust;
