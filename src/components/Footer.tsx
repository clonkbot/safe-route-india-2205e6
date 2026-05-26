export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-12 md:pt-16 pb-6 md:pb-8">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-repeating-stripe-thin" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFD100] flex items-center justify-center">
                <span className="text-xl md:text-2xl">🛡️</span>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-white">SAFE ROUTE INDIA</h3>
                <p className="text-[#FFD100] text-xs tracking-widest">JHARKHAND CAMPAIGN</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              A road safety awareness initiative dedicated to reducing accidents and saving lives on Jharkhand roads. Together, we can make our roads safer.
            </p>
          </div>

          {/* Right: Quick links */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <h4 className="font-display text-sm text-[#FFD100] mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li><a href="#prevention" className="text-gray-400 hover:text-white text-sm transition-colors">Accident Prevention</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Drunk Driving Dangers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Safe Driving Tips</a></li>
                <li><a href="#emergency" className="text-gray-400 hover:text-white text-sm transition-colors">Emergency Contacts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm text-[#FFD100] mb-4">RESOURCES</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400 text-sm">Ministry of Road Transport</span></li>
                <li><span className="text-gray-400 text-sm">Jharkhand Traffic Police</span></li>
                <li><span className="text-gray-400 text-sm">Motor Vehicles Act</span></li>
                <li><span className="text-gray-400 text-sm">Road Safety Guidelines</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6 md:mb-8" />

        {/* Bottom: Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-[#FFD100] text-lg">❤️</span>
            <span className="text-gray-400 text-sm">
              Made with care by <span className="text-[#FFD100] font-medium">Ayush</span>
            </span>
          </div>

          <div className="text-gray-500 text-xs md:text-sm">
            Drive Safe • Save Lives • Jharkhand 2024
          </div>
        </div>

        {/* Attribution footer */}
        <div className="mt-6 pt-4 border-t border-gray-800/50">
          <p className="text-center text-gray-600 text-xs">
            Requested by @Ayush_kumar_jha_14 · Built by @clonkbot
          </p>
        </div>
      </div>
    </footer>
  );
}
