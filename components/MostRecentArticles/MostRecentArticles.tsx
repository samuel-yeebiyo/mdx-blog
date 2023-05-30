import { LargeCard } from "@/components/Cards";

export const MostRecentArticles = ({ articles }: any) => {
  return (
    <div className="mb-12">
      <h1 className="text-base mb-7 font-bold md:text-xl">Most Recent Posts</h1>
      <div className="flex justify-between flex-col w-full gap-7 sm:flex-row">
        {!!articles &&
          articles.map((article: any, idx: number) => {
            return <LargeCard key={idx} article={article} />;
          })}
      </div>
    </div>
  );
};
