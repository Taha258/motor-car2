import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="group relative bg-[#0f172a] rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#31b56b]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: About Us Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#31b56b] font-bold text-xs uppercase tracking-[0.2em]">
                  <div className="w-8 h-px bg-[#31b56b]" />
                  Our Story
                </div>
                <h2
                  className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] uppercase tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  BUILT ON PASSION, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31b56b] to-[#4ade80]">FOCUSED ON YOU</span>
                </h2>
              </div>
              
              <p
                className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                At MotorDeal, we don&apos;t just sell cars; we deliver dreams. With over a decade of excellence in the luxury automotive industry, we&apos;ve built a reputation for trust and unparalleled service.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white text-sm font-bold uppercase tracking-widest">
                  Est. 2012
                </div>
                <div className="px-6 py-3 bg-[#31b56b]/10 backdrop-blur-md rounded-2xl border border-[#31b56b]/20 text-[#31b56b] text-sm font-bold uppercase tracking-widest">
                  Award Winning
                </div>
              </div>
            </div>

            {/* Right: Modern Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Happy Clients', value: '1000+' },
                { label: 'Cars Sold', value: '500+' },
                { label: 'Cars In Stock', value: '300+' },
                { label: 'Premium Brands', value: '50+' },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 border border-white/5 hover:border-[#31b56b]/30 transition-all duration-500 group/stat"
                >
                  <h3
                    className="text-white text-4xl md:text-5xl font-extrabold mb-2 group-hover/stat:text-[#31b56b] transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}