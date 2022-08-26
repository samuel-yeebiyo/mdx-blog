import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"
import type {GetStaticProps} from 'next/types'

export const MainLayout = ({children}:any) => {

    return(
        <main>
            <NavBar/>
            {children}
            <Footer/>
        </main>
    )

}