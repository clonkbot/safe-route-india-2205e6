const dangers = [
  {
    stat: '23x',
    label: 'Higher risk of crash',
    detail: 'Alcohol impairs judgment, reaction time, and coordination',
  },
  {
    stat: '30%',
    label: 'Of fatal crashes',
    detail: 'Nearly one-third of all road deaths involve alcohol',
  },
  {
    stat: '0.03%',
    label: 'Legal BAC limit in India',
    detail: 'Even small amounts significantly impair driving ability',
  },
];

const consequences = [
  { icon: '⚖️', text: 'Up to 6 months jail for first offense' },
  { icon: '💸', text: '₹10,000 fine under Motor Vehicles Act' },
  { icon: '🪪', text: 'License suspension or cancellation' },
  { icon: '⚰️', text: 'Culpable homicide charges if fatal' },
];

export default function DrunkDriving() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Red warning glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-red-900/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/30 border border-red-900 rounded-full mb-4 md:mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-xs md:text-sm tracking-widest font-medium">
              CRITICAL WARNING
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            DRUNK DRIVING
            <br />
            <span className="text-red-500">KILLS</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Dangers */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-display text-xl md:text-2xl text-[#FFD100] mb-4 md:mb-6">
              THE DEADLY FACTS
            </h3>

            {dangers.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-gradient-to-r from-red-950/50 to-transparent border-l-2 border-red-600"
              >
                <div className="font-display text-3xl md:text-4xl lg:text-5xl text-red-500 shrink-0">
                  {item.stat}
                </div>
                <div>
                  <div className="font-display text-base md:text-lg text-white">
                    {item.label}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Consequences */}
          <div className="bg-[#0f0f0f] border border-gray-800 p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl text-white mb-6 md:mb-8 flex items-center gap-3">
              <span className="text-2xl md:text-3xl">🚨</span>
              LEGAL CONSEQUENCES
            </h3>

            <div className="space-y-4">
              {consequences.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 md:p-4 bg-[#1a1a1a] border border-gray-800 hover:border-red-900 transition-colors"
                >
                  <span className="text-xl md:text-2xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Pledge box */}
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-br from-[#FFD100]/10 to-transparent border border-[#FFD100]/30">
              <div className="text-center">
                <span className="text-3xl md:text-4xl">🤝</span>
                <h4 className="font-display text-lg md:text-xl text-[#FFD100] mt-3 mb-2">
                  TAKE THE PLEDGE
                </h4>
                <p className="text-gray-400 text-sm">
                  "I pledge to never drink and drive, and to stop others from doing so."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom warning banner */}
        <div className="mt-12 md:mt-16 relative">
          <div className="bg-red-600 p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <span className="text-3xl md:text-4xl">🍺</span>
              <span className="font-display text-lg md:text-xl lg:text-2xl text-white">
                IF YOU DRINK, DON'T DRIVE. IF YOU DRIVE, DON'T DRINK.
              </span>
              <span className="text-3xl md:text-4xl">🚫</span>
            </div>
          </div>
          <div className="h-2 bg-repeating-stripe" />
        </div>
      </div>
    </section>
  );
}
