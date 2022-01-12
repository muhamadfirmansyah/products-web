import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ sm = false, title, date, excerpt, coverImage, slug }: any) => {

    return (
        <Link href={`/blogs/${slug}`}>
            <a className={`px-2 md:px-4 py-3 ${!sm ? ('grid grid-cols-7 md:grid-cols-5 gap-3 md:gap-6') : ('border border-green-700 py-5 hover:bg-green-600 hover:text-white')} rounded-md group cursor-pointer`}>
                {!sm && (
                    <div className="relative aspect-square group-hover:opacity-75 col-span-2 md:col-span-1">
                        <Image src={coverImage || 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} alt="" layout="fill" objectFit="cover" className="rounded-md" />
                    </div>
                )}
                <div className={`${!sm && 'col-span-5 md:col-span-4'}`}>
                    <h1 className={`font-bold text-xl md:text-2xl ${!sm && 'group-hover:underline'}`}>{title}</h1>
                    {!sm && (
                        <>
                            <span className="text-xs">{new Date(date).toLocaleDateString('id')}</span>
                            <p className="text-sm mt-[4px] text-gray-800">{excerpt.length > 120 ? (`${excerpt.substr(0, 120)}...`) : excerpt}</p>
                            <div className="mt-[8px]">
                                <span className="text-green-600 text-sm font-medium">Read full story</span>
                            </div>
                        </>
                    )}
                </div>
            </a>
        </Link>
    )
}

export default BlogCard