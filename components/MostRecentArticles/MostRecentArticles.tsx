import styles from './mostrecent.module.scss'
import { LargeCard } from "@/components/Cards"

export const MostRecentArticles = ({articles}:any) => { 

    console.log({articles})

    return (
        <div className={styles.container}>
            <h1>Most Recent Posts</h1>
            <div className={styles.layout}>
                {!!articles && articles.map((article:any)=>{
                    return <LargeCard article={article}/>

                })}
            </div>
        </div>
    )

}