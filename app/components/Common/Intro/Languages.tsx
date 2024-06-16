/** @format */

import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
  const [arabic, setArabic] = useState(0);
  const [french, setFrench] = useState(0);
  const [english, setEnglish] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (arabic < 98) {
        setArabic((prevCount) => prevCount + 1);
      }
      if (english < 70) {
        setEnglish((prevCount) => prevCount + 1);
      }
      if (french < 50) {
        setFrench((prevCount) => prevCount + 1);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [arabic, french, english]);
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Languages</span>
        <div className="flex flex-row flex-wrap items-center justify-center space-x-6">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#00A8A8"
              type="circle"
              percent={arabic}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">Arabic</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#00A8A8"
              type="circle"
              percent={english}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">English</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <Progress
              strokeColor="#00A8A8"
              type="circle"
              percent={french}
              size={75}
            />
            <span className="text-xs font-bold text-Snow">French</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
