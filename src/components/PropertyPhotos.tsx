'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
}

export default function PropertyPhotos({ slug }: { slug: string }) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically load photos from public folder
    const loadPhotos = async () => {
      try {
        // Import all photos from the property folder
        const photoModules = import.meta.glob('/public/photos/*/*.jpg', {
          eager: false,
          import: 'default'
        });

        const propertyPhotos: Photo[] = [];
        
        for (const [path] of Object.entries(photoModules)) {
          if (path.includes(`/public/photos/${slug}/`)) {
            const filename = path.split('/').pop() || '';
            propertyPhotos.push({
              src: `/photos/${slug}/${filename}`,
              alt: `${slug} photo`
            });
          }
        }

        // Sort by filename for consistent order
        propertyPhotos.sort((a, b) => a.src.localeCompare(b.src));
        setPhotos(propertyPhotos);
      } catch (error) {
        console.error('Error loading photos:', error);
      } finally {
        setLoading(false);
      }
    };

    // For now, use a simpler approach - fetch image list
    const fetchPhotoList = async () => {
      try {
        const response = await fetch(`/api/photos-list?slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos || []);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoList();
  }, [slug]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (loading) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center mb-12">
        <p className="text-slate-400">Loading photos...</p>
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 text-center mb-12">
        <p className="text-slate-400">No photos available yet</p>
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
