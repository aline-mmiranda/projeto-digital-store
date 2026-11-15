import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Gallery = ({
  className,
  width,
  height,
  radius = "4px",
  showThumbs = false,
  images = [],
}) => {
  const [activeImage, setActiveImage] = useState(0);

  function handlePrevious() {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    }
  }

  function handleNext() {
    if (activeImage < images.length - 1) {
      setActiveImage(activeImage + 1);
    }
  }

  if (images.length === 0) return null;

  return (
    <>
      <section
        className={`w-full mx-auto ${className || ""}`}
        style={{ maxWidth: `${width}px` }}
      >
        <div
          className="relative w-full overflow-hidden bg-dark-gray-3"
          style={{ aspectRatio: `${width} / ${height}`, borderRadius: radius }}
        >
          <ChevronLeft
            color="var(--color-dark-gray-2)"
            strokeWidth={1.5}
            className={`w-3.5 h-3.5 lg:w-5.5 lg:h-5.5 absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full ${
              activeImage === 0
                ? "opacity-30 pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={handlePrevious}
          />
          <img
            src={images[activeImage].src}
            alt="Imagem do produto"
            className="w-full h-full object-contain object-center"
            style={{ borderRadius: radius }}
          />
          <ChevronRight
            color="var(--color-dark-gray-2)"
            strokeWidth={1.5}
            className={`w-3.5 h-3.5 lg:w-5.5 lg:h-5.5 absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full ${
              activeImage === images.length - 1
                ? "opacity-30 pointer-events-none"
                : "cursor-pointer"
            }`}
            onClick={handleNext}
          />
        </div>
        {showThumbs && (
          <div className="flex justify-center items-center gap-2.25 mt-2.5 lg:gap-7 lg:mt-5 lg:mb-20 overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setActiveImage(index)}
                aria-pressed={activeImage === index}
                className="w-15 h-14.5 lg:w-29.5 lg:h-24 shrink-0"
              >
                <img
                  src={image.src}
                  alt=""
                  className={`w-full h-full object-contain object-center ${activeImage === index && "border border-primary"}`}
                  style={{ borderRadius: radius }}
                />
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Gallery;
