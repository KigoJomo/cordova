import { MoveRight } from "lucide-react";
import { FC } from "react";

interface CtaButonProps {
  dark?: boolean
  label: string
  className?: string
}

const CtaButton: FC<CtaButonProps> = ({ dark = false, label, className }) => {
  return (
    <button
        type="submit"
        className={`w-full md:w-fit h-fit px-4 py-1 flex items-center justify-center gap-4 border bg-transparent  ${
          dark
            ? 'border-background hover:bg-background hover:text-foreground'
            : 'border-foreground hover:bg-foreground hover:text-background'
        } rounded-full transition-all duration-300 ${className}`}>
        <span className="capitalize">{label}</span>
        <MoveRight size={16} />
      </button>
  )
}

export default CtaButton