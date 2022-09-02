import styles from './largecard.module.scss'
import Link from 'next/link'

export const LargeCard = ({article}:any) => {

    return (
        <div className={styles.card}>
            <Link href={`/posts/${article.slug}`}>
                <a>
                    <div className={styles.image}>
                        <img src={article?.image}/>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.title}>{article?.title}</p>
                        <p className={styles.description}>
                            {article?.description}
                        </p>
                    </div>
                    <p>Read more ---</p>
                </a>
            </Link>
        </div>
    )
}