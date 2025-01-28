'use client';

import React, { FC, useState } from 'react';

// interface SizeSelectorProps {
//
// }

interface SizeButtonProps {
  size: string;
  selected: boolean;
  onClick: () => void;
}

const SizeButton: FC<SizeButtonProps> = ({ size, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase w-10 aspect-square rounded-full border border-foreground flex items-center justify-center ${
        selected ? 'bg-foreground text-background' : 'bg-background text-foreground'
      } transition-all duration-300`}>
      {size}
    </button>
  );
};

const SizeSelector: FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const toggleSize = (size: string) => {
    setSelectedSize(size);
  };

  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  return (
    <div className="size-selector">
      <p className="text-xs opacity-50 mb-4">Size:</p>

      <div className="sizes w-full flex items-center gap-4">
        {sizes.map((size, index) => (
          <SizeButton key={index} size={size} selected={selectedSize === size} onClick={() => toggleSize(size)} />
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
