'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getProperty, getRentEstimate } from '@/lib/properties';
import { Building2, Calendar, MapPin, Ruler, Bed, Bath, Car } from 'lucide-react';

export default function PropertyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const property = slug ? getProperty(slug) : null;

  if (!property) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  const rentEstimate = getRentEstimate(property.currentRent);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Properties
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {property.llcName}
        </h1>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-5 h-5" />
          <span className="text-lg">{property.address}</span>
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Year Built</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{property.yearBuilt}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Ruler className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Square Feet</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{property.squareFeet.toLocaleString()}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Property Type</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{property.type}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600 font-bold">$</span>
              <span className="text-sm text-gray-600">Rent Estimate</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">${rentEstimate.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">5% above current</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <Bed className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Bedrooms</p>
              <p className="text-xl font-bold text-gray-900">{property.bedrooms}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <Bath className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Bathrooms</p>
              <p className="text-xl font-bold text-gray-900">{property.bathrooms}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <Car className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-sm text-gray-600">Garage</p>
              <p className="text-xl font-bold text-gray-900">
                {property.garage ? 'Yes' : 'No'}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="mb-8 p-4 rounded-lg border-2 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Lease Status</p>
              <p className="text-lg font-bold text-gray-900 capitalize">
                {property.leaseStatus === 'leased' ? '✓ Leased' : 'Available'}
              </p>
            </div>
            {property.leaseDate && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Since</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(property.leaseDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short'
                  })}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Matterports */}
        {property.matterports && property.matterports.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Virtual Tour</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.matterports.map((url, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    width="100%"
                    height="400"
                    src={url}
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Interested in this property?
        </h3>
        <p className="text-gray-600 mb-6">
          Contact us for more information about lease terms and availability
        </p>
        <a
          href={`mailto:${property.email}`}
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact {property.llcName}
        </a>
      </div>
    </main>
  );
}
