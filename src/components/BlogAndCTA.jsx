import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/src/lib/blogData';

export default function BlogAndCTA() {
  const displayPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-24 px-4 bg-[#f1f5f9]">
      <div className="max-w-7xl mx-auto">
        
        {/* Blog Posts Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FAC104] font-bold text-xs uppercase tracking-[0.2em]">
              <div className="w-8 h-px bg-[#FAC104]" />
              Latest Updates
            </div>
            <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC104] to-[#FBDB5C]">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-3 text-[#0f172a] font-bold text-sm uppercase tracking-widest hover:text-[#FAC104] transition-colors"
          >
            Show All Articles
            <div className="w-10 h-10 rounded-full border border-[#0f172a]/20 flex items-center justify-center group-hover:border-[#FAC104] group-hover:bg-[#FAC104]/10 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              {/* Image with Category Badge */}
              <div className="relative h-56 rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0f172a] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-[#0f172a] text-[10px] font-bold uppercase tracking-widest mb-3">
                <div className="flex items-center gap-2">
                  {post.authorImage && (
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[#FAC104]/30">
                      <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                    </div>
                  )}
                  <span className="opacity-70">{post.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#FAC104]" />
                <span className="opacity-70">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3
                className="text-[#0f172a] text-lg font-bold leading-tight mb-4 group-hover:text-[#FAC104] transition-colors line-clamp-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {post.title}
              </h3>

              {/* Read Post */}
              <div className="flex items-center gap-2 text-[#FAC104] text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                Read Article
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section - Professional VIP Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card - Dark VIP */}
          <div className="group relative bg-[#0f172a] rounded-[3rem] p-10 md:p-14 overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAC104]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2
                className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6 leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                CHOOSE YOUR <br />
                <span className="text-[#FAC104]">DREAM RIDE</span>
              </h2>
              <p
                className="text-gray-400 text-base leading-relaxed mb-10 max-w-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Browse our exclusive collection of world-class vehicles and find the one that fits your lifestyle.
              </p>
              <Link
                href="/showroom"
                className="inline-flex items-center gap-3 bg-[#FAC104] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-[#D4A203] transition-all shadow-lg shadow-[#FAC104]/20 active:scale-95"
              >
                BROWSE INVENTORY
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Card - Light VIP */}
          <div className="group relative bg-white rounded-[3rem] p-10 md:p-14 overflow-hidden border border-gray-100 shadow-xl">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h2
                className="text-[#0f172a] text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6 leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                UNABLE TO FIND <br />
                <span className="text-[#FAC104]">YOUR CAR?</span>
              </h2>
              <p
                className="text-gray-600 text-base leading-relaxed mb-10 max-w-sm"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Special requests? Our team can help you source the exact model you are looking for.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 bg-[#0f172a] text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-[#1e293b] transition-all shadow-lg shadow-[#0f172a]/20 active:scale-95"
              >
                SEND ENQUIRY
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
