// components/CtaButton.tsx
'use client';

import { MoveRight } from 'lucide-react';
import { FC, ReactNode } from 'react';

interface CtaButtonProps {
  dark?: boolean;
  label: ReactNode;
  className?: string;
  onClick?: () => void;
  hideIcon?: boolean;
  icon?: ReactNode;
  type?: "submit" | "button"
  disabled?: boolean
}

const CtaButton: FC<CtaButtonProps> = ({
  dark = false,
  label,
  className,
  onClick,
  hideIcon = false,
  icon,
  type = "button",
  disabled = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full md:w-fit h-fit px-4 py-2 flex items-center justify-center gap-4 border ${
        dark
          ? 'border-background bg-foreground text-background hover:scale-[.97]'
          : 'border-foreground bg-background text-foreground hover:scale-[.97]'
      } rounded-full transition-all duration-300 ${className}`}>
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="capitalize">{label}</span>
      {!hideIcon && <MoveRight size={16} />}
    </button>
  );
};

export default CtaButton;