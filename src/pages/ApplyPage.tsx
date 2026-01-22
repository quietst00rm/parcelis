import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApplyHero from '../components/ApplyHero';
import { Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const ApplyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms) {
      toast.error("Please agree to the Terms of Use and Privacy Policy");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xbddzeyg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again or email us directly at support@myparcelis.com");
    } finally {
      setIsSubmitting(false);
    }
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

  // Shared styles
  const inputClass = "w-full px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:bg-white focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all placeholder:text-gray-400";
  const labelClass = "block text-sm font-bold text-slate-700 mb-2";
  const selectWrapperClass = "relative";
  const selectIconClass = "absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500";

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <ApplyHero />
        <div className="flex-grow flex items-center justify-center py-20 px-4">
            <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <Check size={40} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Application Received!</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Thank you for applying to Parcelis. Our team will review your information and send onboarding documentation to <strong>{formData.email}</strong> within 24-48 hours.
                </p>
                <Link to="/" className="bg-brand text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark transition-colors inline-block">
                    Return Home
                </Link>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <ApplyHero />
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 space-y-12 shadow-xl">
            
            {/* Business Information */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-gray-100">Business Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                  <input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. Acme Logistics LLC"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="legalEntityName" className={labelClass}>Legal Entity Name (if different)</label>
                    <input
                        id="legalEntityName"
                        value={formData.legalEntityName}
                        onChange={(e) => setFormData({ ...formData, legalEntityName: e.target.value })}
                        className={inputClass}
                        placeholder="Legal registered name"
                    />
                    </div>

                    <div>
                    <label htmlFor="businessType" className={labelClass}>Business Type *</label>
                    <div className={selectWrapperClass}>
                        <select 
                            id="businessType"
                            required
                            value={formData.businessType} 
                            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer`}
                        >
                            <option value="" disabled>Select type</option>
                            <option value="sole">Sole Proprietor</option>
                            <option value="llc">LLC</option>
                            <option value="corp">Corporation</option>
                            <option value="partnership">Partnership</option>
                        </select>
                        <div className={selectIconClass}><ChevronDown size={20} /></div>
                    </div>
                    </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-gray-100">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="contactName" className={labelClass}>Primary Contact Name *</label>
                  <input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className={inputClass}
                    placeholder="Full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className={labelClass}>Business Address *</label>
                  <input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className={inputClass}
                    placeholder="Full business address"
                  />
                </div>
              </div>
            </section>

            {/* Store & Platform Information */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-gray-100">Store & Platform Information</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="platform" className={labelClass}>E-commerce Platform *</label>
                    <div className={selectWrapperClass}>
                        <select 
                            id="platform"
                            required
                            value={formData.platform} 
                            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer`}
                        >
                            <option value="" disabled>Select platform</option>
                            <option value="shopify">Shopify</option>
                            <option value="29next">NEXT Commerce</option>
                            <option value="woocommerce">WooCommerce</option>
                            <option value="bigcommerce">BigCommerce</option>
                            <option value="magento">Magento</option>
                            <option value="custom">Custom</option>
                            <option value="other">Other</option>
                        </select>
                        <div className={selectIconClass}><ChevronDown size={20} /></div>
                    </div>
                    </div>

                    <div>
                    <label htmlFor="storeUrl" className={labelClass}>Store URL *</label>
                    <input
                        id="storeUrl"
                        type="text"
                        required
                        value={formData.storeUrl}
                        onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                        className={inputClass}
                        placeholder="yourstore.com"
                    />
                    </div>
                </div>

                <div>
                  <label htmlFor="monthlyVolume" className={labelClass}>Estimated Monthly Shipping Volume *</label>
                  <div className={selectWrapperClass}>
                    <select 
                        id="monthlyVolume"
                        required
                        value={formData.monthlyVolume} 
                        onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                        className={`${inputClass} appearance-none cursor-pointer`}
                    >
                        <option value="" disabled>Select volume range</option>
                        <option value="under100">Under 100 packages</option>
                        <option value="100-500">100-500 packages</option>
                        <option value="500-1000">500-1,000 packages</option>
                        <option value="1000-5000">1,000-5,000 packages</option>
                        <option value="5000+">5,000+ packages</option>
                    </select>
                    <div className={selectIconClass}><ChevronDown size={20} /></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Shipping Details */}
            <section>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-gray-100">Shipping Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4">Primary Carriers Used *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {carrierOptions.map((carrier) => (
                      <label key={carrier} className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={formData.carriers.includes(carrier)}
                          onChange={() => toggleCarrier(carrier)}
                          className="w-5 h-5 text-brand rounded focus:ring-brand border-gray-300"
                        />
                        <span className="text-slate-700 font-medium">{carrier}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="averageValue" className={labelClass}>Average Package Value *</label>
                   <div className={selectWrapperClass}>
                        <select 
                            id="averageValue"
                            required
                            value={formData.averageValue} 
                            onChange={(e) => setFormData({ ...formData, averageValue: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer`}
                        >
                            <option value="" disabled>Select value range</option>
                            <option value="under100">Under $100</option>
                            <option value="100-300">$100-$300</option>
                            <option value="300-500">$300-$500</option>
                            <option value="500-1000">$500-$1,000</option>
                            <option value="over1000">Over $1,000</option>
                        </select>
                        <div className={selectIconClass}><ChevronDown size={20} /></div>
                   </div>
                </div>
              </div>
            </section>

            {/* Terms Agreement */}
            <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
              <input
                id="terms"
                type="checkbox"
                required
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="w-6 h-6 text-brand rounded focus:ring-brand border-gray-300 mt-1"
              />
              <label htmlFor="terms" className="font-medium text-gray-600 cursor-pointer leading-relaxed text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-brand hover:underline font-bold">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-brand hover:underline font-bold">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-5 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;