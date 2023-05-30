import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { MostRecentArticles } from "../components/MostRecentArticles/MostRecentArticles";
import { MoreArticles } from "../components/MoreArticles/MoreArticles";
import { Categories } from "../components/Categories/Categories";
import { getAllArticles, getCategories } from "@/lib/mdx";
import { useState } from "react";

const Home: NextPage = ({ articles, mostRecent, categories }: any) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [current, setCurrent] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Blog | Samuel Yeebiyo</title>
        <meta name="description" content="Check out my blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <MostRecentArticles articles={mostRecent} />
        <div className={styles.more_content}>
          <MoreArticles articles={articles} />
          {/* <Categories categories={categories}/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const mostRecent = [allArticles[0], allArticles[1]];
  const more = allArticles.map((article, idx) => {
    if (idx !== 0 && idx !== 1) {
      return article;
    }
  });
  const allCategories = await getCategories();

  return {
    props: {
      articles: allArticles,
      mostRecent,
      categories: allCategories,
      // more
    },
  };
}
