const preventionTips = [
  {
    icon: '🛣️',
    title: 'FOLLOW LANE DISCIPLINE',
    description: 'Stay in your lane, use indicators before changing lanes, and maintain safe distance from other vehicles.',
    color: 'yellow',
  },
  {
    icon: '🚦',
    title: 'OBEY TRAFFIC SIGNALS',
    description: 'Red means STOP. Running traffic lights is one of the leading causes of intersection accidents.',
    color: 'red',
  },
  {
    icon: '🪖',
    title: 'WEAR SAFETY GEAR',
    description: 'Helmets reduce risk of death by 42% and head injury by 69%. Always wear seatbelts in cars.',
    color: 'green',
  },
  {
    icon: '📱',
    title: 'NO PHONE WHILE DRIVING',
    description: 'Texting while driving makes you 23x more likely to crash. It can wait.',
    color: 'blue',
  },
  {
    icon: '🔧',
    title: 'VEHICLE MAINTENANCE',
    description: 'Regular brake, tire, and light checks prevent mechanical failures that cause accidents.',
    color: 'orange',
  },
  {
    icon: '🌙',
    title: 'NIGHT DRIVING CAUTION',
    description: 'Reduce speed at night, use headlights properly, and avoid overnight journeys when tired.',
    color: 'purple',
  },
];

const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
  yellow: { border: 'border-[#FFD100]', bg: 'bg-[#FFD100]/10', text: 'text-[#FFD100]' },
  red: { border: 'border-red-500', bg: 'bg-red-500/10', text: 'text-red-500' },
  green: { border: 'border-green-500', bg: 'bg-green-500/10', text: 'text-green-500' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', text: 'text-blue-500' },
  orange: { border: 'border-orange-500', bg: 'bg-orange-500/10', text: 'text-orange-500' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-500' },
};

export default function AccidentPrevention() {
  return (
    <section id="prevention" className="relative py-16 md:py-24 bg-[#0f0f0f] road-texture">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-[#FFD100] text-xs md:text-sm tracking-[0.3em] font-medium">
              PREVENTION GUIDE
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-2">
              ACCIDENT
              <br />
              <span className="text-[#FFD100]">PREVENTION</span>
            </h2>
          </div>
          <div className="w-32 md:w-48 h-1 bg-repeating-stripe" />
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {preventionTips.map((tip, index) => {
            const colors = colorClasses[tip.color];
            return (
              <div
                key={index}
                className={`group relative p-5 md:p-6 bg-[#0a0a0a] border-l-4 ${colors.border} hover:translate-x-2 transition-all duration-300`}
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 bg-[#1a1a1a] border border-gray-700 flex items-center justify-center">
                  <span className="font-display text-sm md:text-base text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${colors.bg} rounded-lg mb-4`}>
                  <span className="text-2xl md:text-3xl">{tip.icon}</span>
                </div>

                <h3 className={`font-display text-base md:text-lg ${colors.text} mb-2`}>
                  {tip.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {tip.description}
                </p>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 ${colors.bg} group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Road sign callout */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 bg-gradient-to-r from-[#FFD100]/10 to-transparent border border-[#FFD100]/20">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFD100] rounded-full flex items-center justify-center shrink-0">
            <span className="text-4xl md:text-5xl">🛑</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl md:text-2xl text-white mb-2">
              REMEMBER: SPEED THRILLS BUT KILLS
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              80% of road accidents in Jharkhand involve overspeeding. Stick to speed limits - they exist for your safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
