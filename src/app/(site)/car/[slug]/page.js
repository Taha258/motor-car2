import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { clientFetch } from '@/src/sanity/lib/client';
import { carBySlugQuery, allCarSlugsQuery } from '@/src/sanity/lib/queries';
import CarGallery from '@/src/components/CarGallery';
import {
  ArrowLeft, Phone, Mail, MessageSquare, CheckCircle2,
  Bluetooth, Navigation, Smartphone, Camera,
  Volume2, Lightbulb, Armchair, Shield, Gauge, Fuel, Zap, Settings, Calendar, Palette, Hash
} from 'lucide-react';

export async function generateStaticParams() {
  const slugs = await clientFetch(allCarSlugsQuery);
  return slugs.map((item) => ({ slug: item.slug }));
}

const featureIconMap = {
  'bluetooth':      Bluetooth,
  'built-in gps':   Navigation,
  'gps':            Navigation,
  'wireless qi':    Smartphone,
  'wireless':       Smartphone,
  '360° camera':    Camera,
  'camera':         Camera,
  'sound system':   Volume2,
  'led headlight':  Lightbulb,
  'leather seats':  Armchair,
  'security':       Shield,
};

function getFeatureIcon(featureName) {
  const key = featureName.toLowerCase();
  for (const [match, Icon] of Object.entries(featureIconMap)) {
    if (key.includes(match)) return Icon;
  }
  return CheckCircle2;
}

export default async function CarDetailPage({ params }) {
  const car = await clientFetch(carBySlugQuery, { slug: params.slug });
  if (!car) notFound();

  const allImages = [car.mainImageUrl, ...(car.galleryUrls || [])].filter(Boolean);

  const specs = [
    { icon: Gauge, label: 'Mileage', value: car.mileage },
    { icon: Zap, label: 'Engine', value: car.engine },
    { icon: Fuel, label: 'Fuel Type', value: car.fuel },
    { icon: Settings, label: 'Transmission', value: car.transmission },
    { icon: Calendar, label: 'Year', value: car.year },
    { icon: Palette, label: 'Body Color', value: car.bodyColor },
    { icon: Hash, label: 'Stock ID', value: car.stockId },
    { icon: Shield, label: 'Horsepower', value: car.horsepower },
  ];

  return (
    <main className="min-h-screen bg-[#dedede] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb / Back Link */}
        <Link
          href="/showroom"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FAC104] transition-all text-xs font-bold uppercase tracking-[0.2em] mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Inventory
        </Link>

        {/* Main Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2">
            <p className="text-[#FAC104] font-bold text-xs uppercase tracking-[0.3em]">
              {car.brand} • {car.carType}
            </p>
            <h1 className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
              {car.name}
            </h1>
          </div>
          <div className="bg-[#0f172a] text-white px-6 py-4 rounded-xl shadow-2xl">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Asking Price</p>
            <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{car.price}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: MEDIA & DESCRIPTION (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            <CarGallery images={allImages} carName={car.name} />

            {/* Overview Card */}
            {car.overview && (
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-50">
                <h2 className="text-[#0f172a] text-xl font-bold uppercase mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Overview
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {car.overview}
                </p>
              </div>
            )}

            {/* Features Tags */}
            {car.features && (
              <div className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-50">
                <h2 className="text-[#0f172a] text-xl font-bold uppercase mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Key Features
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {car.features.map((feature) => {
                    const Icon = getFeatureIcon(feature);
                    return (
                      <div key={feature} className="flex flex-col items-center gap-3 p-4 bg-[#f8f9fa] rounded-xl border border-gray-100 hover:border-[#FAC104]/30 transition-all">
                        <Icon className="w-5 h-5 text-[#FAC104]" />
                        <span className="text-[#0f172a] text-[10px] font-bold uppercase text-center tracking-widest">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: SPECS & CONTACT (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Specs Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-50">
              <h2 className="text-[#0f172a] text-sm font-bold uppercase tracking-widest mb-6 text-center" style={{ fontFamily: 'Syne, sans-serif' }}>
                Technical Specs
              </h2>
              <div className="space-y-3">
                {specs.map((spec, i) => (
                  spec.value ? (
                    <div key={i} className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-xl border border-gray-50">
                      <div className="flex items-center gap-3">
                        <spec.icon className="w-4 h-4 text-[#FAC104]" />
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">{spec.label}</span>
                      </div>
                      <span className="text-[#0f172a] text-xs font-bold">{spec.value}</span>
                    </div>
                  ) : null
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#0f172a] rounded-xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAC104]/10 rounded-full blur-3xl" />
              <h2 className="text-white text-lg font-bold uppercase mb-6 relative z-10" style={{ fontFamily: 'Syne, sans-serif' }}>
                Secure This Ride
              </h2>
              <div className="space-y-3 relative z-10">
                <button className="w-full bg-[#FAC104] hover:bg-[#D4A203] text-white py-3 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-[#FAC104]/20">
                  <Phone className="w-4 h-4" /> Call Agent
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl flex items-center justify-center gap-3 font-bold transition-all border border-white/5">
                  <Mail className="w-4 h-4" /> Send Email
                </button>
                <Link href="/contact-us" className="w-full bg-white text-[#0f172a] py-3 rounded-xl flex items-center justify-center gap-3 font-bold transition-all hover:bg-gray-100 block text-center">
                  <MessageSquare className="w-4 h-4" /> Book Viewing
                </Link>
              </div>
            </div>

            {/* Extra Benefits */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-50">
              <h2 className="text-[#0f172a] text-xs font-bold uppercase tracking-[0.2em] mb-4 text-center">Included Benefits</h2>
              <div className="space-y-3">
                {['Global Warranty', 'Custom Financing', 'Vehicle Insurance', 'Roadside Assist'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-[#f8f9fa] p-3 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-[#FAC104]" />
                    <span className="text-[#0f172a] text-[10px] font-bold uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}