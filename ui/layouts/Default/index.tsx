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
      <div className="rounded-xl overflow-hidden mt-5 w-full mb-4">
        <Image
          alt="layout-image"
          width={1000}
          height={1000}
          src={data.image}
          className="w-full top-0 left-0 object-cover"
        />
      </div>
      <div className="mb-1 text-xs">
        <span>{data.readingTime} - </span>
        <span>0 Views</span>
      </div>
      <div className="flex justify-between">
        <div className={styles.content + " max-w-full md:max-w-[70%]"}>
          <h1 className="font-bold mb-5">{data.title}</h1>
          {children}
        </div>
        <div className={styles.toc}>
          <TOC source={children} />
        </div>
      </div>
    </div>
  );
};
