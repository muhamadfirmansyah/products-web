import { ReactNode } from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'

const Layout = ({ children, isHero = false }: { children: ReactNode, isHero?: boolean }) => {
    return (
        <>
            <Navbar />

            { isHero && (
                <Hero />
            ) }

            <div className="max-w-5xl mx-auto">
                {children}
            </div>
        </>
    )
}

export default Layout