import styles from "./categories.module.scss";
import { useState } from "react";

export const Categories = ({ categories, setFilter, current }: any) => {
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <div className={styles.layout}>
        <div className={styles.categories_container}>
          {categories?.map((item: any, idx: number) => (
            <p
              key={idx}
              className={
                current == item
                  ? [styles.current, styles.category].join(" ")
                  : styles.category
              }
              onClick={() => {
                setFilter(item);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
