import { NextPage } from "next";
import Image from "next/image";
import { TOC } from "@/components/TOC/TOC";
import styles from "./default.module.scss";

interface Props {
  children: any;
  title: any;
  description: any;
  data: any;
}

export const Default: NextPage<Props> = ({ children, data }) => {
  return (
    <div className={styles.default}>
      <div className={styles.image}>
        <Image
          alt="layout-image"
          width={1000}
          height={1000}
          src={data.image}
          className="w-full h-full top-0 left-0 object-cover"
        />
      </div>
      <div className={styles.meta}>
        <span>{data.readingTime} - </span>
        <span>0 Views</span>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          {children}
        </div>
        <div className={styles.toc}>
          <TOC source={children} />
        </div>
      </div>
    </div>
  );
};
