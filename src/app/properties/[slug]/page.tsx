'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { properties } from '@/lib/properties';
import { Building2, MapPin, Bed, Bath, Car, Calendar, Ruler, CheckCircle } from 'lucide-react';
import PropertyPhotos from '@/components/PropertyPhotos';

export default function PropertyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const property = slug ? properties[slug] : null;

  if (!property) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Property Not Found</h1>
          <Link href="/" className="text-[#C5A55A] hover:text-[#D4B96A] font-semibold">
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#C5A55A]/20 bg-[#0a0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src="/rks-logo.png" alt="RKS Properties Holdings" className="h-10" />
          </Link>
          <Link href="/" className="text-[#C5A55A] hover:text-[#D4B96A] transition-colors text-xs tracking-widest uppercase font-semibold">
            ← All Properties
          </Link>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="w-full h-72 md:h-[480px] relative overflow-hidden">
        <img
          src={property.thumbnail}
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#C5A55A] text-xs tracking-[0.3em] uppercase mb-2 font-light">
              {property.type} · {property.city}, {property.state}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-2xl">
              {property.address}
            </h1>
            <p className="text-[#888] text-sm mt-2">{property.zip} · {property.llcName}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {[
            { icon: <Bed className="w-5 h-5" />, value: property.bedrooms, label: 'Bedrooms' },
            { icon: <Bath className="w-5 h-5" />, value: property.bathrooms, label: 'Bathrooms' },
            { icon: <Ruler className="w-5 h-5" />, value: property.squareFeet.toLocaleString(), label: 'Sq Ft' },
            { icon: <Car className="w-5 h-5" />, value: property.parking, label: 'Parking' },
            { icon: <Calendar className="w-5 h-5" />, value: property.yearBuilt, label: 'Year Built' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#111] border border-[#222] rounded-xl p-5 text-center hover:border-[#C5A55A]/40 transition-colors">
              <div className="text-[#C5A55A] flex justify-center mb-2">{stat.icon}</div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[#555] text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lease info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#111] border border-[#222] rounded-xl p-6">
            <h3 className="text-[#C5A55A] font-semibold text-sm tracking-widest uppercase mb-4">Property Details</h3>
            <div className="space-y-3">
              {[
                { label: 'Type', value: property.type },
                { label: 'Square Footage', value: `${property.squareFeet.toLocaleString()} sq ft` },
                { label: 'Parking', value: property.parking },
                { label: 'Year Built', value: property.yearBuilt },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-[#1a1a1a] last:border-0">
                  <span className="text-[#666] text-sm">{item.label}</span>
                  <span className="text-white text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] rounded-xl p-6">
            <h3 className="text-[#C5A55A] font-semibold text-sm tracking-widest uppercase mb-4">Lease Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5A55A]" />
                <span className="text-white font-semibold">Currently Occupied</span>
              </div>
              <div>
                <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Estimated Rent</p>
                <p className="text-4xl font-bold text-[#C5A55A]">
                  ${property.estimatedRent.toLocaleString()}
                  <span className="text-lg font-normal text-[#666]">/mo</span>
                </p>
              </div>
              {property.leaseEnd && (
                <div>
                  <p className="text-[#666] text-xs tracking-widest uppercase mb-1">Current Lease End</p>
                  <p className="text-white font-semibold">{property.leaseEnd}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <PropertyPhotos photos={property.photos} />

        {/* Virtual Tours */}
        {property.matterports && property.matterports.length > 0 && (
          <div className="mb-12">
            <h2 className="text-white font-bold text-2xl tracking-wide mb-2">Virtual Tour</h2>
            <div className="gold-divider mb-6" />
            <div className="grid grid-cols-1 gap-6">
              {property.matterports.map((url, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-[#C5A55A]/20 bg-[#111] aspect-video">
                  <iframe width="100%" height="100%" src={url} frameBorder="0" allowFullScreen loading="lazy" title={`Virtual tour ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#9E7E3A] via-[#C5A55A] to-[#9E7E3A]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzlCI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <div className="relative px-10 py-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-2 tracking-wide">Interested in this property?</h3>
            <p className="text-black/70 mb-6">Contact us to discuss lease terms and availability</p>
            <a
              href={`mailto:${property.email}`}
              className="inline-block bg-black text-[#C5A55A] font-bold px-8 py-3 rounded-lg tracking-widest uppercase text-sm hover:bg-[#111] transition-colors"
            >
              {property.email}
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
