/** @format */
'use client';
import ReviewCard from "./ReviewCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import useSWR from "swr";

const fetcher = async (url: string) => await fetch(url).then((res) => res.json());

const ClientReviews = () => {
  const { data, isLoading, error } = useSWR("/api/reviews", fetcher);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        Clients Reviews
      </div>
      <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
        {isLoading
          ? [1, 2, 3, 4, 5].map(() => (
              <ParagraphSkeleton className="w-80 md:w-96 h-full p-4 md:p-8" />
            ))
          : data?.map((data: any, key: number) => (
              <ReviewCard key={key} data={data} />
            ))}
      </div>
    </>
  );
};

export default ClientReviews;
