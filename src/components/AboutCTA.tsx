import React from 'react';
import { Link } from 'react-router-dom';

const AboutCTA: React.FC = () => {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
            Ready to Protect Your Customers?
        </h2>
        
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join merchants using Parcelis to eliminate shipping headaches and build customer trust.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/apply" className="bg-[#1e22aa] hover:bg-[#151885] text-white font-bold py-4 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg">
                Partner with Parcelis
            </Link>
            <Link to="/how-it-works" className="bg-white border-2 border-gray-200 text-slate-700 font-bold py-4 px-10 rounded-lg transition-all text-lg hover:scale-105">
                See How It Works
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
