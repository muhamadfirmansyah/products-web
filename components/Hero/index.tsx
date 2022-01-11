import { NextComponentType } from "next";
import Image from "next/image";

const Hero: NextComponentType = () => {
    return (
        <div className="bg-green-800 text-white relative px-[72px] py-[72px] mt-[32px]">
            <div className="grid grid-cols-2 gap-[72px]">
                <div className="d-flex align-middle">
                    <h1 className="font-sans text-8xl font-extrabold"><span className="text-yellow-400">Prodtr</span> products</h1>
                    <p className="mt-[32px] font-bold max-w-[280px]">More than 80.000+ companies trust our business</p>

                    <div className="mt-[32px] ">
                        <p className="text-white">Can’t stop buying plants? Unbeleafable. Don’t worry—us too! Cover yourself in your favourite obsession in our NEW I Love Plants Oodie! For every I Love Plants Oodie sold, one tree is planted across Australia.</p>
                        <div className="flex items-center gap-2 mt-[32px]">
                            <button className="px-5 py-3 bg-green-900 rounded-md font-bold">Buy now</button>
                            <button className="px-5 py-3 bg-transparent rounded-md text-white">Learn more</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="overflow-hidden relative w-[500px] h-[500px] box-border p-[0px]">
                        <h1 className="text-8xl font-extrabold"><span className="opacity-20">DISCOUNT</span> 75% OFF! <span className="opacity-20">TDY ONLY</span></h1>
                    </div>
                    <div className="absolute px-6 py-6 bg-white left-5 bottom-5 rounded-md w-full">
                        <div className="flex justify-between gap-4">
                            <div>
                                <h4 className="text-orange-500 text-lg font-extrabold">Love Corn Festival &apos;20</h4>
                                <p className="text-[14px] mt-[16px] text-gray-800">
                                    Nothing beats a freshly pulled pint in your favourite pub—except maybe a freshly pulled pint in your very own home.
                                </p>
                                <div className="flex justify-between items-center mt-[16px]">
                                    <button className="px-4 py-3 text-[14px] font-bold bg-orange-100 text-orange-600 rounded-sm">See detail</button>
                                    <div className="flex items-center gap-2">
                                        <button className="px-2 py-3 text-orange-500 opacity-40">Prev</button>
                                        <button className="px-2 py-3 text-orange-500 opacity-40">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image src="https://images.unsplash.com/photo-1629666451102-2063a4dc74a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" width={400} height={400} className="rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero