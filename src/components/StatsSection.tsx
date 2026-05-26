const stats = [
  { number: '1,50,000+', label: 'Road Deaths in India Annually', icon: '💀' },
  { number: '3,500+', label: 'Deaths in Jharkhand (2023)', icon: '📊' },
  { number: '30%', label: 'Caused by Drunk Driving', icon: '🍺' },
  { number: '60%', label: 'Preventable Accidents', icon: '🛡️' },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a0a]">
      {/* Top hazard stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-repeating-stripe-thin" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#FFD100] text-xs md:text-sm tracking-[0.3em] font-medium">
            THE REALITY
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-2">
            WHY THIS MATTERS
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-gray-800 hover:border-[#FFD100]/50 transition-all duration-500"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-[#FFD100] transition-all duration-300 group-hover:w-6 group-hover:h-6 md:group-hover:w-8 md:group-hover:h-8" />
              <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-[#FFD100] transition-all duration-300 group-hover:w-6 group-hover:h-6 md:group-hover:w-8 md:group-hover:h-8" />

              <div className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFD100] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Warning banner */}
        <div className="mt-12 md:mt-16 relative">
          <div className="absolute inset-0 bg-red-900/20 blur-xl" />
          <div className="relative p-4 md:p-6 border-l-4 border-red-600 bg-red-950/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
              <span className="text-3xl md:text-4xl">⚠️</span>
              <div>
                <p className="font-display text-lg md:text-xl text-red-500">
                  ROAD ACCIDENTS ARE THE LEADING CAUSE OF DEATH AMONG YOUTH
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  Age group 18-35 accounts for 54% of all road fatalities in Jharkhand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-repeating-stripe-thin" />
    </section>
  );
}
