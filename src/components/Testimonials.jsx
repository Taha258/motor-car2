'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Grant',
    role: 'Business Mogul',
    image: '/images/6738c1f8a220b4656b9a38e8_tom.jpg',
    rating: 5,
    text: 'MotorDeal redefined my expectations. The acquisition of my Huracán was seamless, professional, and truly white-glove.',
  },
  {
    id: 2,
    name: 'Sara Blake',
    role: 'Art Collector',
    image: '/images/6738c1f7ac831b128ccfcc33_Sara-p-500.jpg',
    rating: 5,
    text: 'Searching for a specific vintage model was a challenge until I met the MotorDeal team. Their sourcing capabilities are unmatched.',
  },
  {
    id: 3,
    name: 'Jack Lee',
    role: 'Tech Founder',
    image: '/images/6738c1f8ccc3d328d217bf7c_Alex.jpg',
    rating: 5,
    text: 'Efficiency meets luxury. I appreciate the transparent pricing and the speed at which they finalized the paperwork for my Urus.',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Design Director',
    image: '/images/6738c1f70036ea32826789a5_Lisa-p-500.jpg',
    rating: 5,
    text: 'The aesthetic of the showroom is only surpassed by the quality of their fleet. A truly premium experience from start to finish.',
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#0f172a] py-24 px-4 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#31b56b]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#31b56b] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#31b56b]" />
              Testimonials
            </div>
            <h2
              className="text-white text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              VOICES OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31b56b] to-[#4ade80]">EXCELLENCE</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#31b56b] hover:border-[#31b56b] transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#31b56b] hover:border-[#31b56b] transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-visible">
          <div
            ref={scrollRef}
            className="flex gap-8 scroll-smooth pb-8"
            style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 w-[350px] md:w-[450px] flex-shrink-0 hover:border-[#31b56b]/30 transition-all duration-500 shadow-2xl relative"
              >
                <Quote className="absolute top-10 right-10 w-12 h-12 text-white/5" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#31b56b] text-[#31b56b]" />
                  ))}
                </div>

                {/* Review Text */}
                <p 
                  className="text-gray-300 text-lg md:text-xl leading-relaxed italic mb-10" 
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  &quot;{testimonial.text}&quot;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#31b56b]/20 shadow-lg shadow-[#31b56b]/10">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      width={64} 
                      height={64} 
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-[#31b56b] text-xs font-bold uppercase tracking-widest mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}