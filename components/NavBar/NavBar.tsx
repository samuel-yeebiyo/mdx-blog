import styles from "./navbar.module.scss";
import Link from "next/link";

/**
 * To do list
 *
 * nav link hover effects (color)
 */

export const NavBar = () => {
  return (
    <nav className={styles.nav_wrapper}>
      <div className="max-w-[1100px] w-full flex justify-between px-7">
        <Link href="/">
          <div className="w-[100px] h-full flex justify-center items-center">
            <img className="h-[75%]" src="./logo-light.png" />
          </div>
        </Link>
        <div className="flex items-center justify-center gap-16">
          <Link href="/posts">Posts</Link>
          <a href="https://samuel-yeebiyo.tk" target="_blank">
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};
