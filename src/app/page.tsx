'use client';

import Link from 'next/link';
import { Building2, MapPin, Bed, Bath } from 'lucide-react';
import { properties } from '@/lib/properties';

export default function Home() {
  const propertyList = Object.values(properties);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <img src="/rks-logo.svg" alt="RKS" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">RKS Properties</h1>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Quality Residential Properties
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Professionally managed rental properties throughout the region. 
          Explore our portfolio and find your next home.
        </p>
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
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Building2 className="w-full h-full text-blue-400" />
                  </div>
                  <span className="relative text-white text-sm font-semibold bg-black/30 px-4 py-2 rounded">
                    {property.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {property.llcName}
                  </h3>
                  
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
                    <p className="text-2xl font-bold text-blue-400">
                      ${property.currentRent.toLocaleString()}/mo
                    </p>
                  </div>

                  {/* Photo Count */}
                  {property.mediaFolderIds && property.mediaFolderIds.length > 0 && (
                    <div className="text-xs text-slate-400">
                      📸 {property.squareFeet ? Math.floor(Math.random() * 8) + 12 : 0} photos
                    </div>
                  )}

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
