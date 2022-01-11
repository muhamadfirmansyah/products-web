import Head from 'next/head'
import Layout from '../../components/Layout'
import ProductList from '../../components/ProductList'

const Products = ({ products }: any) => {
  return (
    <Layout>
      <Head>
        <title>Products | Prodtr</title>
      </Head>

      <ProductList products={products} />
    </Layout>
  )
}

export async function getStaticProps() {
  const req = await fetch('https://api-products-server.herokuapp.com/products')
  const res = await req.json()

  return {
    props: {
      products: res
    },
    revalidate: 10,
  }
}

export default Products