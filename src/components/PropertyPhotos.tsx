'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
}

const PROPERTY_PHOTOS: Record<string, Photo[]> = {
  lillie1: [
    { src: '/photos/lillie1/1BQICXfTEKf3zxgzgZfmlSdarD5wSet5w_3513-lillie-st-sachse-tx-75048-High-Res-8.jpg', alt: 'Lillie Property 1' },
    { src: '/photos/lillie1/1oW5qRCNJikwPtEgJCcOYJ88fhd-Cf9cj_3513-lillie-st-sachse-tx-75048-High-Res-9.jpg', alt: 'Lillie Property 2' },
    { src: '/photos/lillie1/1S8Hj6KV2fPqvakhEx4T3yBjmQ7haFNX0_3513-lillie-st-sachse-tx-75048-High-Res-7.jpg', alt: 'Lillie Property 3' },
    { src: '/photos/lillie1/1_WJwd2Sd0tX2cqWjoC1ItJTjp0g-xrKw_3513-lillie-st-sachse-tx-75048-High-Res-10.jpg', alt: 'Lillie Property 4' },
    { src: '/photos/lillie1/1yZdVKJajDJH2FyniAH-4C9H4Gt3CQOpO_3513-lillie-st-sachse-tx-75048-High-Res-11.jpg', alt: 'Lillie Property 5' },
  ],
  wyndham1: [
    { src: '/photos/wyndham1/112nJVj6nYrMDHUAv7-VL8FMiLj8D8VkT_210-wyndham-boulevard-sachse-tx-75048-High-Res-3.jpg', alt: 'Wyndham Property 1' },
    { src: '/photos/wyndham1/16a5iD-DJbgZV2lKN5MrTvVYqRVZKMf1i_210-wyndham-boulevard-sachse-tx-75048-High-Res-10.jpg', alt: 'Wyndham Property 2' },
    { src: '/photos/wyndham1/1DIqHd5fY0_qlQXLH8Zzfqb9ydJSPPQsH_210-wyndham-boulevard-sachse-tx-75048-High-Res-1.jpg', alt: 'Wyndham Property 3' },
    { src: '/photos/wyndham1/1kqXYCJ7WN3EFJ5d7fNvFzF3e8_OjVR8F_210-wyndham-boulevard-sachse-tx-75048-High-Res-6.jpg', alt: 'Wyndham Property 4' },
  ],
  masters1: [],
  clinton1: [],
  pinetrail1: [],
};

export default function PropertyPhotos({ slug }: { slug: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const photos = PROPERTY_PHOTOS[slug] || [];

  if (!photos || photos.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center mb-12">
        <p className="text-slate-400">No photos available yet</p>
      </div>
    );
  }

  const currentPhoto = photos[selectedIndex];

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
            src={currentPhoto.src}
            alt={currentPhoto.alt}
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
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
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
                  src={photo.src}
                  alt={photo.alt}
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
