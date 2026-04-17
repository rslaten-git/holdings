'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyPhotosProps {
  photos: string[];
}

export default function PropertyPhotos({ photos }: PropertyPhotosProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!photos || photos.length === 0) {
    return null;
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-6">Photo Gallery</h2>

      <div className="space-y-6">
        {/* Main Photo */}
        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 aspect-video">
          <img
            src={photos[selectedIndex]}
            alt={`Property photo ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                  idx === selectedIndex
                    ? 'border-blue-500 ring-2 ring-blue-500/50'
                    : 'border-slate-600 hover:border-slate-500'
                }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${idx + 1}`}
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
