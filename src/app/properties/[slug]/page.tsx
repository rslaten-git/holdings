'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { properties } from '@/lib/properties';
import { Building2, MapPin, Bed, Bath, Car, Home, CheckCircle, Ruler, Calendar } from 'lucide-react';
import PropertyPhotos from '@/components/PropertyPhotos';

export default function PropertyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const property = slug ? properties[slug] : null;

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
      <header className="border-b border-slate-700 bg-slate-900/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/rks-logo.png" alt="RKS Properties Holdings" className="h-10" />
          </Link>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
            ← All Properties
          </Link>
        </nav>
      </header>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 relative overflow-hidden">
        <img
          src={property.thumbnail}
          alt={property.address}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              {property.address}
            </h1>
            <p className="text-blue-300 text-xl font-semibold drop-shadow-lg">
              {property.city}, {property.state} {property.zip}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* LLC name */}
        <p className="text-slate-400 text-sm mb-8">{property.llcName}</p>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-center">
            <Bed className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{property.bedrooms}</p>
            <p className="text-slate-400 text-xs">Bedrooms</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-center">
            <Bath className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{property.bathrooms}</p>
            <p className="text-slate-400 text-xs">Bathrooms</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-center">
            <Ruler className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{property.squareFeet.toLocaleString()}</p>
            <p className="text-slate-400 text-xs">Sq Ft</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-center">
            <Car className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{property.parking}</p>
            <p className="text-slate-400 text-xs">Parking</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 text-center">
            <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{property.yearBuilt}</p>
            <p className="text-slate-400 text-xs">Year Built</p>
          </div>
        </div>

        {/* Lease Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">Property Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Home className="w-5 h-5 text-blue-400" />
                <span>{property.type}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>{property.squareFeet.toLocaleString()} sq ft</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Car className="w-5 h-5 text-blue-400" />
                <span>{property.parking}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>Built {property.yearBuilt}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">Lease Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-slate-400 text-sm mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-semibold capitalize">{property.leaseStatus}</p>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Estimated Rent</p>
                <p className="text-3xl font-bold text-blue-400">
                  ${property.estimatedRent.toLocaleString()}/mo
                </p>
              </div>
              {property.leaseEnd && (
                <div>
                  <p className="text-slate-400 text-sm mb-1">Current Lease End</p>
                  <p className="text-white font-semibold">{property.leaseEnd}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <PropertyPhotos slug={property.slug} />

        {/* Virtual Tours */}
        {property.matterports && property.matterports.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Virtual Tour</h2>
            <div className="grid grid-cols-1 gap-6">
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
    </main>
  );
}
