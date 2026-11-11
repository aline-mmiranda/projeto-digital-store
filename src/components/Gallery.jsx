import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import products from "../utils/products";

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const product = products[0];

  const images = product.imageThumb?.length
    ? product.imageThumb
    : [{ id: product.id, src: product.image }];

  function handlePrevious() {
    if (activeImage !== 0) {
      setActiveImage(activeImage - 1);
    }
  }

  function handleNext() {
    if (activeImage !== images.length - 1) {
      setActiveImage(activeImage + 1);
    }
  }

  return (
    <>
      <div className="relative">
        <ChevronLeft
          color="var(--color-dark-gray-2)"
          size={14}
          strokeWidth={1.5}
          className={`absolute top-1/2 left-9 -translate-y-1/2 bg-white rounded-full ${activeImage === 0 ? "opacity-30 pointer-events-none" : "cursor-pointer"}`}
          onClick={handlePrevious}
        />
        <div className="w-83.75 h-68.25 m-auto">
          <img
            src={images[activeImage].src}
            alt="Imagem do produto"
            className="w-full h-full rounded-sm object-cover object-center"
          />
        </div>
        <ChevronRight
          color="var(--color-dark-gray-2)"
          size={14}
          strokeWidth={1.5}
          className={`absolute top-1/2 right-9 -translate-y-1/2 bg-white rounded-full ${activeImage === images.length - 1 ? "opacity-30 pointer-events-none" : "cursor-pointer"}`}
          onClick={handleNext}
        />
      </div>
      <div className="flex justify-center items-center gap-2.25 mt-2.5 mb-10">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveImage(index)}
            aria-pressed={activeImage === index}
            className="w-15 h-14.5 "
          >
            <img
              src={image.src}
              alt=""
              className={`w-full h-full rounded-sm object-cover object-center ${activeImage === index && "border border-primary"}`}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Gallery;
