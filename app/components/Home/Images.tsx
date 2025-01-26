import Image from "next/image";
import { FC } from "react";

const Images: FC = () =>{
  return(
    <section className="flex gap-4 overflow-x-scroll md:overflow-x-hidden scrollbar-hidden">
    {[1,2].map((index) => (
      <Image
        key={index}
        src={`/images/cordova-winter-fashion-${index}.webp`}
        alt="cordova winter fashion"
        width={1000}
        height={1000}
        className={`w-3/5 aspect-square h-auto max-h-[80vh] md:flex-shrink-0 border border-black/10 ${index === 1 ? 'md:w-3/5 md:object-top' : 'md:w-1/4 md:max-h-[60vh] md:mt-auto'}`}
      />
    ))}
    </section>
  )
}

export default Images;