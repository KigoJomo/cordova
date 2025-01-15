import Image from "next/image";
import { FC } from "react";
import CtaButton from "../CtaButton";

const Insta: FC = () => {
  return (
    <div className="w-full mt-4 flex flex-col md:flex-row md:items-end md:gap-8">
      <Image
        src={'/images/insta.webp'}
        alt="cordova"
        width={1000}
        height={1000}
        className="w-full md:w-2/5 aspect-[8/5] rotate-3"
      />
      <CtaButton label="follow us" className="mt-4" />
    </div>
  )
}

export default Insta