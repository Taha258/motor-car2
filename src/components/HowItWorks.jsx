// src\components\HowItWorks.jsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: '/images/6732899e5c80c65a5fdcf83b_car.svg',
    title: 'Select Your Ride',
    description: 'Browse our world-class inventory and find the vehicle that matches your ambitions.',
  },
  {
    icon: '/images/67328b7e87eee52830b9bf6b_enquiry.svg',
    title: 'Consult Experts',
    description: 'Connect with our specialists for a personalized walkthrough and performance data.',
  },
  {
    icon: '/images/67328b19535bef838e4f29d4_paperwork.svg',
    title: 'Seamless Access',
    description: 'Experience a streamlined documentation process handled entirely by our legal team.',
  },
  {
    icon: '/images/6732899e086419eea40646f9_steering-wheel.svg',
    title: 'Performance Delivery',
    description: 'Take command of your next adventure with our white-glove delivery service.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-[#dedede] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
                <div className="w-8 h-px bg-[#FAC104]" />
                Process
              </div>
              <h2
                className="text-[#0f172a] text-2xl md:text-3xl font-bold uppercase tracking-wide"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                THE EASIEST WAY TO <br />
                <span className="text-[#FAC104]">COMMAND THE ROAD</span>
              </h2>
            </div>
            
            <p
              className="text-gray-500 text-base font-medium leading-relaxed max-w-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We&apos;ve refined the acquisition process down to four simple, luxurious steps. Your time is valuable; we ensure every minute counts.
            </p>

            <div className="space-y-3 pt-2">
              {['White-glove service', 'Transparent pricing', 'Worldwide delivery'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FAC104]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-[#FAC104]" />
                  </div>
                  <span className="text-[#0f172a] text-sm font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            {/* === BUTTON: #FAC104 GOLD === */}
            <Link
              href="/showroom"
              className="inline-flex items-center gap-3 bg-[#FAC104] text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-[#D4A203] transition-all shadow-lg active:scale-95"
            >
              GET STARTED NOW
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAC104]/5 to-transparent rounded-[2rem] -m-4" />
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#FAC104]/30 transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FAC104]/10 transition-colors">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3
                  className="text-[#0f172a] text-base font-bold mb-2 tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-400 text-xs leading-relaxed font-medium"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {step.description}
                </p>
                
                <div className="absolute top-6 right-6 text-[#0f172a]/5 text-4xl font-black italic">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}