import PricingCalculator from "@/components/PricingCalculator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";

const PricingPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing, Maximum Profit</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See your costs and calculate your profit potential. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mb-16">
          <PricingCalculator />
        </div>

        {/* Carrier Coverage Strip */}
        <section className="mb-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Works with all major carriers</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src={uspsLogo} alt="USPS logo" className="h-8 object-contain opacity-70" />
            <img src={upsLogo} alt="UPS logo" className="h-8 object-contain opacity-70" />
            <img src={fedexLogo} alt="FedEx logo" className="h-8 object-contain opacity-70" />
            <img src={dhlLogo} alt="DHL logo" className="h-8 object-contain opacity-70" />
          </div>
        </section>

        {/* Coverage Limits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Coverage Limits</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Per Box</p>
              <p className="text-3xl font-bold text-primary">$2,500</p>
              <p className="text-sm text-muted-foreground mt-2">maximum</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Per Shipment</p>
              <p className="text-3xl font-bold text-primary">$25,000</p>
              <p className="text-sm text-muted-foreground mt-2">maximum</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-4">Global coverage across all carriers</p>
        </section>

        {/* Pricing Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing Tiers</h2>
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Package Value</th>
                  <th className="text-right p-4 font-semibold">Your Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-4">Up to $200</td>
                  <td className="p-4 text-right font-semibold">$2.50</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-4">$201 - $400</td>
                  <td className="p-4 text-right font-semibold">$5.00</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4">$401 - $600</td>
                  <td className="p-4 text-right font-semibold">$7.50</td>
                </tr>
                <tr className="border-t border-border bg-muted/30">
                  <td className="p-4">$601 - $800</td>
                  <td className="p-4 text-right font-semibold">$10.00</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-4">Over $800</td>
                  <td className="p-4 text-right font-semibold">Contact us</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            You set the customer-facing price and keep the markup
          </p>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">More Value Than Carrier Insurance</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-primary text-primary-foreground rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">PARCELIS</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>Includes porch piracy coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>All carriers supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>Faster claim resolution (5-7 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>Merchant profit opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✓</span>
                  <span>Zero merchant involvement in claims</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Standard Carrier Insurance</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-xl">✗</span>
                  <span>Limited coverage (no porch piracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✗</span>
                  <span>Carrier-specific only</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✗</span>
                  <span>Slower processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✗</span>
                  <span>No profit opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✗</span>
                  <span>Merchant manages claims process</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">Start Earning From Shipping Insurance</h2>
          <Button asChild variant="hero" size="lg">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
