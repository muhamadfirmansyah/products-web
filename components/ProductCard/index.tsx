import Image from "next/image"
import Link from "next/link"
import { ProductProps } from "../ProductForm"

const ProductCard = ({ id, price, img, title, description }: ProductProps) => {
    return (
        <div className="group relative">
            <Link href={id !== null ? `/products/${id}` : `#`}>
                <a>
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none relative">
                        <Image src={img || '/images/no-image.png'} alt={img} className="w-full h-full object-center object-cover lg:w-full lg:h-full" layout="fill" />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {title || 'Title'}
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">{(description?.length > 65) ? `${description.substring(0, 65)}...` : description}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${price || '0'}</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ProductCard