import styles from './smallcard.module.scss'
import Link from 'next/link'

export const SmallCard = ({article}:any) => {
    return (
        <div>
            <Link href={`/posts/${article.slug}`}>
                <a className={styles.card}>
                    <div className={styles.image}>
                        <img src={article?.image}/>
                    </div>
                    <div className={styles.text}>
                        <div>
                            <p className={styles.title}>{article?.title}</p>
                            <p className={styles.description}>
                                {article?.description}
                            </p>
                        </div>
                        <p>Read more ---</p>
                    </div>
                </a>
            </Link>
        </div>
    )
}