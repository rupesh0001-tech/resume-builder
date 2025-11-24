import React from "react";
import { useTemplate } from "../../Hooks/ResumeData/useTemplate";

const ThemeSelector = () => {
  const {template, setTemplate} = useTemplate();
  const temps = [
    {
      name: "Classic",
      template: "classic",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50",
    },
    {
      name: "Modern",
      template: "modern",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50",
    },
    {
      name: "Minimal",
      template: "minimal",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop",
    },
    {
        name : 'Mini',
        template : 'minimal-image',
        image : 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60'
    }
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTemplate, setSelectedTemplate] = React.useState(temps[0]);

  const handleSelect = (temp) => {
    setSelectedTemplate(temp);
    setIsOpen(false);
    setTemplate(temp.template);
    
  };

  return (
    <div className="flex flex-col w-20 text-sm relative py-2 cursor-pointer ">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-between w-full text-left px-2.5 py-2.5 border rounded bg-white text-gray-700 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none "
      >
        <div className="flex items-center gap-2">
          <span>{selectedTemplate.name}</span>
        </div>
        
      </button>

      {isOpen && (
        <ul className="w-30  bg-white border border-gray-300 rounded shadow-md mt-1 py-2 z-1000  absolute top-12">
          {temps.map((temp) => (
            <li
              key={temp.name}
              className={`px-2 py-2 flex items-center gap-2 cursor-pointer ${
                temp.name === selectedTemplate.name
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-indigo-500 hover:text-white"
              }`}
              onClick={() => handleSelect(temp)}
            >
              <span>{temp.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeSelector;
