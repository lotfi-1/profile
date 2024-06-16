/** @format */
'use client';
import RecommendationCard from "./RecommendationCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

import useSWR from "swr";

const fetcher = async (url: string) => await fetch(url).then((res) => res.json());

const Recommendations = () => {
  const { isLoading, error, data } = useSWR("/api/recommendations", fetcher);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        Recommendations
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4].map(() => (
              <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
            ))
          : data?.map((data: RecommendationCardProps, key: number) => (
              <RecommendationCard key={key} data={data} />
            ))}
      </div>
    </>
  );
};

export default Recommendations;
