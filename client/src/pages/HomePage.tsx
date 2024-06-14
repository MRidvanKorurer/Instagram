import React from "react";
import LeftBox from "../components/Home/LeftBox";
import RightBox from "../components/Home/RightBox";

const HomePage: React.FC = () => {
  return (
    <div className=" flex gap-x-10 mb-8">
      <div className=" flex-[3] ">
        <LeftBox />
      </div>

      <div className=" flex-[2]">
        <RightBox />
      </div>
    </div>
  );
};

export default HomePage;
