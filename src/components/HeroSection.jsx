'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { ChevronDown, Search, Car, Settings, Fuel } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const CAR_MAKES = ['Lamborghini', 'Ferrari', 'Mercedes', 'BMW', 'Audi', 'Porsche', 'Range Rover'];
const CAR_TYPES = ['Convertible', 'Coupe', 'SUV', 'Sedan', 'Hatchback'];
const CAR_CONDITIONS = ['New', 'Used'];

function Dropdown({ label, options, value, onChange, icon: Icon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative flex-1" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-white/95 backdrop-blur-sm text-gray-700 px-5 py-3.5 rounded-xl text-sm font-medium hover:bg-white transition-all duration-300 border border-transparent hover:border-[#FAC104]/30 shadow-sm"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-[#FAC104]" />}
          <span className={value ? 'text-[#0f172a] font-bold' : 'text-gray-400 font-medium'}>
            {value || label}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180 text-[#FAC104]' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => { onChange(''); setOpen(false); }}
            className="w-full text-left px-5 py-3 text-sm text-gray-400 hover:bg-gray-50 border-b border-gray-50 transition-colors"
          >
            All {label}s
          </button>
          <div className="max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-5 py-3 text-sm transition-all duration-200
                  ${value === opt
                    ? 'bg-[#FAC104]/10 text-[#FAC104] font-bold border-l-4 border-[#FAC104]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function HeroContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [carMake, setCarMake]           = useState(searchParams.get('make') || '');
  const [carType, setCarType]           = useState(searchParams.get('type') || '');
  const [carCondition, setCarCondition] = useState(searchParams.get('condition') || '');
  const [searchQuery, setSearchQuery]   = useState(searchParams.get('q') || '');

  function handleSearch() {
    const params = new URLSearchParams();
    if (carMake)            params.set('make', carMake);
    if (carType)            params.set('type', carType);
    if (carCondition)       params.set('condition', carCondition);
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    
    router.push(`/showroom?${params.toString()}`);
  }

  return (
    <section className="relative w-full h-[750px] md:h-[850px] z-30">
      {/* Background Image with Parallax-like effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
      />
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0f172a]/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-20">
        <div className="max-w-4xl w-full text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#FAC104]/20 backdrop-blur-md rounded-full border border-[#FAC104]/30 mb-4 animate-pulse">
            <span className="text-[#FAC104] text-xs font-bold tracking-[0.2em] uppercase">Premium Car Experience</span>
          </div>
          
          <h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.1]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            DISCOVER YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">DREAM CAR</span> AT MOTOR
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Experience the pinnacle of luxury and performance. Browse our exclusive collection of world-class automobiles.
          </p>

          {/* Filter Box - VIP Design */}
          <div className="mt-12 w-full bg-white/5 backdrop-blur-xl rounded-[2rem] p-4 md:p-8 border border-white/10 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col md:flex-row gap-4 flex-[2]">
                <Dropdown 
                  label="Car Make" 
                  options={CAR_MAKES} 
                  value={carMake} 
                  onChange={setCarMake} 
                  icon={Car}
                />
                <Dropdown 
                  label="Car Type" 
                  options={CAR_TYPES} 
                  value={carType} 
                  onChange={setCarType} 
                  icon={Settings}
                />
                <Dropdown 
                  label="Condition" 
                  options={CAR_CONDITIONS} 
                  value={carCondition} 
                  onChange={setCarCondition} 
                  icon={Fuel}
                />
              </div>

              {/* Search + Button */}
              <div className="flex gap-3 flex-[1.5]">
                <div className="relative flex-1 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#FAC104] transition-colors" />
                  <input
                    type="text"
                    placeholder="Search model or brand..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full bg-white/95 backdrop-blur-sm text-[#0f172a] pl-11 pr-4 py-3.5 rounded-xl text-sm placeholder-gray-400 outline-none border border-transparent focus:border-[#FAC104]/50 shadow-sm transition-all"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-[#FAC104] text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-[#D4A203] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FAC104]/25 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#FAC104] to-transparent" />
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <Suspense fallback={<div className="h-[750px] bg-[#0f172a]" />}>
      <HeroContent />
    </Suspense>
  );
}
