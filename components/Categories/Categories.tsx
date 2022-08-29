import styles from './categories.module.scss'

export const Categories = () => {

    return(
        <div className={styles.container}>
            <h1>Categories</h1>
            <div className={styles.layout}>
                <div className={styles.categories_container}>
                    {[0,0,0,0,].map(()=>(
                        <p className={styles.category}>Category</p>
                    ))}
                </div>
            </div>
        </div>
    )
}