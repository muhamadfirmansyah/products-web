import { NextComponentType } from 'next'
import Navbar from '../Navbar'

const Layout: NextComponentType = ({ children }) => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </>
    )
}

export default Layout