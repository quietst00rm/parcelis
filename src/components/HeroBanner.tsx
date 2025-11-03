import { Link } from "react-router-dom";

interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroBannerProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
}

export const HeroBanner = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroBannerProps) => {
  return (
    <section className="relative w-full bg-[#1e2099] overflow-hidden py-24 md:py-28">
      {/* Animated White Shapes - DOUBLED (14 shapes) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Original 6-8 shapes */}
        <div className="absolute w-40 h-40 bg-white/5 rounded-lg rotate-12 -left-20 top-20 animate-float-slow" />
        <div className="absolute w-60 h-60 bg-white/8 rounded-xl rotate-45 right-32 top-10 animate-float-medium" />
        <div className="absolute w-32 h-32 bg-white/6 rounded-lg -rotate-20 left-1/4 bottom-32 animate-float-fast" />
        <div className="absolute w-48 h-48 bg-white/10 rounded-xl rotate-30 right-1/4 bottom-20 animate-float-slow" />
        <div className="absolute w-56 h-56 bg-white/7 rounded-xl -rotate-15 left-1/3 top-1/3 animate-float-medium" />
        <div className="absolute w-44 h-44 bg-white/9 rounded-lg rotate-25 right-1/3 top-1/2 animate-float-fast" />
        
        {/* NEW SHAPES - Doubling the amount */}
        <div className="absolute w-36 h-36 bg-white/6 rounded-lg rotate-18 left-16 top-1/2 animate-float-slow" />
        <div className="absolute w-52 h-52 bg-white/8 rounded-xl -rotate-25 right-20 bottom-1/3 animate-float-medium" />
        <div className="absolute w-40 h-40 bg-white/7 rounded-lg rotate-35 left-2/3 top-16 animate-float-fast" />
        <div className="absolute w-48 h-48 bg-white/5 rounded-xl -rotate-30 right-2/3 bottom-16 animate-float-slow" />
        <div className="absolute w-44 h-44 bg-white/9 rounded-lg rotate-40 left-1/2 bottom-1/4 animate-float-medium" />
        <div className="absolute w-56 h-56 bg-white/6 rounded-xl -rotate-12 right-1/2 top-1/4 animate-float-fast" />
        <div className="absolute w-32 h-32 bg-white/8 rounded-lg rotate-22 -right-16 top-2/3 animate-float-slow" />
        <div className="absolute w-50 h-50 bg-white/7 rounded-lg -rotate-18 -left-24 bottom-1/3 animate-float-medium" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {headline}
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-9 max-w-3xl mx-auto leading-relaxed">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryCTA.href}
            className="bg-white text-[#1e2099] px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            {primaryCTA.text}
          </Link>

          {secondaryCTA && (
            <Link
              to={secondaryCTA.href}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
