import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchList from "./SearchList";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Search: React.FC = () => {
  const [userName, setUserName] = useState<string>("");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <>
      <div className=" bg-gray-300 rounded w-64 flex justify-start items-center gap-x-2 px-2 py-2 relative">
        <SearchIcon className=" text-gray-700 text-lg" />
        <div className=" ">
          <ClickAwayListener onClickAway={handleClickAway}>
            <input
              onClick={handleClick}
              placeholder="Search…"
              className="outline-none border-none bg-gray-300 text-black p-1"
              onChange={(e) => setUserName(e.target.value)}
            />
          </ClickAwayListener>

          {open ? (
            <div>
              <SearchList username={userName} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Search;
