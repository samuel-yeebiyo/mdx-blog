import styles from './navbar.module.scss'
import Link from 'next/link'

export const NavBar = () =>{
    return (
        <nav className={styles.nav_wrapper}>
            <div className={styles.nav}>
                <Link href="/">
                    <a className={styles.logo}>S</a>
                </Link>
                <div className={styles.items}>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>              
                    <a 
                        href="https://samuel-yeebiyo.tk"
                        target='_blank'
                        >Portfolio</a>
                </div>
            </div>
        </nav>
    )
}