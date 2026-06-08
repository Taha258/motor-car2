const values = [
  {
    number: '01',
    title: 'Excellence',
    description: 'We strive for perfection in every transaction, ensuring our clients receive nothing but the highest standard of service.',
  },
  {
    number: '02',
    title: 'Reliability',
    description: 'Transparency is at our core. We build long-term relationships through honesty and consistent performance.',
  },
  {
    number: '03',
    title: 'Innovation',
    description: 'Embracing the latest automotive technologies and market trends to provide cutting-edge solutions for our clients.',
  },
  {
    number: '04',
    title: 'Loyalty',
    description: 'Our clients are family. We are committed to supporting your automotive journey long after the initial sale.',
  },
];

export default function AboutCoreValues() {
  return (
    <section className="py-24 px-4 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#31b56b]/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#31b56b] font-bold text-xs uppercase tracking-[0.2em]">
            <div className="w-8 h-px bg-[#31b56b]" />
            Our Principles
            <div className="w-8 h-px bg-[#31b56b]" />
          </div>
          <h2
            className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            OUR CORE <span className="text-[#31b56b]">VALUES</span>
          </h2>
          <p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            These pillars guide every decision we make and ensure we remain the most trusted name in the industry.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => {
            return (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 hover:border-[#31b56b]/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-[#31b56b]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#31b56b] transition-colors duration-500">
                    <span className="text-[#31b56b] group-hover:text-white font-bold text-xl transition-colors duration-500">★</span>
                  </div>
                  <span className="text-white/10 text-4xl font-black italic">{item.number}</span>
                </div>
                
                <h3
                  className="text-white text-2xl font-bold uppercase mb-4 tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}