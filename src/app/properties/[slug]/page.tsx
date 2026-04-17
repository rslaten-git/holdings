'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProperty } from '@/lib/properties';
import { Building2, Calendar, MapPin, Ruler, Bed, Bath, Car, Home } from 'lucide-react';
import PropertyPhotos from '@/components/PropertyPhotos';

export default function PropertyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const property = slug ? getProperty(slug) : null;

  if (!property) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Property Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold">
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">RKS Properties</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Properties
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {property.llcName}
          </h1>
          <div className="flex items-center gap-2 text-blue-300 text-lg mb-2">
            <MapPin className="w-6 h-6" />
            <span>{property.address}</span>
          </div>
          <p className="text-slate-400 text-lg">Built {property.yearBuilt}</p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Bedrooms</p>
            <p className="text-4xl font-bold text-white">{property.bedrooms}</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Bathrooms</p>
            <p className="text-4xl font-bold text-white">{property.bathrooms}</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Square Feet</p>
            <p className="text-4xl font-bold text-white">{property.squareFeet.toLocaleString()}</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <p className="text-slate-400 text-sm mb-2">Property Type</p>
            <p className="text-4xl font-bold text-blue-400">{property.type === 'Duplex' ? '2x' : '1'}</p>
            <p className="text-slate-300 text-sm">{property.type}</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Home className="w-5 h-5 text-blue-400" />
                <span>{property.type}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>Built {property.yearBuilt}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Car className="w-5 h-5 text-blue-400" />
                <span>{property.garage ? 'Garage included' : 'No garage'}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">Lease Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm mb-1">Status</p>
                <p className="text-white font-semibold">Leased</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Current Rent</p>
                <p className="text-3xl font-bold text-blue-400">
                  ${property.currentRent.toLocaleString()}/mo
                </p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Lease Ends</p>
                <p className="text-white font-semibold">
                  {new Date(property.leaseDate || '').toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <PropertyPhotos slug={property.slug} />

        {/* Virtual Tours */}
        {property.matterports && property.matterports.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Virtual Tours</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {property.matterports.map((url, idx) => (
                <div 
                  key={idx} 
                  className="rounded-xl overflow-hidden border border-slate-700 bg-slate-800 aspect-video"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src={url}
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    title={`Virtual tour ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            Interested in this property?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Contact us to discuss lease terms and availability
          </p>
          <a
            href={`mailto:${property.email}`}
            className="text-blue-100 text-lg font-semibold hover:text-white transition-colors underline decoration-2 underline-offset-4"
          >
            {property.email}
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400 text-sm">
          <p>RKS Properties © 2026 | info@rksproperties.io</p>
        </div>
      </footer>
    </main>
  );
}
