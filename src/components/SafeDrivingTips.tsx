const tips = [
  {
    category: 'BEFORE DRIVING',
    items: [
      { icon: '🔍', text: 'Check mirrors, lights, and brakes' },
      { icon: '😴', text: 'Ensure you are well-rested' },
      { icon: '📋', text: 'Carry all valid documents' },
      { icon: '⛽', text: 'Check fuel level for the journey' },
    ],
  },
  {
    category: 'WHILE DRIVING',
    items: [
      { icon: '👀', text: 'Keep eyes on the road at all times' },
      { icon: '🚗', text: 'Maintain safe following distance' },
      { icon: '🔊', text: 'Use horn sparingly and appropriately' },
      { icon: '🌧️', text: 'Reduce speed in rain/fog conditions' },
    ],
  },
  {
    category: 'FOR TWO-WHEELERS',
    items: [
      { icon: '🪖', text: 'Always wear ISI-marked helmet' },
      { icon: '🧥', text: 'Wear bright/reflective clothing' },
      { icon: '👁️', text: 'Stay visible to other vehicles' },
      { icon: '🚫', text: 'Never ride between lanes (lane splitting)' },
    ],
  },
];

const specialTips = [
  {
    title: 'MONSOON DRIVING',
    icon: '🌧️',
    tips: ['Reduce speed by 30%', 'Increase following distance', 'Avoid waterlogged roads', 'Use headlights in rain'],
  },
  {
    title: 'HIGHWAY TRAVEL',
    icon: '🛣️',
    tips: ['Take breaks every 2 hours', 'Avoid overnight driving', 'Stay in the correct lane', 'Watch for animals crossing'],
  },
  {
    title: 'CITY DRIVING',
    icon: '🏙️',
    tips: ['Watch for pedestrians', 'Be cautious at intersections', 'Respect zebra crossings', 'Give way to emergency vehicles'],
  },
];

export default function SafeDrivingTips() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="w-1 h-16 md:h-24 bg-gradient-to-b from-[#FFD100] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#FFD100] text-xs md:text-sm tracking-[0.3em] font-medium">
            ESSENTIAL KNOWLEDGE
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-2">
            SAFE DRIVING
            <br />
            <span className="text-[#FFD100]">TIPS</span>
          </h2>
        </div>

        {/* Main tips grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {tips.map((section, idx) => (
            <div key={idx} className="relative">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFD100] flex items-center justify-center">
                  <span className="font-display text-lg md:text-xl text-black">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-base md:text-lg text-white">
                  {section.category}
                </h3>
              </div>

              {/* Tips list */}
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start gap-3 p-3 bg-[#1a1a1a]/50 border border-gray-800/50 hover:border-[#FFD100]/30 transition-colors"
                  >
                    <span className="text-lg md:text-xl shrink-0">{item.icon}</span>
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special condition tips */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD100]/5 via-transparent to-[#FFD100]/5 blur-3xl" />

          <div className="relative">
            <h3 className="font-display text-xl md:text-2xl text-center text-[#FFD100] mb-6 md:mb-8">
              SPECIAL CONDITIONS
            </h3>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {specialTips.map((section, idx) => (
                <div
                  key={idx}
                  className="group p-5 md:p-6 bg-[#0a0a0a] border border-gray-800 hover:border-[#FFD100]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">
                      {section.icon}
                    </span>
                    <h4 className="font-display text-sm md:text-base text-white">
                      {section.title}
                    </h4>
                  </div>

                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="text-[#FFD100] mt-1">▸</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick reminder banner */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-[#FFD100]/10 via-[#FFD100]/5 to-[#FFD100]/10 border-y border-[#FFD100]/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
              <span className="text-4xl md:text-5xl">🎯</span>
              <div>
                <div className="font-display text-lg md:text-xl text-white">
                  GOLDEN RULE OF DRIVING
                </div>
                <div className="text-[#FFD100] text-sm md:text-base mt-1">
                  "Better late than never, better safe than sorry"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
