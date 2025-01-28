import { MoveRight } from 'lucide-react';
import { FC } from 'react';

interface CtaButonProps {
  dark?: boolean;
  label: string;
  className?: string;
  onClick?: () => void;
  hideIcon?: boolean;
}

const CtaButton: FC<CtaButonProps> = ({
  dark = false,
  label,
  className,
  onClick,
  hideIcon = false,
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-full md:w-fit h-fit px-4 py-2 flex items-center justify-center gap-4 border ${
        dark
          ? 'border-background bg-foreground text-background hover:bg-background hover:text-foreground'
          : 'border-foreground bg-background text-foreground hover:bg-foreground hover:text-background'
      } rounded-full transition-all duration-300 ${className}`}>
      <span className="capitalize">{label}</span>
      {!hideIcon && <MoveRight size={16} />}
    </button>
  );
};

export default CtaButton;
