const emergencyNumbers = [
  {
    name: 'POLICE',
    number: '100',
    icon: '🚔',
    description: 'For accidents, crimes, or law enforcement assistance',
    color: 'blue',
    bgClass: 'bg-blue-600',
    hoverClass: 'hover:bg-blue-700',
    glowClass: 'shadow-blue-600/50',
  },
  {
    name: 'AMBULANCE',
    number: '112',
    icon: '🚑',
    description: 'National Emergency Response - Medical & All Emergencies',
    color: 'red',
    bgClass: 'bg-red-600',
    hoverClass: 'hover:bg-red-700',
    glowClass: 'shadow-red-600/50',
  },
  {
    name: 'FIRE',
    number: '101',
    icon: '🚒',
    description: 'Fire brigade and rescue services',
    color: 'orange',
    bgClass: 'bg-orange-600',
    hoverClass: 'hover:bg-orange-700',
    glowClass: 'shadow-orange-600/50',
  },
  {
    name: 'WOMEN HELPLINE',
    number: '1091',
    icon: '👩',
    description: 'Women in distress helpline',
    color: 'pink',
    bgClass: 'bg-pink-600',
    hoverClass: 'hover:bg-pink-700',
    glowClass: 'shadow-pink-600/50',
  },
];

const additionalContacts = [
  { name: 'Road Accident Emergency', number: '1073' },
  { name: 'Jharkhand Traffic Helpline', number: '0651-2490506' },
  { name: 'Tourist Police', number: '100' },
];

export default function EmergencyContacts() {
  return (
    <section id="emergency" className="relative py-16 md:py-24 bg-[#0a0a0a]">
      {/* Red pulsing glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full mb-4 md:mb-6 animate-pulse">
            <span className="text-lg md:text-xl">🆘</span>
            <span className="text-red-500 text-xs md:text-sm tracking-widest font-bold">
              EMERGENCY HELPLINE
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            SAVE THESE
            <br />
            <span className="text-red-500">NUMBERS</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
            In case of an emergency, immediately call these numbers. Every second counts in saving lives.
          </p>
        </div>

        {/* Main emergency buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {emergencyNumbers.map((contact, idx) => (
            <a
              key={idx}
              href={`tel:${contact.number}`}
              className={`group relative p-5 md:p-6 ${contact.bgClass} ${contact.hoverClass} shadow-lg ${contact.glowClass} transition-all duration-300 hover:scale-105 hover:shadow-xl text-center`}
            >
              {/* Pulse ring */}
              <div className={`absolute inset-0 ${contact.bgClass} opacity-50 animate-ping`} style={{ animationDuration: '2s' }} />

              <div className="relative">
                <span className="text-4xl md:text-5xl block mb-3 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </span>
                <div className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-2">
                  {contact.number}
                </div>
                <div className="font-display text-sm md:text-base text-white/90">
                  {contact.name}
                </div>
                <div className="text-white/60 text-xs mt-2 hidden md:block">
                  {contact.description}
                </div>

                {/* Tap indicator for mobile */}
                <div className="mt-3 text-white/80 text-xs font-medium tracking-wider md:opacity-0 group-hover:opacity-100 transition-opacity">
                  TAP TO CALL
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional contacts */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-5 md:p-8">
          <h3 className="font-display text-lg md:text-xl text-[#FFD100] mb-4 md:mb-6">
            OTHER IMPORTANT NUMBERS
          </h3>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {additionalContacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.number}`}
                className="flex items-center justify-between p-3 md:p-4 bg-[#1a1a1a] border border-gray-800 hover:border-[#FFD100]/50 transition-colors"
              >
                <span className="text-gray-300 text-sm">{contact.name}</span>
                <span className="font-display text-[#FFD100] text-base md:text-lg">{contact.number}</span>
              </a>
            ))}
          </div>
        </div>

        {/* What to do banner */}
        <div className="mt-8 md:mt-12 p-5 md:p-8 bg-gradient-to-r from-[#FFD100]/10 to-transparent border-l-4 border-[#FFD100]">
          <h3 className="font-display text-lg md:text-xl text-white mb-4">
            WHAT TO DO IN AN ACCIDENT
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '1', text: 'Stay calm and assess the situation' },
              { step: '2', text: 'Call emergency services immediately' },
              { step: '3', text: 'Do not move injured persons unless necessary' },
              { step: '4', text: 'Provide first aid if trained to do so' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-[#FFD100] flex items-center justify-center shrink-0">
                  <span className="font-display text-sm text-black">{item.step}</span>
                </div>
                <span className="text-gray-400 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
