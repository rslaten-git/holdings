'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Photo {
  id: string;
  name: string;
  thumbnailUrl: string;
  fullUrl: string;
}

export default function PropertyPhotos({ slug }: { slug: string }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch(`/api/photos?slug=${slug}`);
        const data = await response.json();
        setPhotos(data.photos || []);
      } catch (error) {
        console.error('Error loading photos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center">
        <p className="text-slate-400">Loading photos...</p>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center">
        <p className="text-slate-400">No photos available</p>
      </div>
    );
  }

  const currentPhoto = photos[selectedIndex];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6">Photo Gallery</h2>
      
      <div className="space-y-6">
        {/* Main Photo */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 aspect-video">
          <img
            src={currentPhoto.thumbnailUrl}
            alt={currentPhoto.name}
            className="w-full h-full object-cover"
          />
          {photos.length > 1 && (
            <>
              <button
                onClick={() => setSelectedIndex(prev => (prev - 1 + photos.length) % photos.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedIndex(prev => (prev + 1) % photos.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next photo"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {photos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setSelectedIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                  idx === selectedIndex
                    ? 'border-blue-500 ring-2 ring-blue-500/50'
                    : 'border-slate-600 hover:border-slate-500'
                }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Photo Count */}
        {photos.length > 1 && (
          <p className="text-sm text-slate-400 text-center">
            Photo {selectedIndex + 1} of {photos.length}
          </p>
        )}
      </div>
    </div>
  );
}
