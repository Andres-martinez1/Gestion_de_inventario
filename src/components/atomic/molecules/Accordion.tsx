import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
    question: string;
    answer: string;
  };
  
  const Accordion: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left font-medium text-gray-800"
      >
        {question}
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-2 text-sm text-gray-600">
          {answer}
          
        </div>
      )}
    </div>
  );
};

export default Accordion;