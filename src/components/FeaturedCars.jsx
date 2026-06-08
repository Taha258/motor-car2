import Link from 'next/link';
import Image from 'next/image';
import { clientFetch } from '@/src/sanity/lib/client';
import { featuredCarsQuery } from '@/src/sanity/lib/queries';
import { Fuel, Gauge, Settings, Zap, ArrowRight } from 'lucide-react';

function CarCard({ car }) {
  return (
    <div className="group relative bg-[#0f172a] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#31b56b]/30 transition-all duration-500 shadow-xl">
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-[#31b56b] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-[#31b56b]/20">
          Featured
        </span>
      </div>

      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        {car.mainImageUrl ? (
          <Image 
            src={car.mainImageUrl} 
            alt={car.name} 
            fill 
            className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <div className="space-y-1">
          <p className="text-[#31b56b] text-xs font-bold uppercase tracking-[0.2em]">
            {car.brand} • {car.year}
          </p>
          <h3 className="text-white text-2xl font-bold uppercase tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            {car.name}
          </h3>
        </div>

        {/* Mini Specs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
            <Gauge className="w-4 h-4 text-[#31b56b]" />
            <span className="text-white text-xs font-medium">{car.mileage || '0 KM'}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
            <Settings className="w-4 h-4 text-[#31b56b]" />
            <span className="text-white text-xs font-medium">{car.transmission || 'Auto'}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Price</span>
            <span className="text-white text-xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>
              {car.price}
            </span>
          </div>
          <Link 
            href={`/car/${car.slug.current}`} 
            className="w-12 h-12 bg-[#31b56b] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function FeaturedCars() {
  const cars = await clientFetch(featuredCarsQuery);

  if (!cars || cars.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#31b56b] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#31b56b]" />
              Luxury Selection
            </div>
            <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31b56b] to-[#4ade80]">Vehicles</span>
            </h2>
          </div>
          <Link 
            href="/showroom" 
            className="group flex items-center gap-3 text-[#0f172a] font-bold text-sm uppercase tracking-widest hover:text-[#31b56b] transition-colors"
          >
            Explore Full Showroom
            <div className="w-10 h-10 rounded-full border border-[#0f172a]/20 flex items-center justify-center group-hover:border-[#31b56b] group-hover:bg-[#31b56b]/10 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, 6).map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}