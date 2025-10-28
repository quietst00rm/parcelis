const TermsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using PARCELIS services, you agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                PARCELIS provides shipping insurance reinsurance services to e-commerce merchants. We are a licensed reinsurance provider offering legitimate insurance products. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Package insurance coverage for lost, damaged, and stolen shipments</li>
                <li>Claims processing and resolution</li>
                <li>Merchant dashboard and reporting tools</li>
                <li>Platform integrations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Eligibility and Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To use PARCELIS services, you must be a business entity operating an e-commerce store. You must provide accurate and complete information during registration and keep your account information up to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Merchant Obligations</h2>
              <p className="text-muted-foreground mb-3">As a PARCELIS merchant, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Accurately represent insurance coverage to your customers</li>
                <li>Comply with pricing and coverage guidelines</li>
                <li>Direct customers to PARCELIS for claims filing</li>
                <li>Maintain accurate shipping and order records</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Coverage and Limitations</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong>Coverage includes:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Lost packages</li>
                  <li>Damaged packages</li>
                  <li>Stolen packages (including porch piracy)</li>
                </ul>
                
                <p><strong>Coverage limits:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Maximum $2,500 per box</li>
                  <li>Maximum $25,000 per shipment</li>
                </ul>
                
                <p><strong>Exclusions apply for:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Invalid or incomplete addresses</li>
                  <li>Refused deliveries</li>
                  <li>Packages abandoned by customer</li>
                  <li>Intentional damage or fraud</li>
                  <li>Prohibited items</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Claims Process</h2>
              <p className="text-muted-foreground mb-4">
                Claims must be filed by the end customer directly with PARCELIS within 30 days of the issue. Merchants are not responsible for claims processing. PARCELIS will review and resolve valid claims within 5-7 business days of receiving complete information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Pricing and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Merchant pricing is determined by package value according to published tiers. Merchants may set their own customer-facing prices. Payment terms are net 30 days. PARCELIS reserves the right to modify pricing with 30 days' notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate this agreement with 30 days' written notice. PARCELIS may terminate immediately for breach of terms, fraud, or illegal activity. Coverage for packages insured before termination remains in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                PARCELIS's liability is limited to the coverage amounts specified in the insurance policy. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                Disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Class action waivers apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may modify these Terms at any time. Material changes will be communicated via email. Continued use of services after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                For questions about these Terms, contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: legal@parcelis.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
