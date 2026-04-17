'use client';

import Link from 'next/link';
import { MapPin, Bed, Bath, Home, CheckCircle } from 'lucide-react';
import { properties } from '@/lib/properties';

export default function HomePage() {
  const propertyList = Object.values(properties);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero with Logo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative flex items-center justify-center">
          <img src="/rks-logo.png" alt="RKS Properties Holdings" className="absolute left-0 h-48 opacity-90" />
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DFW Rental Properties
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Professionally managed rental properties throughout the Dallas-Fort Worth metroplex.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid — 8 cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyList.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.slug}`}
              className="group"
            >
              <div className="h-full bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Image area */}
                <div className="h-44 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden flex items-center justify-center">
                  <Home className="w-16 h-16 text-slate-600" />
                  {/* Occupancy badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    Occupied
                  </div>
                  {/* Type badge */}
                  <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded">
                    {property.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Address */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {property.address}
                  </h3>

                  {/* City prominent */}
                  <p className="text-blue-400 font-semibold text-base mb-1">
                    {property.city}, {property.state} {property.zip}
                  </p>

                  {/* LLC */}
                  <p className="text-slate-400 text-xs mb-3">
                    {property.llcName}
                  </p>

                  {/* Stats row */}
                  <div className="flex gap-3 mb-3 text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" /> {property.bedrooms} bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" /> {property.bathrooms} bath
                    </span>
                    {property.garage && (
                      <span className="text-slate-400">🚗 Garage</span>
                    )}
                  </div>

                  {/* Rent */}
                  <div className="bg-blue-600/15 border border-blue-600/25 rounded-lg p-3 mb-3">
                    <p className="text-xs text-blue-300 mb-0.5">Estimated Rent</p>
                    <p className="text-xl font-bold text-blue-400">
                      ${property.estimatedRent.toLocaleString()}/mo
                    </p>
                  </div>

                  {/* Lease end */}
                  {property.leaseEnd && (
                    <p className="text-xs text-slate-400">
                      Current Lease End: <span className="text-slate-300 font-medium">{property.leaseEnd}</span>
                    </p>
                  )}

                  <div className="mt-3 pt-3 border-t border-slate-700">
                    <span className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                      View Details →
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
