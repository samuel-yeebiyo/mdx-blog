import styles from './mostrecent.module.scss'
import { LargeCard } from "../Cards/LargeCard/LargeCard"
import { SmallCard } from '../Cards/SamllCard/SmallCard'

export const MostRecentArticles = () => { 

    return (
        <div className={styles.container}>
            <p>Most Recent Posts</p>
            <div className={styles.layout}>
                <LargeCard/>
                <LargeCard/>
            </div>
        </div>
    )

}