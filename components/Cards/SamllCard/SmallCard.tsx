import Link from "next/link";
import Image from "next/image";

export const SmallCard = ({ article }: any) => {
  return (
    <div>
      <Link href={`/posts/${article.slug}`}>
        <div className="flex gap-5 flex-col sm:flex-row ">
          <div className="w-full md:w-1/2 aspect-video mb-5 md:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="small article image"
              width={640}
              height={360}
              src={article?.image}
              className="!w-full !h-full top-0 left-0 object-cover"
            />
          </div>
          <div className="flex flex-col flex-grow justify-between w-full">
            <div>
              <h2 className="text-base font-bold mb-2">{article?.title}</h2>
              <p className="text-xs mb-3">{article.readingTime}</p>
              <p className="text-sm mb-3">{article?.description}</p>
            </div>
            <p className="text-sm">Read more ---</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
