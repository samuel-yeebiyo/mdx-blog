import { SmallCard } from "@/components/Cards";

export const MoreArticles = ({ articles }: any) => {
  return (
    <div>
      <h1 className="text-base mb-7 font-bold md:text-xl">More Articles</h1>
      <div className="flex justify-between w-full gap-7 flex-col">
        {!!articles &&
          articles.map((article: any, idx: number) => {
            return <SmallCard key={idx} article={article} />;
          })}
        {!!articles &&
          articles.map((article: any, idx: number) => {
            return <SmallCard key={idx} article={article} />;
          })}
      </div>
    </div>
  );
};
