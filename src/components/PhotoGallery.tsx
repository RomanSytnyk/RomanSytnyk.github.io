import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  images: string[];
  title: string;
  originalsPath?: string;
}

const PhotoGallery = ({ images, title, originalsPath }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="photo-gallery">
      <div className="grid grid-cols-2 gap-2 p-2">
        {images.map((image, index) => (
          <Dialog key={`${image}-${index}`}>
            <DialogTrigger asChild>
              <button
                className="w-full overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all"
                onClick={() => openImage(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </button>
            </DialogTrigger>
              <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0">
                <div className="relative flex items-center justify-center min-h-[40vh] max-h-[85vh] sm:min-h-[50vh] sm:max-h-[80vh]">
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={selectedImage || image}
                      alt={`${title} - Photo ${currentIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                      className="bg-black/50 text-white rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-black/70 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage("prev");
                      }}
                    >
                      ‹
                    </button>
                    <button
                      className="bg-black/50 text-white rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-black/70 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateImage("next");
                      }}
                    >
                      ›
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                </div>
              </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;