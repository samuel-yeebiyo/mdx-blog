import { NextPage } from "next";
import styles from "@styles/posts.module.scss";
import { LargeCard, SmallCard } from "@/components/Cards/";
import { Categories } from "@/components/Categories";
import { getAllArticles, getCategories } from "@/lib/mdx";
import Head from "next/head";
import { useState, useRef } from "react";

const Posts: NextPage = ({ articles, categories }: any) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [current, setCurrent] = useState("");

  const setFilter = (category: string) => {
    if (category == current) {
      setCurrent("");
      setFilteredArticles(articles);
    } else {
      setCurrent(category);
      setFilteredArticles(
        articles.filter((item: any) => item.categories.includes(category))
      );
    }
  };

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>All Posts</h1>
          <div className={styles.cards}>
            {filteredArticles.map((article: any, idx: number) => (
              <SmallCard key={idx} article={article} />
            ))}
            {filteredArticles.map((article: any, idx: number) => (
              <SmallCard key={idx} article={article} />
            ))}
            {filteredArticles.map((article: any, idx: number) => (
              <SmallCard key={idx} article={article} />
            ))}
          </div>
        </div>
        <Categories
          categories={categories}
          setFilter={setFilter}
          current={current}
        />
      </div>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const allCategories = await getCategories();

  return {
    props: {
      articles: allArticles,
      categories: allCategories,
    },
  };
}
