'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyPhotosProps {
  photos: string[];
}

export default function PropertyPhotos({ photos }: PropertyPhotosProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!photos || photos.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-white font-bold text-2xl tracking-wide mb-2">Photo Gallery</h2>
      <div className="gold-divider mb-6" />

      <div className="space-y-4">
        {/* Main Photo */}
        <div className="relative rounded-xl overflow-hidden border border-[#C5A55A]/20 bg-[#111] aspect-video">
          <img
            src={photos[selectedIndex]}
            alt={`Property photo ${selectedIndex + 1}`}
            className="w-full h-full object-cover"
          />
          {photos.length > 1 && (
            <>
              <button
                onClick={() => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 border border-[#C5A55A]/40 text-[#C5A55A] p-2 rounded-full hover:bg-black/80 transition-all z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedIndex((prev) => (prev + 1) % photos.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 border border-[#C5A55A]/40 text-[#C5A55A] p-2 rounded-full hover:bg-black/80 transition-all z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 right-4 bg-black/60 text-[#C5A55A] text-xs px-3 py-1 rounded-full border border-[#C5A55A]/30">
                {selectedIndex + 1} / {photos.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {photos.length > 1 && (
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {photos.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                  idx === selectedIndex
                    ? 'border-[#C5A55A] ring-1 ring-[#C5A55A]/50'
                    : 'border-[#333] hover:border-[#C5A55A]/50 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
