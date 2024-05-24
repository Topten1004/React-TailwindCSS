import Footer from "../Footer"
import Header from "../Header"
import LeftNav from "../LeftNav"
import Keygen from "../Keygen"

const Layout = ({ children }) => {
    return (    
        <div>
            <Header />
            <div className="flex">
                <div className="w-[200px]">
                    <LeftNav />
                </div>
                <div className="!flex-grow bg-white">
                    <Keygen />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout