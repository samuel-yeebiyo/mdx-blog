import styles from "./largecard.module.scss";
import Link from "next/link";
import Image from "next/image";

// To do
/**
 * Add hover effects (title color and image transition)
 * Add read more collapsible
 */

export const LargeCard = ({ article }: any) => {
  return (
    <div className="w-full">
      <Link href={`/posts/${article.slug}`}>
        <div className="w-full aspect-video mb-5 rounded-lg overflow-hidden">
          <Image
            alt="article image"
            width={500}
            height={500}
            src={article?.image}
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
        <div className="flex flex-col mb-3">
          <h2 className="text-base font-bold mb-2">{article?.title}</h2>
          <p className="text-xs mb-3">{article.readingTime}</p>
          <p className="text-sm mb-3">{article?.description}</p>
        </div>
        <p className="text-sm">Read more...</p>
      </Link>
    </div>
  );
};
