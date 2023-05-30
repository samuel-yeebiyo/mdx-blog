import styles from "./navbar.module.scss";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <Link href="/">S</Link>
        <div className={styles.items}>
          <Link href="/posts">Posts</Link>
          <a href="https://samuel-yeebiyo.tk" target="_blank">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};
