/** @format */
"use client";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

import useSWR from "swr";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

const Portfolio = () => {
  const { isLoading, error, data } = useSWR("/api/portfolio", fetcher);

  return (
    <BannerLayout>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
        {isLoading
          ? [1, 2, 3, 4].map((_, ind) => (
              <ImageAndParagraphSkeleton
                key={ind}
                className={"w-full object-cover"}
              />
            ))
          : data?.map((data: any, key: number) => (
              <PortfolioCard key={key} data={data} />
            ))}
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Portfolio;
