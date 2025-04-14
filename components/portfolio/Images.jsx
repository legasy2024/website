import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { imageByStyles } from "./data/imagesByStyle";
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpand, FaTimes } from 'react-icons/fa';

function Images({ selectedStyle }) {
  // State to track loading images
  const [loadingImages, setLoadingImages] = useState({});
  // State for the fullscreen modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Normalize the style name - convert to lowercase and replace spaces with underscores
  const normalizedStyle = selectedStyle ? selectedStyle.toLowerCase().replace(/\s+/g, '_') : '';
  const defaultStyle = "realismo";
  
  // Get images for the selected style or fallback to default
  const images = imageByStyles[normalizedStyle] || imageByStyles[defaultStyle] || [];

  // Reset loading state when style changes
  useEffect(() => {
    const initialLoadingState = {};
    images.forEach((_, index) => {
      initialLoadingState[index] = true;
    });
    setLoadingImages(initialLoadingState);
  }, [normalizedStyle, images]);

  // Handle image load complete
  const handleImageLoaded = (index) => {
    setLoadingImages(prev => ({
      ...prev,
      [index]: false
    }));
  };

  // Open the fullscreen modal
  const openFullscreen = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close the fullscreen modal
  const closeFullscreen = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        closeFullscreen();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      // Reset overflow when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <div className="w-full py-2 mt-0 md:mt-5 md:py-8">
      
      
      {/* Full-width container on mobile, padding on larger screens */}
      <div className="w-full px-0 md:px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={`${normalizedStyle || defaultStyle}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-[450px] md:h-[300px]  relative rounded-lg overflow-hidden transition-shadow group"
            >
              {/* Skeleton loader */}
              {loadingImages[index] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              )}
              
              {/* Actual image */}
              <Image
                src={src}
                alt={`${selectedStyle || defaultStyle} image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                className={`object-contain hover:scale-105 transition-transform duration-300 ${loadingImages[index] ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => handleImageLoaded(index)}
                loading={index < 3 ? 'eager': 'lazy'} // Load first 3 images eagerly
                priority={index < 3} // Prioritize first 3 images
              />

              {/* Expand button (visible on hover) */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  openFullscreen(src);
                }}
              >
                <button 
                  className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="View full size"
                >
                  <FaExpand className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {images.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No images available for this style.
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeFullscreen}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-2 rounded-full transition-colors z-10"
              onClick={closeFullscreen}
              aria-label="Close fullscreen view"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Image container - stopping propagation to prevent closing when clicking on the image */}
            <div 
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Fullscreen view"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Images;