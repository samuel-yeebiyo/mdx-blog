import styles from './navbar.module.scss'
import Link from 'next/link'

export const NavBar = () =>{
    return (
        <nav className={styles.nav}>
            <div className={styles.items}>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
                <Link href="/">
                    <a>Categories</a>
                </Link>
                <Link href="/">
                    <a className={styles.logo}>S</a>
                </Link>
                <Link href="/">
                    <a>Latest</a>
                </Link>                
                <a 
                    href="https://samuel-yeebiyo.tk"
                    target='_blank'
                    >Portfolio</a>
            </div>
        </nav>
    )
}