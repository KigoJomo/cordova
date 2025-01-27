// components/MenuButton.tsx
'use client';

import { ReactNode } from 'react';

type MenuButtonProps = {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  count: number;
};

const MenuButton = ({ onClick, icon, label, count }: MenuButtonProps) => {
  return (
    <button onClick={onClick} className="relative text-gray-700">
      {icon}
      <span className="hidden md:flex uppercase border-b border-transparent hover:border-foreground transition-all duration-500">
        {label}
      </span>
      <span className="absolute -top-3 -right-2 text-xs">({count})</span>
    </button>
  );
};

export default MenuButton;