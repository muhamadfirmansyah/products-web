import Head from "next/head"
import Layout from "../../../components/Layout"
import ProductForm from "../../../components/ProductForm"

const ProductEdit = ({ product }: any) => {
    return (
        <Layout>
            <Head>
                <title>Edit {product.title} | Prodtr</title>
            </Head>

            <ProductForm data={product} />
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

export default ProductEdit