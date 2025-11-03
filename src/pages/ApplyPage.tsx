import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    legalEntityName: "",
    businessType: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    platform: "",
    storeUrl: "",
    monthlyVolume: "",
    carriers: [] as string[],
    averageValue: "",
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast.error("Please agree to the Terms of Use and Privacy Policy");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Application submitted! We'll review within 24-48 hours and send onboarding documentation to your email.");
    setIsSubmitting(false);
  };

  const carrierOptions = ["USPS", "UPS", "FedEx", "DHL", "Regional", "International"];

  const toggleCarrier = (carrier: string) => {
    setFormData({
      ...formData,
      carriers: formData.carriers.includes(carrier)
        ? formData.carriers.filter(c => c !== carrier)
        : [...formData.carriers, carrier]
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply for PARCELIS</h1>
            <p className="text-lg text-muted-foreground">
              Start protecting packages and generating profit. Complete the application below to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-8">
            {/* Business Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Business Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="legalEntityName">Legal Entity Name (if different)</Label>
                  <Input
                    id="legalEntityName"
                    value={formData.legalEntityName}
                    onChange={(e) => setFormData({ ...formData, legalEntityName: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => setFormData({ ...formData, businessType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sole">Sole Proprietor</SelectItem>
                      <SelectItem value="llc">LLC</SelectItem>
                      <SelectItem value="corp">Corporation</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contactName">Primary Contact Name *</Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Full business address"
                  />
                </div>
              </div>
            </section>

            {/* Store & Platform Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Store & Platform Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="platform">E-commerce Platform *</Label>
                  <Select value={formData.platform} onValueChange={(value) => setFormData({ ...formData, platform: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shopify">Shopify</SelectItem>
                      <SelectItem value="29next">29next</SelectItem>
                      <SelectItem value="woocommerce">WooCommerce</SelectItem>
                      <SelectItem value="bigcommerce">BigCommerce</SelectItem>
                      <SelectItem value="magento">Magento</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="storeUrl">Store URL *</Label>
                  <Input
                    id="storeUrl"
                    type="url"
                    required
                    value={formData.storeUrl}
                    onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                    placeholder="https://yourstore.com"
                  />
                </div>

                <div>
                  <Label htmlFor="monthlyVolume">Estimated Monthly Shipping Volume *</Label>
                  <Select value={formData.monthlyVolume} onValueChange={(value) => setFormData({ ...formData, monthlyVolume: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under100">Under 100 packages</SelectItem>
                      <SelectItem value="100-500">100-500 packages</SelectItem>
                      <SelectItem value="500-1000">500-1,000 packages</SelectItem>
                      <SelectItem value="1000-5000">1,000-5,000 packages</SelectItem>
                      <SelectItem value="5000+">5,000+ packages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Shipping Details */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
              <div className="space-y-4">
                <div>
                  <Label className="mb-3 block">Primary Carriers Used *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {carrierOptions.map((carrier) => (
                      <div key={carrier} className="flex items-center space-x-2">
                        <Checkbox
                          id={carrier}
                          checked={formData.carriers.includes(carrier)}
                          onCheckedChange={() => toggleCarrier(carrier)}
                        />
                        <Label htmlFor={carrier} className="font-normal cursor-pointer">
                          {carrier}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="averageValue">Average Package Value *</Label>
                  <Select value={formData.averageValue} onValueChange={(value) => setFormData({ ...formData, averageValue: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under100">Under $100</SelectItem>
                      <SelectItem value="100-300">$100-$300</SelectItem>
                      <SelectItem value="300-500">$300-$500</SelectItem>
                      <SelectItem value="500-1000">$500-$1,000</SelectItem>
                      <SelectItem value="over1000">Over $1,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2 pt-4 border-t border-border">
              <Checkbox
                id="terms"
                checked={formData.agreedToTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
              />
              <Label htmlFor="terms" className="font-normal cursor-pointer leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                *
              </Label>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
