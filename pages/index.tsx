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
      <Layout isHero={true}>

        <section>
          <div className="grid grid-cols-7 py-6 mt-8 gap-8 items-center">
            <div className='col-span-2'>
              <h5 className='font-semibold uppercase text-gray-300 text-sm'>Service we offer</h5>
              <h3 className='mt-[16px] text-xl font-bold text-black'>The Fizzics DraftPour gives you nitro-style draft beer from ANY can or bottle. </h3>
            </div>
            <div className='col-span-2 text-center'>
              <Image src={'/images/features.svg'} alt='features.svg' width={170} height={170} />
            </div>
            <div className='col-span-3'>
              <div className="grid grid-cols-3 items-center">
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-4xl'>100+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Partners</p>
                </div>
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-4xl'>13k+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Customers</p>
                </div>
                <div>
                  <h3 className='font-bold text-green-600 font-mono text-4xl'>900k+</h3>
                  <p className='font-extrabold mt-[4px] text-gray-400'>Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-10 my-[56px]'>
          <h3 className='text-center text-6xl font-bold leading-normal'>&quot;I choose a <span className="text-green-600 underline">lazy</span> person to do a hard job. Because a <span className="text-green-600">lazy</span> person will find an easy way to do it.&quot;</h3>
          <h6 className='text-center mt-[32px] font-bold text-3xl text-green-600'>Bill Gates</h6>
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
