/** @format */

"use client";

import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

import useSWR from "swr";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

function Background() {
  const { isLoading, error, data } = useSWR("/api/background", fetcher);

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>
          {isLoading
            ? [1, 2, 3].map((_, ind) => (
                <ParagraphSkeleton
                  key={ind}
                  className={"p-8 h-full w-full relative"}
                />
              ))
            : data &&
              data[0]?.eduCards?.map((data: any, key: number) => (
                <Edu_Card key={key} data={data} />
              ))}
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
              Experience
            </div>

            {isLoading
              ? [1, 2, 3].map((_, ind) => (
                  <ParagraphSkeleton
                    key={ind}
                    className={"p-8 h-full w-full relative"}
                  />
                ))
              : data &&
                data[1]?.expCards?.map((data: any, key: number) => (
                  <Exp_Card key={key} data={data} />
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
