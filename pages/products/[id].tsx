import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Layout from "../../components/Layout"

const Product = ({ product }: any) => {
    return (
        <Layout>

            <Head>
                <title>{product.title} | Prodtr </title>
            </Head>

            <section className="my-[52px]">
                <div className="grid grid-cols-7 gap-8">
                    <div className="col-span-3 relative min-h-100">
                        <div className="w-full min-h-100 bg-gray-200 aspect-square overflow-hidden group-hover:opacity-100 lg:h-100 lg:aspect-none shadow-sm relative">
                            <Image src={product.img} alt={product.img} className="w-full h-full object-center object-cover lg:w-full lg:h-full" layout="fill" />
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="flex">
                            <h3 className="font-bold text-green-600 text-6xl">{product.title}
                                <Link href={`/products/${product.id}/edit`}>
                                    <a className="text-green-600 text-sm ml-1 opacity-25 hover:opacity-100">edit</a>
                                </Link>
                            </h3>
                        </div>
                        <h5 className="text-4xl font-bold mt-[8px]">${product.price}</h5>
                        <div className="divide-x-8" />
                        <article className="mt-[24px]">
                            <p>{product.description}</p>
                        </article>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getServerSideProps(context: any) {
    const req = await fetch(`https://api-products-server.herokuapp.com/products/${context.params.id}`)
    const res = await req.json()

    return {
        props: {
            product: res
        }
    }
}


export default Product