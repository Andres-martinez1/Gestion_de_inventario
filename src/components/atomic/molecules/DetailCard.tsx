import { useState, useRef, useEffect } from "react";

interface DetailedInventoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
  encargado: string;
  items: number;
}

const DetailedInventoryCard = ({
  title,
  description,
  imageUrl,
  onClick,
  encargado,
  items,
}: DetailedInventoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const maxVisibleHeight = lineHeight * 3;
      if (textRef.current.scrollHeight > maxVisibleHeight) {
        setNeedsCollapse(true);
      }
    }
  }, []);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02] duration-300">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold flex items-center gap-2">{title}</h3>

        <div className={`relative text-sm text-gray-600 ${!isExpanded ? "max-h-[4.8rem] overflow-hidden" : ""} transition-all duration-300 ease-in-out`}>
          <p ref={textRef} className="relative pr-2">
            {description}
          </p>

          {!isExpanded && needsCollapse && (
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent text-right pr-2 pointer-events-none">
              <span className="text-gray-500">...</span>
            </div>
          )}
        </div>

        {needsCollapse && (
          <button
            onClick={toggleExpand}
            className="text-xs text-blue-600 hover:underline self-start"
          >
            {isExpanded ? "Ver menos" : "Ver más"}
          </button>
        )}

        <div className="flex justify-between text-sm mt-2">
          <div>
            <span className="text-gray-500">Encargado</span>
            <br />
            <span className="font-semibold">{encargado}</span>
          </div>
          <div>
            <span className="text-gray-500">Items</span>
            <br />
            <span className="font-semibold">{items}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            Activo
          </span>
          <a
            onClick={onClick}
            className="text-sm text-blue-600 flex items-center gap-1 hover:underline cursor-pointer"
          >
            Ver detalles <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedInventoryCard;
