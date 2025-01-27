// components/SideMenu.tsx
'use client';

import { X } from 'lucide-react';
import { ReactNode } from 'react';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right';
  children: ReactNode;
};

const SideMenu = ({ isOpen, onClose, position, children }: SideMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100 visible duration-100' : 'opacity-0 invisible duration-700'
        }`}
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-[4%] ${
          position === 'left' ? 'left-[4%] md:left-[2%]' : 'right-[4%] md:right-[2%]'
        } h-[92%] w-64 md:w-1/3 bg-background shadow-lg p-6 md:px-12 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-[120%]' : 'translate-x-[120%]'
        }`}
      >
        {/* Close Button */}
        <div className="w-fit flex ml-auto mb-4 p-3 border rounded-full hover:rotate-90 transition-all duration-300 cursor-pointer">
          <button onClick={onClose} className="text-gray-700 focus:outline-none">
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        {children}
      </div>
    </>
  );
};

export default SideMenu;