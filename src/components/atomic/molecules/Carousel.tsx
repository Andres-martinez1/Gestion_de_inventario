import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  height?: string;
  className?: string;
  interval?: number; // Tiempo en milisegundos entre cada cambio de imagen
}

const Carousel = ({
  images,
  height = "h-100",
  className = "",
  interval = 3000, // 3 segundos por defecto
}: Readonly<CarouselProps>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // UseEffect para hacer que las imágenes cambien automáticamente
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval); //  Limpia el intervalo al desmontar
  }, [images.length, interval]);

  return (
    <div className={`relative w-full mx-auto flex items-center justify-center ${className}`}>
      {/* 🔹 Contenedor de la imagen */}
      <div className={`overflow-hidden relative ${height} w-full`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 🔹 Asegura que la imagen se ajusta correctamente */}
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Carousel;
