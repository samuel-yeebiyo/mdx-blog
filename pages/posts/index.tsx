import { NextPage } from "next";
import styles from '@styles/posts.module.scss'
import { LargeCard } from "@/components/Cards/"
import { Categories } from "@/components/Categories";

const Posts : NextPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>All Posts</h1>
                {/* <div className={styles.cards}>
                    {[0,0,0,0,0,0,0,0,].map(()=>(
                        <LargeCard/>
                    ))}
                </div> */}
            </div>
            <Categories/>
            
        </div>
    )
}

export default Posts