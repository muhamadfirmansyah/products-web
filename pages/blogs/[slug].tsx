import Head from "next/head"
import Image from "next/image"
import Layout from "../../components/Layout"
import { getAllPosts, getPostBySlug } from "../../helpers/blogFetcher"
import { markdownToHtml } from "../../helpers/mdToHtmlConvertion"

export type IBlog = {
    title: string,
    date: string,
    content: string,
    slug: string,
    excerpt: string,
    coverImage: string,
    author: {
        name: string
    }
}

const Blog = ({ post }: { post: IBlog }) => {

    return (
        <Layout>
            <Head>
                <title>{ post.title } | Prodtr</title>
            </Head>
            
            <div className="max-w-2xl mx-auto py-[54px] px-2 md:px-0">

                <h1 className="font-bold text-5xl mt-[32px] text-center leading-tight">{post.title}</h1>

                <p className="text-sm text-center mt-[16px]">{new Date(post.date).toLocaleDateString('id')} &mdash; {post.author.name} </p>

                <div className="mt-[54px]">

                    <div className="relative aspect-video">
                        <Image src={post.coverImage || 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} layout="fill" objectFit="cover" alt="" />
                    </div>

                    <article className="mt-[32px] leading-8 font-serif text-lg prose" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps = async (params: { params: { slug: string } }) => {
    const post = getPostBySlug(params.params.slug, [
        'title',
        'date',
        'content',
        'coverImage',
        'author'
    ])

    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export const getStaticPaths = async () => {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        fallback: false
    }
}

export default Blog