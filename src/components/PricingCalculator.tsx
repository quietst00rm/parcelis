import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricingCalculator = () => {
  const [packageValue, setPackageValue] = useState("150");
  const [customerPrice, setCustomerPrice] = useState("4.99");

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

  const getProfit = () => {
    const value = parseFloat(packageValue) || 0;
    const price = parseFloat(customerPrice) || 0;
    const costStr = calculateMerchantCost(value);
    
    if (costStr === "Contact us" || costStr.includes("Maximum")) {
      return null;
    }
    
    const cost = parseFloat(costStr);
    return (price - cost).toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 shadow-sm">
      <Tabs defaultValue="base" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="base">Base Cost Calculator</TabsTrigger>
          <TabsTrigger value="profit">Merchant Profit Calculator</TabsTrigger>
        </TabsList>
        
        <TabsContent value="base" className="space-y-6">
          <div>
            <Label htmlFor="base-package-value" className="text-base mb-2 block">Package Value</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="base-package-value"
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
          
          <div className="bg-secondary rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Your Cost</p>
            <p className="text-3xl font-bold text-primary">${getMerchantCost()}</p>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Pricing is charged at checkout on a per-package basis</p>
            <p>• You control the customer-facing price</p>
            <p>• No contracts, no monthly fees</p>
          </div>
        </TabsContent>
        
        <TabsContent value="profit" className="space-y-6">
          <div>
            <Label htmlFor="profit-package-value" className="text-base mb-2 block">Package Value</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="profit-package-value"
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
          
          <div>
            <Label htmlFor="customer-price" className="text-base mb-2 block">Price for Your Customer</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <Input
                id="customer-price"
                type="number"
                placeholder="What you'll charge"
                value={customerPrice}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || value === '0') {
                    setCustomerPrice(value);
                  } else {
                    setCustomerPrice(value.replace(/^0+(?=\d)/, ''));
                  }
                }}
                className="pl-7 text-lg h-12"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Your Cost</p>
              <p className="text-xl font-semibold">${getMerchantCost()}</p>
            </div>
            
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Customer Price</p>
              <p className="text-xl font-semibold">${customerPrice || "0.00"}</p>
            </div>
            
            {getProfit() !== null && (
              <div className="bg-success/10 border border-success rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Your Profit</p>
                <p className="text-3xl font-bold text-success">${getProfit()}</p>
              </div>
            )}
            
            {getProfit() === null && getMerchantCost().includes("Contact") && (
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm">For packages over $800, please contact us for custom quotes.</p>
              </div>
            )}
          </div>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Pricing is charged at checkout on a per-package basis</p>
            <p>• You control the customer-facing price</p>
            <p>• No contracts, no monthly fees</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingCalculator;
