interface HeroProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />

      {/* Animated road markings */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 overflow-hidden opacity-20">
        <div className="road-dash">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-12 bg-white mb-8"
            />
          ))}
        </div>
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
        {/* Campaign badge */}
        <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-[#FFD100]/10 border border-[#FFD100]/30 rounded-full mb-6 md:mb-8">
          <span className="w-2 h-2 bg-[#FFD100] rounded-full animate-pulse" />
          <span className="text-[#FFD100] text-xs md:text-sm font-medium tracking-widest">
            ROAD SAFETY INITIATIVE
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-4 md:mb-6 animate-fade-in-up opacity-0 animation-delay-100"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <span className="text-white">SAFE</span>
          <span className="text-[#FFD100]"> ROUTE</span>
          <br />
          <span className="text-[#FFD100]">INDIA</span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-in-up opacity-0 animation-delay-200 mb-6 md:mb-8">
          <div className="inline-block px-4 md:px-6 py-2 bg-white/5 backdrop-blur border-l-4 border-[#FFD100]">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wide">
              Jharkhand Road Safety Campaign
            </p>
          </div>
        </div>

        {/* Warning message */}
        <div className="animate-fade-in-up opacity-0 animation-delay-300 max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed px-4">
            Every year, thousands of lives are lost on Jharkhand roads.
            Together, we can reduce accidents and save lives through awareness and responsible driving.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up opacity-0 animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#prevention"
            className="group relative px-8 py-4 bg-[#FFD100] text-black font-display text-lg tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10">LEARN TO PROTECT</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#emergency"
            className="group px-8 py-4 border-2 border-red-600 text-red-500 font-display text-lg tracking-wider transition-all duration-300 hover:bg-red-600 hover:text-white w-full sm:w-auto"
          >
            EMERGENCY CONTACTS
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up opacity-0 animation-delay-500 absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <span className="text-xs tracking-widest">SCROLL DOWN</span>
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-[#FFD100] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner warning signs */}
      <div className="absolute top-20 left-4 md:left-8 animate-wiggle hidden sm:block">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFD100] rotate-45 flex items-center justify-center">
          <span className="text-2xl md:text-3xl -rotate-45">⚠️</span>
        </div>
      </div>
      <div className="absolute top-20 right-4 md:right-8 animate-wiggle hidden sm:block" style={{ animationDelay: '0.5s' }}>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFD100] rotate-45 flex items-center justify-center">
          <span className="text-2xl md:text-3xl -rotate-45">🚗</span>
        </div>
      </div>
    </section>
  );
}
