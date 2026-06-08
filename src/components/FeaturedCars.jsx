// src/components/FeaturedCars.jsx
import Link from 'next/link';
import Image from 'next/image';
import { clientFetch } from '@/src/sanity/lib/client';
import { featuredCarsQuery } from '@/src/sanity/lib/queries';
import { ArrowRight } from 'lucide-react';

function CarCard({ car }) {
  return (
    <Link href={`/car/${car.slug.current}`} className="group block bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 hover:border-[#FAC104]/30 transition-all duration-500">
      {/* Brand Logo + Name */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        {car.brandLogoUrl ? (
          <Image src={car.brandLogoUrl} alt={car.brand} width={40} height={40} className="rounded-lg object-contain" />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center">
            <span className="text-white text-xs font-bold">{car.brand?.[0]}</span>
          </div>
        )}
        <div>
          <h3 className="text-white text-base font-bold leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            {car.name}
          </h3>
          <p className="text-gray-400 text-xs">{car.year} • {car.carType} • {car.condition}</p>
        </div>
      </div>

      {/* Car Image */}
      <div className="relative h-48 mx-4 rounded-lg overflow-hidden">
        {car.mainImageUrl ? (
          <Image src={car.mainImageUrl} alt={car.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Specs */}
      <div className="mx-4 mt-3 bg-[#1e293b] rounded-lg p-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: '/images/67222a63d64f86825005a64d_mileage.svg', label: 'Mileage', value: car.mileage },
            { icon: '/images/67222a63306d244ceda1759e_engine.svg', label: 'Engine', value: car.engine },
            { icon: '/images/67222a6379b17d04a7c4bd02_fuel-type.svg', label: 'Fuel', value: car.fuel },
            { icon: '/images/67222a637ccaaffb8230978c_transmission.svg', label: 'Transmission', value: car.transmission },
          ].map((spec) => (
            <div key={spec.label} className="flex flex-col items-center gap-1">
              <Image src={spec.icon} alt={spec.label} width={20} height={20} />
              <span className="text-gray-400 text-xs">{spec.value || '—'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="px-4 pt-3 pb-2">
        <span className="text-white text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{car.price}</span>
      </div>

      {/* Button — #FAC104 GOLD */}
      <div className="px-4 pb-4">
        <span className="block w-full bg-[#FAC104] text-white text-sm font-semibold text-center py-3 rounded-lg group-hover:bg-[#D4A203] transition-colors">
          SEE DETAILS
        </span>
      </div>
    </Link>
  );
}

export default async function FeaturedCars({ searchParams }) {
  const make      = searchParams?.make      || '';
  const type      = searchParams?.type      || '';
  const condition = searchParams?.condition || '';
  const query     = searchParams?.q         || '';

  const allCars = await clientFetch(featuredCarsQuery);

  const filtered = allCars.filter((car) => {
    const matchMake      = !make      || car.brand?.toLowerCase()   === make.toLowerCase();
    const matchType      = !type      || car.carType?.toLowerCase() === type.toLowerCase();
    const matchCondition = !condition || car.condition?.toLowerCase() === condition.toLowerCase();
    const matchQuery     = !query
      || car.name?.toLowerCase().includes(query.toLowerCase())
      || car.brand?.toLowerCase().includes(query.toLowerCase());

    return matchMake && matchType && matchCondition && matchQuery;
  });

  const activeFilters = [
    make      && `Make: ${make}`,
    type      && `Type: ${type}`,
    condition && `Condition: ${condition}`,
    query     && `Search: "${query}"`,
  ].filter(Boolean);

  if (!allCars || allCars.length === 0) return null;

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#dedede' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#0f172a] text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
            {activeFilters.length > 0 ? 'FILTERED CARS' : 'FEATURED CARS'}
          </h2>
          <span className="text-gray-500 text-sm">{filtered.length} car{filtered.length !== 1 ? 's' : ''} found</span>
        </div>

        {/* Active filter tags — #FAC104 GOLD */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {activeFilters.map((f) => (
              <span key={f} className="bg-[#FAC104]/20 text-[#FAC104] text-xs font-medium px-3 py-1 rounded-full">
                {f}
              </span>
            ))}
            <Link href="/showroom" className="bg-gray-300 text-gray-600 text-xs font-medium px-3 py-1 rounded-full hover:bg-gray-400 transition-colors">
              ✕ Clear all
            </Link>
          </div>
        )}

        {/* No results — #FAC104 GOLD */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-2">Koi car nahi mili</p>
            <p className="text-gray-400 text-sm mb-6">Filter change karein ya search clear karein</p>
            <Link href="/showroom" className="bg-[#FAC104] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#D4A203] transition-colors">
              Sab Cars Dekhein
            </Link>
          </div>
        )}

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, 6).map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}