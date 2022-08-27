import styles from './smallcard.module.scss'

export const SmallCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>

            </div>
            <div className={styles.text}>
                <div>
                    <p className={styles.title}>The Title Of The Post</p>
                    <p className={styles.description}>
                        This is the description section of the card. This will be a short note about what the article will be about. This is the description section of the card. This will be a short note about what the article will be about.
                        This is the description section of the card. This will be a short note about what the article will be about.
                    </p>
                </div>
                <p>Read more ---</p>
            </div>
        </div>
    )
}