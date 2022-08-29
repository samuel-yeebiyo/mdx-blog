import styles from './morearticles.module.scss'
import { SmallCard } from '@/components/Cards'

export const MoreArticles = ({more}:any) => {

    return(
        <div className={styles.container}>
            <h1>More Articles</h1>
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