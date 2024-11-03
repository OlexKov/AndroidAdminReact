import { Outlet } from "react-router-dom"

export const Content: React.FC = () => {
    return (
        <main className='flex-grow' >
            <Outlet />
        </main>
    )
}