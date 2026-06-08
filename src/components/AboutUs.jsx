export default function AboutStats() {
  return (
    <section 
      className="py-16 px-4"
      style={{ backgroundColor: '#dedede' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0f172a] rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: About Us */}
            <div>
              <p
                className="text-[#FAC104] text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ABOUT US
              </p>
              <h2
                className="text-white text-xl md:text-2xl font-bold leading-tight mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                BUILT ON CAR PASSION,
              </h2>
              <h2
                className="text-white text-xl md:text-2xl font-bold leading-tight mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                FOCUSED ON YOUR NEEDS
              </h2>
              <p
                className="text-gray-400 text-sm font-medium leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>

            {/* Right: Stats Grid 2x2 with Dividers */}
            <div className="grid grid-cols-2">
              
              {/* Stat 1 - Top Left */}
              <div className="text-center p-4 border-r border-b border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  1000+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  HAPPY CLIENTS
                </p>
              </div>

              {/* Stat 2 - Top Right */}
              <div className="text-center p-4 border-b border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  500+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CARS SOLD
                </p>
              </div>

              {/* Stat 3 - Bottom Left */}
              <div className="text-center p-4 border-r border-white/10">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  300+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CARS IN STOCK
                </p>
              </div>

              {/* Stat 4 - Bottom Right */}
              <div className="text-center p-4">
                <h3
                  className="text-white text-2xl font-bold leading-tight mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  50+
                </h3>
                <p
                  className="text-gray-400 text-xs font-medium uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  CAR BRANDS
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}