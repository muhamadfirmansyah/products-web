import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import ProductList from '../../components/ProductList'

const Products = ({ products }: any) => {
  return (
    <Layout>
      <Head>
        <title>Products | Prodtr</title>
      </Head>

      <div className="py-9 mt-[52px]">
        <h1 className="text-7xl font-bold">Products</h1>
        <div className="grid grid-cols-3 gap-5 mt-[32px]">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam quos omnis debitis.</p>
            <div className="mt-[16px] d-flex">
              <button className="px-4 py-3 bg-green-700 text-white rounded-md">Get promos</button>
              <button className="px-4 py-3 ml-[8px] bg-transparent text-green-700 rounded-md">See what we offer</button>
            </div>
          </div>
          <div className="relative col-span-2 aspect-auto">
            <Image src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} layout="fill" objectFit="cover" className="rounded-md hover:opacity-75 cursor-pointer" alt="" />
          </div>
        </div>

        <ProductList products={products} />
      </div>

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