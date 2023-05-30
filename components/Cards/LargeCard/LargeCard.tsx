import styles from "./largecard.module.scss";
import Link from "next/link";

export const LargeCard = ({ article }: any) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${article.slug}`}>
        <div className={styles.image}>
          <img src={article?.image} />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>{article?.title}</h2>
          <p className={styles.meta}>{article.readingTime}</p>
          <p className={styles.description}>{article?.description}</p>
        </div>
        <p className={styles.more}>Read more ---</p>
      </Link>
    </div>
  );
};
