import { FC, ReactNode } from 'react';
import CustomLink from './CustomLink';
import { MoveDown } from 'lucide-react';

interface AccordionItemProps {
  index: number;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
  index,
  title,
  children,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      id=""
      className={`w-full overflow-hidden relative ${
        index === 1 && 'border-t'
      } border-b border-black/30 py-4 md:py-6 ${
        isOpen ? '' : ''
      } transition-all duration-300`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-4 md:gap-8 cursor-pointer`}>
        <span className="">/{index}</span>

        <h4 className="text-xl uppercase">{title}</h4>

        <CustomLink
          href="#"
          label="show me now"
          className={`hidden md:flex ml-auto pointer-events-none ${
            isOpen && 'opacity-50'
          }`}
        />

        <div
          className={`flex md:hidden ml-auto border border-foreground px-2 aspect-square rounded-full items-center justify-center transition-all duration-300 ${
            isOpen && 'opacity-50 rotate-180'
          }`}>
          <MoveDown size={12} />
        </div>
      </button>

      <div
        className={`w-full px-8 md:px-24 transition-all duration-300 ${
          isOpen ? 'h-fit' : 'h-0'
        }`}>
        {isOpen && children}
      </div>

      {/* 
      {isOpen && (
        <div className={`w-full px-8 md:px-24`}>
          {children}
        </div>
      )} */}
    </div>
  );
};

export default AccordionItem;
