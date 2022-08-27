import styles from './morearticles.module.scss'
import { SmallCard } from '../Cards/SamllCard/SmallCard'

export const MoreArticles = () => {

    return(
        <div className={styles.container}>
            <p>More Articles</p>
            <div className={styles.layout}>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
            </div>
        </div>
    )

}