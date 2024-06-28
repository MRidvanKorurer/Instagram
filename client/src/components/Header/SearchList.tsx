import React from "react";
import { useGetSearchUserQuery } from "../../redux/services/userApi";
import SearchListItem from "./SearchListItem";
import { IUser } from "../../types/type";

interface IProps {
  username: string;
}

const SearchList: React.FC<IProps> = ({ username }) => {
  const { data } = useGetSearchUserQuery(username);

//   console.log(data?.data.length, "data");

  return (
    <>
      <div className=" absolute left-0 w-full right-0  mt-4 bg-gray-300 text-black text-sm rounded shadow shadow-white border-none py-1 ">

        {data?.data.length > 0 ? data?.data?.slice(0, 5).map((item: IUser) => (
          <SearchListItem key={item._id} item={item} />
        )) : <div className=" px-2"><p className=" font-bold">Kullanıcı Ara..</p></div> }
      </div>
    </>
  );
};

export default SearchList;
