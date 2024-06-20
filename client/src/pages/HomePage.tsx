import React from "react";
import LeftBox from "../components/Home/LeftBox";
import RightBox from "../components/Home/RightBox";

const HomePage: React.FC = () => {
  return (
    <div className=" flex gap-x-20 mb-8 justify-between">
      <div className=" flex-[5] ">
        <LeftBox />
      </div>

      <div className=" flex-[2] ">
        <RightBox />
      </div>
    </div>
  );
};

export default HomePage;
