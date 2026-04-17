'use client';

import Link from 'next/link';
import { MapPin, Bed, Bath, Car } from 'lucide-react';
import { properties } from '@/lib/properties';

export default function HomePage() {
  const propertyList = Object.values(properties);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero */}
      <section className="hero-pattern border-b border-[#C5A55A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative flex items-center justify-center">
            {/* Logo floats left */}
            <img
              src="/rks-logo.png"
              alt="RKS Properties Holdings"
              className="absolute left-0 h-44 opacity-95 hidden lg:block"
            />
            {/* Centered text */}
            <div className="text-center">
              <p className="text-[#C5A55A] text-sm tracking-[0.3em] uppercase mb-4 font-light">
                Dallas · Fort Worth Metroplex
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4" style={{letterSpacing: '0.05em'}}>
                <span className="gold-text">Premium</span>{" "}
                <span className="text-white">Rental Properties</span>
              </h1>
              <div className="gold-divider max-w-xs mx-auto mb-6" />
              <p className="text-[#aaa] text-lg max-w-xl mx-auto font-light tracking-wide">
                Professionally managed residential properties across the DFW metroplex
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyList.map((property) => (
            <Link key={property.id} href={`/properties/${property.slug}`} className="group">
              <div className="card-gold h-full bg-[#111] rounded-xl border border-[#333] transition-all duration-300 overflow-hidden">
                {/* Photo */}
                <div className="h-48 relative overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={property.thumbnail}
                    alt={property.address}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Occupied badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0a0a0a]/80 border border-[#C5A55A]/60 text-[#C5A55A] text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A55A] inline-block" />
                    Occupied
                  </div>
                  {/* Type badge */}
                  <div className="absolute bottom-3 left-3 bg-[#0a0a0a]/70 text-[#aaa] text-xs px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                    {property.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#C5A55A] transition-colors tracking-wide">
                    {property.address}
                  </h3>
                  <p className="text-[#C5A55A] font-semibold text-sm mb-1 tracking-wider uppercase">
                    {property.city}, {property.state}
                  </p>
                  <p className="text-[#555] text-xs mb-4 truncate">{property.llcName}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-[#888]">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5" /> {property.bedrooms} bd
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5" /> {property.bathrooms} ba
                    </span>
                    <span className="flex items-center gap-1">
                      <Car className="w-3.5 h-3.5" /> {property.parking}
                    </span>
                  </div>

                  {/* Rent */}
                  <div className="border border-[#C5A55A]/25 bg-[#C5A55A]/5 rounded-lg p-3 mb-3">
                    <p className="text-[#C5A55A]/70 text-xs mb-0.5 tracking-widest uppercase">Estimated Rent</p>
                    <p className="text-2xl font-bold text-[#C5A55A]">
                      ${property.estimatedRent.toLocaleString()}<span className="text-sm font-normal text-[#888]">/mo</span>
                    </p>
                  </div>

                  {/* Lease */}
                  {property.leaseEnd && (
                    <p className="text-xs text-[#555]">
                      Lease ends: <span className="text-[#888]">{property.leaseEnd}</span>
                    </p>
                  )}

                  <div className="mt-4 pt-4 border-t border-[#222]">
                    <span className="text-[#C5A55A] text-xs font-semibold tracking-widest uppercase group-hover:text-[#D4B96A] transition-colors">
                      View Property →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
