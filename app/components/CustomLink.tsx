import { CornerDownRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface LinkProps {
  href: string
  label: string
}

const CustomLink: FC<LinkProps> = ({ href, label }) => {
  return (
    <Link href={href} className="w-fit flex items-center gap-1 border-b border-black/20">
      <CornerDownRight size={20} />
      <span className="uppercase">{label}</span>
    </Link>
  )
}

export default CustomLink