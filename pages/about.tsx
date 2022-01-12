import Image from "next/image"
import Layout from "../components/Layout"

const About = () => {
    return (
        <Layout>
            <div className="py-9 mt-[52px]">
                <h1 className="text-7xl font-bold">About</h1>
                <div className="grid grid-cols-3 gap-5 mt-[32px]">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam quos omnis debitis.</p>
                        <div className="mt-[16px] d-flex">
                            <button className="px-4 py-3 bg-green-700 text-white rounded-md">Download (PDF)</button>
                            <button className="px-4 py-3 ml-[8px] bg-transparent text-green-700 rounded-md">Contact us</button>
                        </div>
                    </div>
                    <div className="relative col-span-2 aspect-auto">
                        <Image src={"https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} layout="fill" objectFit="cover" className="rounded-md hover:opacity-75 cursor-pointer" alt="" />
                    </div>
                </div>

                <section className="mt-[84px] py-[52px]">
                    <h3 className="text-3xl font-bold">Who <span className="text-green-600">We Are</span></h3>
                    <div className="w-80 mt-[8px]">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti pariatur voluptatum ab doloribus labore suscipit.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-[32px]">
                        <div className="bg-gray-50 px-5 py-4 rounded-md">
                            <div className="relative aspect-square rounded-full overflow-hidden h-20 w-20">
                                <Image src={'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} layout="fill" objectFit="cover" alt="" />
                            </div>
                            <div className="mt-[16px]">
                                <h3 className="text-xl font-medium text-green-700">Julia &mdash; <span className="text-black">CEO</span></h3>
                                <span className="text-sm text-gray-500 mt-[4px]">@juliaa</span>
                                <p className="mt-[8px] text-md text-grey-900">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reprehenderit?
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-4 rounded-md">
                            <div className="relative aspect-square rounded-full overflow-hidden h-20 w-20">
                                <Image src={'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} layout="fill" objectFit="cover" alt="" />
                            </div>
                            <div className="mt-[16px]">
                                <h3 className="text-xl font-medium text-green-700">Brandon &mdash; <span
                                    className="text-black">CTO</span></h3>
                                <span className="text-sm text-gray-500 mt-[4px]">@brandbon</span>
                                <p className="mt-[8px] text-md text-grey-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae at beatae labore id fugiat necessitatibus repellat autem quisquam perspiciatis mollitia.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-4 rounded-md">
                            <div className="relative aspect-square rounded-full overflow-hidden h-20 w-20">
                                <Image src={'https://images.unsplash.com/photo-1596935884413-260a972dab44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'} layout="fill" objectFit="cover" alt="" />
                            </div>
                            <div className="mt-[16px]">
                                <h3 className="text-xl font-medium text-green-700">Thomas &mdash; <span className="text-black font-normal">UI/UX</span></h3>
                                <span className="text-sm text-gray-500 mt-[4px]">@thomss</span>
                                <p className="mt-[8px] text-md text-grey-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus soluta assumenda officiis?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-[84px] mb-[56px]">
                    <h3 className="text-3xl font-bold">Our <span className="text-green-600">Goals</span></h3>
                    <div className="grid grid-cols-6 gap-8 mt-[16px]">
                        <div className="col-span-2">
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptates recusandae reprehenderit eaque magnam beatae.</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" layout="fill" objectFit="cover" className="rounded-md shadow-md" />
                        </div>
                        <div className="relative">
                            <Image src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" layout="fill" objectFit="cover" className="rounded-md shadow-md" />
                        </div>
                        <div className="relative">
                            <Image src="https://images.unsplash.com/photo-1596900749995-57cec6ddb861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80" alt="" layout="fill" objectFit="cover" className="rounded-md shadow-md" />
                        </div>
                        <div className="relative">
                            <Image src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" layout="fill" objectFit="cover" className="rounded-md shadow-md" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default About