import Link from 'next/link'
import ProductCard from '../ProductCard'

type ProductListProps = {
    products: {
        img: string
        title: string
        price: number
        id: number
        description: string
    }[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="bg-white">
            <div className="mx-auto py-16">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Products</h2>
                <Link href={'/products/create' }>
                    <a className='text-sm text-green-700'>Contribute to add new product</a>
                </Link>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map(product => (
                        <ProductCard {...product} key={product.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList