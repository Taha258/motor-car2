import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Founder Image with Artistic Frame */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#0f172a] rounded-[4rem] translate-x-6 translate-y-6 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="relative h-[650px] rounded-[4rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/men.jpg"
                alt="Founder"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>

          {/* Right: Founder Info */}
          <div className="space-y-12 relative z-20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#31b56b] font-bold text-xs uppercase tracking-[0.2em]">
                <div className="w-8 h-px bg-[#31b56b]" />
                Leadership
              </div>
              <h2
                className="text-[#0f172a] text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                THE VISIONARY <br />
                <span className="text-[#31b56b]">BEHIND MOTOR</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute -top-8 -left-8 text-8xl text-[#31b56b]/10 leading-none">&quot;</div>
              <p
                className="text-gray-500 text-xl font-medium leading-relaxed italic pl-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our goal was never just to build a dealership. It was to create a destination for automotive enthusiasts—a place where passion and precision meet.
              </p>
            </div>

            <div className="space-y-6">
              <p
                className="text-gray-400 text-base leading-relaxed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Under Ryan Thompson&apos;s leadership, MotorDeal has grown from a boutique showroom to a globally recognized name in luxury car exports and domestic sales. His commitment to transparent dealings and high-quality inventory remains the heartbeat of the company.
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-[#0f172a] text-2xl font-black uppercase tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Ryan Thompson
                </h4>
                <p className="text-[#31b56b] text-xs font-bold uppercase tracking-widest mt-1">Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}