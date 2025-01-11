import Image from "next/image";
import { FC } from "react";

interface DetailsProps{
  description: string
  images: string[]
}

const CategoryDetails: FC<DetailsProps> = ({ description, images }) => {
  return(
    <div className={`mt-4 flex flex-col md:flex-row gap-4 md:gap-24`}>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <Image
          key={index}
          src={image}
          alt="cordova"
          width={500}
          height={500}
          className={`w-32 aspect-[3/4]`}
        />
        ))}
      </div>

      <p className="text-xs md:w-1/3 md:mt-auto">{description}</p>
    </div>
  )
}

export default CategoryDetails