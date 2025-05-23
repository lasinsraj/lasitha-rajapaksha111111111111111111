
import { useState } from "react";
import TradingIdeaImageModal from "./TradingIdeaImageModal";
import { useIsMobile } from "@/hooks/use-mobile";

interface TradingIdeaImagesProps {
  mainImage: string;
  title: string;
  additionalImages?: string[] | null;
}

const TradingIdeaImages = ({ mainImage, title, additionalImages }: TradingIdeaImagesProps) => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine main image with additional images
  const allImages = [mainImage, ...(additionalImages || [])];
  
  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className={`${isMobile ? 'px-3 py-2' : 'px-6 py-4'}`}>
      {/* Main Image */}
      <div 
        className="cursor-pointer overflow-hidden rounded-md mb-4 md:mb-6 border border-gray-200 dark:border-gray-700 shadow-sm" 
        onClick={() => openImageModal(0)}
      >
        <img
          src={mainImage}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Additional Images Grid */}
      {additionalImages && additionalImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
          {additionalImages.map((image, index) => (
            <div 
              key={index}
              className="cursor-pointer overflow-hidden rounded-md aspect-video border border-gray-200 dark:border-gray-700 shadow-sm" 
              onClick={() => openImageModal(index + 1)}
            >
              <img 
                src={image}
                alt={`${title} - Additional image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Image Modal */}
      <TradingIdeaImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImages}
        title={title}
        initialIndex={currentImageIndex}
      />
    </div>
  );
};

export default TradingIdeaImages;
