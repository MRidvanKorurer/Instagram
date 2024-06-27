import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC = () => {
  return (
    <>
      <div className=" bg-gray-300 rounded w-64 flex justify-start items-center gap-x-2 px-2 py-2">
        <SearchIcon className=" text-gray-700 text-lg"/>
        <input placeholder="Search" type="text" className=" !border-none p-1 text-black h-full bg-gray-300 !outline-none w-full rounded " />
      </div>
    </>
  );
};

export default Search;
