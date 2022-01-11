import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const Home: NextPage = ({ products }: any) => {

  return (
    <>
      <Head>
        <title>Prodtr</title>
      </Head>
      <Layout>
        <Hero />

        <section>
          <div className="grid grid-cols-7 py-6 mt-8 gap-8 items-center">
            <div className='col-span-2'>
              <h5 className='font-semibold uppercase text-gray-300 text-sm'>Service we offer</h5>
              <h3 className='mt-[16px] text-xl font-bold text-gray-800'>The Fizzics DraftPour gives you nitro-style draft beer from ANY can or bottle. </h3>
            </div>
            <div className='col-span-2 text-center'>
              <Image src={'/images/features.svg'} alt='features.svg' width={170} height={170} />
            </div>
            <div className='col-span-3'>
              <div className="grid grid-cols-3 items-center">
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-5xl'>100+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Partners</p>
                </div>
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-5xl'>13k+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Customers</p>
                </div>
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-5xl'>900k+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductList products={products} />
      </Layout>
    </>
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

export default Home
