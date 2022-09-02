import styles from './smallcard.module.scss'
import Link from 'next/link'

export const SmallCard = ({article}:any) => {

    console.log({article})

    return (
        <div className={styles.wrapper}>
            <Link href={`/posts/${article.slug}`}>
                <a className={styles.card}>
                    <div className={styles.image}>
                        <img src={article?.image}/>
                    </div>
                    <div className={styles.text}>
                        <div>
                            <h2 className={styles.title}>{article?.title}</h2>
                            <p className={styles.meta}>{article.readingTime}</p>
                            <p className={styles.description}>
                                {article?.description}
                            </p>
                        </div>
                        <p className={styles.more}>Read more ---</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}