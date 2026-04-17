'use client';

import Link from 'next/link';

const properties = [
  { id: 'lillie', name: 'Lillie 1 LLC', slug: 'lillie1' },
  { id: 'masters', name: 'Masters 1 LLC', slug: 'masters1' },
  { id: 'clinton', name: 'Clinton I LLC', slug: 'clinton1' },
  { id: 'wyndham', name: 'Wyndham Meadows 1 LLC', slug: 'wyndham1' },
  { id: 'pinetrail', name: 'Pine Trail 1 LLC', slug: 'pinetrail1' },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Properties</h2>
        <p className="text-xl text-gray-600">
          Residential properties across the portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/properties/${property.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 flex items-center justify-center">
                <span className="text-white text-4xl font-bold opacity-20">
                  {property.name.split(' ')[0]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Click to view details, photos, and floor plans
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800">
                  View Property →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-lg shadow p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
        <p className="text-gray-700 mb-6">
          For inquiries about specific properties or general questions about our portfolio:
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Property-Specific Inquiries</h4>
            <p className="text-gray-600 text-sm">Each property has its own contact email listed on the property details page.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
            <p className="text-gray-600 text-sm">
              <a href="mailto:info@rksproperties.io" className="text-blue-600 hover:underline font-medium">
                info@rksproperties.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
