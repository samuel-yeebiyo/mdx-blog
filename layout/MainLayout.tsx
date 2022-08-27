import { NavBar } from "../components/NavBar/NavBar"
import { Footer } from "../components/Footer/Footer"
import type {GetStaticProps} from 'next/types'
import styles from './mainlayout.module.scss'

export const MainLayout = ({children}:any) => {

    return(
        <main>
            <NavBar/>
                <div className={styles.container}>
                    {children}
                </div>
            <Footer/>
        </main>
    )

}