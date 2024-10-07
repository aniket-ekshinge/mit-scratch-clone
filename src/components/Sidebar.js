import React, { useState } from "react";
import sidebarBlocks, { controlColor, motionColor } from "../constants/sidebarBlocks";

export default function Sidebar() {
  const [isMotionOpen, setIsMotionOpen] = useState(false);
  const [isControlOpen, setIsControlOpen] = useState(false);

  const handleDragStart = (e, actionType, payload, text) => {
    e.dataTransfer.setData('actionType', actionType);
    e.dataTransfer.setData('text', text);
    e.dataTransfer.setData('payload', JSON.stringify(payload));
  };

  const toggleDropdown = (section) => {
    if (section === "Motion") {
      setIsMotionOpen(!isMotionOpen);
    } else if (section === "Control") {
      setIsControlOpen(!isControlOpen);
    }
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-4 bg-gray-100 border-r border-gray-300 shadow-lg">
      {Object.keys(sidebarBlocks).map(key => (
        <div key={key} className="mb-4">
          {/* Section Header */}
          <div 
            className={`font-bold text-lg mb-2 cursor-pointer flex justify-between items-center 
                        px-4 py-2 rounded-md ${key === "Motion" ? motionColor.bgColor : controlColor.bgColor} 
                        text-white transform transition-transform duration-200 
                        hover:scale-105 hover:shadow-lg`}
            onClick={() => toggleDropdown(key)}
          >
            <span>{key}</span>
            <span className={`text-gray-200 ${isMotionOpen || isControlOpen ? 'rotate-180' : ''}`}>&#9660;</span>
          </div>

          {/* Dropdown Content */}
          <div className={`transition-all duration-300 ${key === "Motion" && isMotionOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
            <div className="grid grid-cols-2 gap-2">
              {sidebarBlocks[key].map((block, index) => {
                let bgColor = "";
                switch (key) {
                  case "Motion":
                    bgColor = motionColor.bgColor;
                    break;
                  case "Control":
                    bgColor = controlColor.bgColor;
                    break;
                  default:
                    break;
                }

                return (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, block.type, block.defaultPayload, block.text)}
                    className={`flex flex-row ${bgColor} px-3 py-2 my-2 text-sm rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md`}
                  >
                    <span className="flex-grow">{block.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`transition-all duration-300 ${key === "Control" && isControlOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
            <div className="grid grid-cols-2 gap-2">
              {sidebarBlocks[key].map((block, index) => {
                let bgColor = "";
                switch (key) {
                  case "Motion":
                    bgColor = motionColor.bgColor;
                    break;
                  case "Control":
                    bgColor = controlColor.bgColor;
                    break;
                  default:
                    break;
                }

                return (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, block.type, block.defaultPayload, block.text)}
                    className={`flex flex-row ${bgColor} px-3 py-2 my-2 text-sm rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-md`}
                  >
                    <span className="flex-grow">{block.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
