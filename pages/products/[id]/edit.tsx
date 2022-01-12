import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Head from "next/head"
import Layout from "../../../components/Layout"
import ProductForm from "../../../components/ProductForm"

import { ProductProps } from "../../../components/ProductForm"

const ProductEdit = ({ product }: { product: ProductProps }) => {
    return (
        <Layout>
            <Head>
                <title>Edit {product.title} | Prodtr</title>
            </Head>

            <ProductForm data={product} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const req = await fetch(`https://api-products-server.herokuapp.com/products/${context.params?.id}`)
    const res = await req.json()

    return {
        props: {
            product: res
        }
    }
}

export default ProductEdit