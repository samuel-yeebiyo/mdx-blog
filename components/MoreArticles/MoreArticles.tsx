import styles from './morearticles.module.scss'
import { SmallCard } from '@/components/Cards'
import Link from 'next/link'

export const MoreArticles = ({articles}:any) => {

    return(
        <div className={styles.container}>
            <h1>More Articles</h1>
            <div className={styles.layout}>
                {!!articles && articles.map((article:any)=>{
                    return <SmallCard article={article}/>
                })}
                {!!articles && articles.map((article:any)=>{
                    return <SmallCard article={article}/>
                })}
            </div>
            <Link href="/posts/" scroll={true}>
                <a className={styles.more}>More Posts</a>
            </Link>
        </div>
    )

}