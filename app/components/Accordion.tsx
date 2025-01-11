'use client';

import { FC, ReactNode, useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  items: {
    title: string;
    content: ReactNode;
  }[];
}

const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return <div className={`w-full`}>
    {items.map((item, index) => (
      <AccordionItem
        key={index}
        index={index+1}
        title={item.title}
        isOpen={openIndex === index}
        onToggle={() => handleToggle(index)}
       >
        {item.content}
       </AccordionItem>
    ))}
  </div>;
};

export default Accordion;
