import { NextComponentType } from "next"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar: NextComponentType = () => {

    const router = useRouter()

    return (
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                <div className="flex items-center justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link href={'/'}>
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <span className="font-bold font-sans text-3xl h-8">Prodtr</span>
                                </a>
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">About</a>

                        <Link href="/products">
                            <a className={`${router.pathname.startsWith('/products') ? 'text-green-600' : 'font-medium text-gray-700 hover:text-gray-900'}`}>Product</a>
                        </Link>

                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">Service</a>

                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">Contact</a>
                    </div>
                </div>
                <div>
                    <div className="hidden md:block md:ml-10 md:pr-0 md:space-x-8">
                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900">Login</a>

                        <a href="#" className="font-medium text-gray-700 hover:text-gray-900 border-2 border-gray-200 px-4 py-3 rounded-sm">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar