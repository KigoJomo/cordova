import Image from "next/image";
import { FC } from "react";

interface ProductProps{
  image: string
  name: string
  price: number
  className?: string
}

const ProductCard: FC<ProductProps> = ({ image, name, price, className }) => {
  return(
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      <Image
        src={image}
        alt={`Cordova | ${name}`}
        width={1000}
        height={1000}
        className="w-full aspect-[3/4]"
       />

       <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
          <h4 className="capitalize font-semibold">{name}</h4>
          <p className="italic text-sm">Ksh {price.toLocaleString()}</p>
       </div>
    </div>
  )
}

export default ProductCard