const CalculateCTA = () => (
  <section className="bg-[#1e2099] py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        The Math Speaks for Itself
      </h2>
      <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
        Install Parcelis today. No contracts. No setup fees. Start earning on your next order.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://apps.shopify.com/parcelis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1e2099] font-semibold rounded-lg px-8 py-4 hover:shadow-lg hover:scale-105 transition-all"
        >
          Install on Shopify
        </a>
        <a
          href="https://www.myparcelis.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white font-semibold rounded-lg px-8 py-4 hover:bg-white hover:text-[#1e2099] transition-all"
        >
          Talk to Our Team
        </a>
      </div>
      <p className="text-white/60 text-sm text-center mt-4">
        Free to install. No monthly fees. No credit card required.
      </p>
    </div>
  </section>
);

export default CalculateCTA;
