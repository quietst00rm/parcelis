import React, { useState, useEffect, useMemo } from 'react';
import { getPenaltyData } from '@/services/penaltyService';
import { StatePenaltyData } from '@/types';
import { Calculator, Info, AlertCircle, ChevronDown } from 'lucide-react';

const PenaltyCalculator: React.FC = () => {
  const [states, setStates] = useState<StatePenaltyData[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [selectedStateCode, setSelectedStateCode] = useState<string>('CA');
  const [ordersPerDay, setOrdersPerDay] = useState<number>(10);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPenaltyData();
        setStates(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load penalty data", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const selectedStateData = useMemo(() => {
    return states.find(s => s.stateCode === selectedStateCode);
  }, [states, selectedStateCode]);

  const calculations = useMemo(() => {
    if (!selectedStateData) return { daily: 0, monthly: 0, yearly: 0, penalty: 0 };
    
    const penalty = selectedStateData.penaltyPerViolation;
    const daily = ordersPerDay * penalty;
    const monthly = daily * 30;
    const yearly = daily * 365;

    return { daily, monthly, yearly, penalty };
  }, [ordersPerDay, selectedStateData]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      notation: val > 1000000000 ? 'compact' : 'standard' 
    }).format(val);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrdersPerDay(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 0 && val <= 10000) {
      setOrdersPerDay(val);
    } else if (e.target.value === '') {
      setOrdersPerDay(0);
    }
  };

  if (loading) {
    return (
      <div className="py-24 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div id="calculator" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
           <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-primary-light-tint text-primary mb-6 shadow-sm">
              <Calculator size={16} className="mr-2" strokeWidth={2} /> Interactive Tool
           </span>
           <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
             See Your Potential Penalty Exposure
           </h2>
           <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
             Use this calculator to estimate maximum regulatory penalty exposure based on your state and daily shipment volume.
           </p>
        </div>

        <div className="bg-card rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left: Inputs */}
            <div className="p-8 lg:p-12 w-full lg:w-1/2 bg-card">
                <div className="space-y-8">
                    
                    {/* State Selector */}
                    <div>
                        <label className="block text-sm font-bold text-foreground mb-3">Select Your State</label>
                        <div className="relative">
                            <select 
                                value={selectedStateCode}
                                onChange={(e) => setSelectedStateCode(e.target.value)}
                                className="block w-full pl-5 pr-12 py-4 text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:bg-card sm:text-sm rounded-2xl bg-muted shadow-inner transition-all text-foreground cursor-pointer"
                            >
                                {states.map(state => (
                                    <option key={state.stateCode} value={state.stateCode}>
                                        {state.stateName}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                                <ChevronDown className="h-6 w-6 text-primary" strokeWidth={2.5} />
                            </div>
                        </div>
                        <p className="mt-3 text-xs text-muted-foreground flex items-center">
                           <Info size={14} className="mr-1.5 text-primary" /> 
                           Fines based on state statutes for unauthorized insurance activity.
                        </p>
                    </div>

                    {/* Volume Slider */}
                    <div className="pt-2">
                        <div className="flex justify-between items-end mb-5">
                            <label className="text-sm font-bold text-foreground">Average Self-Insured Orders Per Day</label>
                            <div className="relative group">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">#</span>
                                <input 
                                    type="number"
                                    min="0"
                                    max="10000"
                                    value={ordersPerDay}
                                    onChange={handleInputChange}
                                    className="w-28 text-right pl-6 pr-3 py-2 rounded-xl text-primary font-bold text-lg bg-muted focus:bg-card focus:ring-2 focus:ring-primary outline-none transition-all"
                                />
                            </div>
                        </div>
                        <input 
                            type="range"
                            min="0"
                            max="1000"
                            step="1"
                            value={ordersPerDay}
                            onChange={handleSliderChange}
                            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                         <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                            <span>0</span>
                            <span>500</span>
                            <span>1,000+</span>
                        </div>
                    </div>

                    <div className="p-6 bg-primary-light-tint rounded-2xl flex gap-4 items-start">
                        <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={20} strokeWidth={2} />
                        <p className="text-sm text-foreground leading-relaxed">
                            <strong>Regulatory Reality:</strong> If a state penalizes "per violation" and you ship <strong>{ordersPerDay}</strong> uninsured packages daily, you theoretically commit <strong>{ordersPerDay}</strong> violations every day.
                        </p>
                    </div>

                </div>
            </div>

            {/* Right: Outputs */}
            <div className="p-8 lg:p-12 w-full lg:w-1/2 bg-primary text-primary-foreground flex flex-col justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                
                <div className="relative z-10">
                    <h3 className="text-lg font-medium text-primary-foreground/90 mb-2 border-b border-primary-foreground/20 pb-4">
                       Estimated Exposure ({selectedStateData?.stateName})
                    </h3>
                    {selectedStateData?.statuteCode && (
                      <p className="text-xs text-primary-foreground/70 mb-6 font-mono">
                        {selectedStateData.statuteCode}
                      </p>
                    )}

                    <div className="space-y-8">
                        <div>
                            <p className="text-xs text-primary-foreground/90 uppercase tracking-widest font-bold">Max Penalty Per Violation</p>
                            <p className="text-2xl font-bold text-primary-foreground mt-1">{formatCurrency(calculations.penalty)}</p>
                            <p className="text-[10px] text-primary-foreground/80 mt-1 opacity-80">(maximum statutory penalty)</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-[#000000]/20 p-5 rounded-2xl backdrop-blur-sm shadow-lg">
                                <p className="text-xs text-primary-foreground/90 uppercase tracking-widest font-bold">Daily Exposure</p>
                                <p className="text-3xl font-bold text-primary-foreground mt-2">
                                    {formatCurrency(calculations.daily)}
                                </p>
                            </div>
                             <div className="bg-[#000000]/20 p-5 rounded-2xl backdrop-blur-sm shadow-lg">
                                <p className="text-xs text-primary-foreground/90 uppercase tracking-widest font-bold">Monthly Exposure</p>
                                <p className="text-3xl font-bold text-primary-foreground mt-2">
                                    {formatCurrency(calculations.monthly)}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-primary-foreground/20">
                            <p className="text-xs text-primary-foreground/90 uppercase tracking-widest font-bold">Theoretical Yearly Exposure</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-primary-foreground mt-3 tracking-tight">
                                 {formatCurrency(calculations.yearly)}
                            </p>
                            <p className="mt-4 text-xs text-primary-foreground/70 opacity-60 italic leading-relaxed">
                                This calculator uses simplified assumptions for illustration only and does not constitute legal advice. Actual fines depend on regulator decisions and enforcement actions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PenaltyCalculator;
