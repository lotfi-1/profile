/** @format */
'use client';
import ExpertiseCard from "./ExpertiseCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());


const MyExpertise = () => {
    const { isLoading, error, data } = useSWR("api/expertise", fetcher);
//   const [background, setBackground] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/api/expertise");
//       const data = await res.json();
//       setBackground(data);
//     };

//     fetchData();
//   }, []);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Expertise
      </div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map(() => (
              <ParagraphSkeleton className={"space-y-2 p-8"} />
            ))
          : data?.map((data: any, key: number) => (
              <ExpertiseCard key={key} data={data} />
            ))}
      </div>
    </>
  );
};

export default MyExpertise;
