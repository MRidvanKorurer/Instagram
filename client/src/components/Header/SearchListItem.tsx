import React from "react";
import { Avatar } from "@mui/material";
import ridvan from "../../assets/ridvan.jpeg";
import { IUser } from "../../types/type";
import { useNavigate } from "react-router-dom";

interface IProps {
    item: IUser
}

const SearchListItem: React.FC<IProps> = ({item}) => {
    
    
    const navigate = useNavigate();
    
    const handleClickGoToProfile = (username: string) => {
        navigate(`/profile/${username}`)
    }
    
  return (
    <div className=" flex justify-start items-start gap-x-2 hover:bg-gray-500 p-2 cursor-pointer transition-all" onClick={()=>handleClickGoToProfile(item.username)}>
        <Avatar alt="Remy Sharp" sx={{ width: 39, height: 39 }} src={ridvan} />
        <div className=" flex flex-col gap-y-0 m-0">
            <p className=" font-bold">{item.username}</p>
            <p>{item.fullname}</p>
        </div>

    </div>
  );
};

export default SearchListItem;
