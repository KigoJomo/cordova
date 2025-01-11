import { FC, ReactNode } from 'react';
import CustomLink from './CustomLink';

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
      id={`category-${index}`}
      className={`w-full overflow-hidden relative ${
        index === 1 && 'border-t'
      } border-b border-black/30 py-4 md:py-6 ${
        isOpen ? 'pb-16 md:pb-6' : ''
      } transition-all duration-300`}>
      <button
        onClick={onToggle}
        className={`w-full flex items-center gap-4 md:gap-8`}>
        <span className="">/{index}</span>

        <h4 className="text-xl uppercase">{title}</h4>

        <CustomLink
          href={`#category-${index}`}
          label="show me now"
          className={`ml-auto ${
            isOpen && 'opacity-50 absolute md:static bottom-4 right-0'
          }`}
        />
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
