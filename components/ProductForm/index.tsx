import Router from "next/router"
import { FormEvent, FormEventHandler, useEffect, useState } from "react"
import ProductCard from "../ProductCard"

export type ProductProps = {
    id: number | null
    img: string
    price: number | string
    title: string
    description: string
}

const ProductForm = ({ data = null }: any) => {

    const [product, setProduct] = useState<ProductProps>({
        id: null,
        img: "",
        price: 0,
        title: "",
        description: "",
    })

    useEffect(() => {
        if (data) {
            setProduct(data)
        }
    }, [data])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (product.id) {
            handleUpdate()
            alert('Successfully update the product!')
        } else {
            handleCreate()
            alert('Successfully create the product!')
        }

        Router.push(`/`)
    }

    const handleUpdate = async () => {
        const req = await fetch(`https://api-products-server.herokuapp.com/products/${product.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const res = await req.json()

        return res
    }

    const handleCreate = async () => {
        const req = await fetch('https://api-products-server.herokuapp.com/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const res = await req.json()

        return res
    }

    return (
        <>

            <div className="my-[52px]">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Preview</h3>
                            <div className="mt-1 text-sm text-gray-600">
                                <ProductCard {...product} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleSubmit as FormEventHandler}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                            <input type="text" name="title" id="title" autoComplete="address-level2" className="mt-1 focus:ring-indigo-500 focus:border-green-500 px-4 py-2 border outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="example: Cookies" value={product.title} onChange={(e) => setProduct({ ...product, title: e.currentTarget.value })} />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                    $
                                                </span>
                                                <input type="number" name="price" id="price" className="focus:ring-green-500 outline-none focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 px-4 py-2 border" placeholder="example: 8" value={product.price} onChange={(e) => setProduct({ ...product, price: parseInt(e.currentTarget.value) || e.currentTarget.value })} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                                                Image
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                    https://
                                                </span>
                                                <input type="text" name="img" id="img" className="focus:ring-green-500 outline-none focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 px-4 py-2 border" placeholder="example: https://unsplash.com/aldkfoiwmksjfdl.jpg" value={product.img} onChange={(e) => setProduct({ ...product, img: e.currentTarget.value })} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea id={"description"} name={"description"} rows={3} className="shadow-sm focus:ring-green-500 outline-none focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-4 py-2" placeholder="example: This product was made by ..." value={product.description} onChange={(e) => setProduct({ ...product, description: e.currentTarget.value })} />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Brief description for the product.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductForm