import Head from "next/head"
import Image from "next/image"
import BlogCard from "../../components/BlogCard"
import Layout from "../../components/Layout"
import { getAllPosts } from "../../helpers/blogFetcher"

import { IBlog } from "./[slug]"

export type IBlogs = {
    allPosts: IBlog[]
}

const Blogs = ({ allPosts }: IBlogs) => {

    return (
        <Layout>

            <Head>
                <title>Blogs | Prodtr</title>
            </Head>

            <div className="py-9 mt-[52px]">
                <h1 className="text-7xl font-bold">Blogs</h1>
                <div className="grid grid-cols-3 gap-5 mt-[32px]">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam quos omnis debitis.</p>
                        <div className="mt-[16px] d-flex">
                            <button className="px-4 py-3 bg-green-700 text-white rounded-md">Contribute</button>
                            <button className="px-4 py-3 ml-[8px] bg-transparent text-green-700 rounded-md">Ask with email</button>
                        </div>
                    </div>
                    <div className="relative col-span-2 aspect-auto">
                        <Image src={"https://images.unsplash.com/photo-1518179615350-05035b7d641c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} layout="fill" objectFit="cover" className="rounded-md hover:opacity-75 cursor-pointer" alt="" />
                    </div>
                </div>

                <div className="mt-[64px] max-w-2xl px-2 md:px-0">

                    <section className="mt-[54px]">
                        <h3 className="font-medium">Our latest discovery</h3>
                        <div className="mt-[16px] grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
                            {allPosts.slice(0, 2).map(post => (
                                <BlogCard sm={true} key={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} coverImage={post.coverImage} slug={post.slug} />
                            ))}
                        </div>
                    </section>

                    <section className="mt-[54px]">
                        <h3 className="font-medium">Here&lsquo;s the top picks for you</h3>
                        <div className="mt-[16px] grid grid-cols-1 gap-5">
                            {allPosts.map(post => (
                                <BlogCard key={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} coverImage={post.coverImage} slug={post.slug} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>

        </Layout>
    )
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'slug',
        'excerpt',
        'author',
        'date',
        'coverImage',
    ])

    return {
        props: { allPosts }
    }
}

export default Blogs