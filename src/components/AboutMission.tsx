import React from 'react';

const AboutMission: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1e22aa] rounded-2xl p-12 md:p-24 text-center shadow-2xl relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-10">Our Mission</h2>
                
                <p className="text-xl md:text-3xl text-blue-50 leading-relaxed font-light mb-10">
                    Our mission is to help e-commerce brands deliver peace of mind at every doorstep — transforming shipping anxiety into customer confidence through technology, expertise, and relentless service.
                </p>
                
                <div className="w-32 h-1 bg-white/20 mx-auto rounded-full mb-10"></div>

                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                    Powered by InsureShip's 20+ years of industry leadership and over 200 years of combined insurance expertise, Parcelis reduces claim disputes, eliminates refund losses, and creates exceptional post-purchase experiences that build lasting customer trust.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
