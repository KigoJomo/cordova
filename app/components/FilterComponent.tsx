import { Square, SquareCheck } from 'lucide-react';
import React from 'react';

interface FilterComponentProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
  selectedOption: string | null;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  label,
  options,
  onChange,
  selectedOption,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="label flex items-center gap-6">
        <p className="capitalize font-semibold">{label}</p>
      </div>

      <div className="options w-full px-4 flex flex-col items-start gap-2 border-l">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex gap-2 cursor-pointer hover:opacity-100 transition-all duration-300 ${selectedOption === option ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => onChange(option)}>
            {selectedOption === option ? (
              <SquareCheck size={16} />
            ) : (
              <Square size={16} />
            )}

            <span className="capitalize text-sm text-left">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
