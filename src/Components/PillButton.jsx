import React, { useState } from 'react';

const PillButton = () => {
  const [selected, setSelected] = useState(null);

  const buttons = ['Slow', 'Normal', 'Fast', 'Faster'];

  return (
    <div className="relative flex items-center rounded-full border-2 border-gray-300  w-max">
      {buttons.map((label, index) => (
        <button
          key={index}
          onClick={() => setSelected(label)}
          className={`px-6 py-3 rounded-full border-2 transition-colors duration-300 ${
            selected === label
              ? 'bg-white text-black border-black z-10'
              : 'bg-transparent text-white border-gray-300 z-0'
          } ${index > 0 ? 'ml-[-1px]' : ''}`}
          style={{
            zIndex: selected === label ? 10 : 0,
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default PillButton;
