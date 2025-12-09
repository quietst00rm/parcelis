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

code
Code
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
                type="url"
                required
                value={formData.storeUrl}
                onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                className={inputClass}
                placeholder="https://yourstore.com"
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

    {/* Submit Button */}
    <div className="mt-8 flex justify-center">
        <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-auto bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
        {isSubmitting ? "Submitting Application..." : "Submit Application"}
        </button>
    </div>
  </form>
</div>
  </div>
</div>
);
};
export default ApplyPage;