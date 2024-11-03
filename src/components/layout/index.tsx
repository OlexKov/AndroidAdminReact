import { Content } from "./content"
import { Footer } from "./footer"
import { Header } from "./header"
import { SideBar } from "./sidebar"

export const Layout: React.FC = () => {
    return (


        <div className='flex flex-1  h-screen' >
            <SideBar />
            <div className='w-full h-full flex flex-col justify-stretch overflow-y-auto' >
                <Header />
                <Content />
                <Footer />
            </div>
        </div>

    )
}