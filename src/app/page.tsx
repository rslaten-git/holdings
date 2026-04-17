'use client';

import Link from 'next/link';
import { Building2, MapPin, Bed, Bath } from 'lucide-react';
import { properties } from '@/lib/properties';

export default function Home() {
  const propertyList = Object.values(properties);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero with Logo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative flex items-center justify-center">
          {/* Logo - absolute positioned to the left, large */}
          <img src="/rks-logo.png" alt="RKS Properties Holdings" className="absolute left-0 h-48 opacity-90" />
          
          {/* Centered text */}
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DFW Rental Properties
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Professionally managed rental properties throughout the region. 
              Explore our portfolio and find your next home.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyList.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.slug}`}
              className="group"
            >
              <div className="h-full bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden">
                  {/* Try to load first photo if available */}
                  <img
                    src={`/api/photos-list?slug=${property.slug}`}
                    alt={property.llcName}
                    className="hidden"
                    onLoad={() => {
                      // Will load actual photo via separate fetch
                    }}
                  />
                  {/* Fallback: show property type badge over gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20"></div>
                  <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ✓ Occupied
                  </div>
                  <span className="relative text-white text-sm font-semibold bg-black/30 px-4 py-2 rounded">
                    {property.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {property.llcName}
                  </h3>
                  
                  <div className="text-lg font-bold text-blue-400 mb-3">
                    {property.city}
                  </div>
                  
                  <div className="flex items-start gap-2 text-slate-300 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{property.address}</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex gap-4 mb-4 text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} bath</span>
                    </div>
                  </div>

                  {/* Rent */}
                  <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-3 mb-4">
                    <p className="text-xs text-blue-300 mb-1">Estimated Rent</p>
                    {property.type === 'Duplex' ? (
                      <p className="text-sm font-bold text-blue-400">
                        ${Math.round(property.currentRent / 2).toLocaleString()}/mo per unit
                      </p>
                    ) : (
                      <p className="text-2xl font-bold text-blue-400">
                        ${property.currentRent.toLocaleString()}/mo
                      </p>
                    )}
                  </div>



                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <button className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                      View Details →
                    </button>
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
