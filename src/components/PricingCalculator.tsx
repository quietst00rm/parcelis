import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricingCalculator = () => {
  const [packageValue, setPackageValue] = useState("150");

  const calculateMerchantCost = (value: number): string => {
    if (value <= 200) return "2.50";
    if (value <= 400) return "5.00";
    if (value <= 600) return "7.50";
    if (value <= 800) return "10.00";
    if (value <= 2500) return "Contact us";
    return "Maximum $2,500 per box";
  };

  const getMerchantCost = () => {
    const value = parseFloat(packageValue) || 0;
    return calculateMerchantCost(value);
  };

  return (
    <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 shadow-md">
      <div className="space-y-6">
        <div>
          <Label htmlFor="package-value" className="text-base mb-2 block font-semibold">
            Package Value
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="package-value"
              type="number"
              placeholder="Enter package value"
              value={packageValue}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '' || value === '0') {
                  setPackageValue(value);
                } else {
                  setPackageValue(value.replace(/^0+/, ''));
                }
              }}
              className="pl-7 text-lg h-12"
            />
          </div>
        </div>
        
        <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-2 font-medium">Your Cost</p>
          <p className="text-4xl font-bold text-primary">${getMerchantCost()}</p>
        </div>
        
        <div className="text-sm text-muted-foreground space-y-2 pt-4 border-t border-border">
          <p className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Pricing is charged at checkout on a per-package basis</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>Comprehensive coverage for loss, damage, and theft</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>No contracts, no monthly fees</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
