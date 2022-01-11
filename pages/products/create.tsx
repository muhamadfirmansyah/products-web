import Head from "next/head"
import Layout from "../../components/Layout"
import ProductForm from "../../components/ProductForm"

const ProductCreate = () => {
    return (
        <Layout>
            <Head>
                <title>Create Product | Prodtr</title>
            </Head>

            <ProductForm />
        </Layout>
    )
}

export default ProductCreate