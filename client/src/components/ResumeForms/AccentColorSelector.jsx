import React from "react";
import { useAccentColor } from "../../Hooks/ResumeData/useAccentColor";


const AccentColorSelector = () => {
  const { accentColor, setAccentColor } = useAccentColor();

  const accentColors = [
    { name: "blue", code: "#3b82f6" },
    { name: "green", code: "#22c55e" },
    { name: "red", code: "#ef4444" },
    { name: "yellow", code: "#f59e0b" },
    { name: "purple", code: "#8b5cf6" },
    { name: "orange", code: "#f97316" },
    { name: "teal", code: "#14b8a6" },
    {name:'black', code:'#000000'},
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const selectedColor =
    accentColors.find(c => c.code === accentColor) || accentColors[0];

  const handleSelect = (color) => {
    setAccentColor(color.code);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-25 text-sm relative py-2 cursor-pointer">
      
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2.5 border rounded bg-white text-gray-700 border-gray-300 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: selectedColor.code }}
          ></div>
          <span>{selectedColor.name}</span>
        </div>

      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute top-14 w-48 bg-white border border-gray-300 rounded shadow-md  z-50">
          {accentColors.map((color) => (
            <li
              key={color.name}
              className={`px-3 py-2 flex items-center gap-2 cursor-pointer 
                ${accentColor === color.code ? "bg-gray-200" : "hover:bg-gray-100"}
              `}
              onClick={() => handleSelect(color)}
            >
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: color.code }}
              ></div>
              <span>{color.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccentColorSelector;
