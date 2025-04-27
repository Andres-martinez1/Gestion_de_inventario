import { useState } from "react";

type HelpCenterTabsProps = {
    activeTab: string;
    onChange: (tab: string) => void;
  };
const tabs = ["Preguntas Frecuentes", "Tutoriales", "Contacto"];

const HelpCenterTabs = ({ activeTab, onChange }: HelpCenterTabsProps) => {
    return (
      <div className="flex justify-center border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
  );
};

export default HelpCenterTabs;