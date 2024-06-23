import { Avatar, Button } from "@mui/material";
import React from "react";
import ridvan from "../../assets/ridvan.jpeg";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const ProfileHead: React.FC = () => {
  return (
    <div className=" border-b  py-4  border-gray-600 ">
      <div className=" flex md:justify-between justify-center md:items-start items-center gap-20 px-10 flex-col md:flex-row">
        <div>
          <Avatar src={ridvan} sx={{ width: 260, height: 260 }} />
        </div>

        <div className=" py-2 flex  flex-col gap-y-10">
            <div className=" flex justify-center items-center gap-5 cursor-pointer">
                <span className=" font-bold text-4xl">korurerridvan</span>
                <Button variant="contained" size="small">Düzenle</Button>
                <SettingsIcon />
                <LogoutIcon />
            </div>

            <div className=" flex justify-between items-center">
              <div className=" flex justify-start items-center gap-2">
                <span className=" font-bold">4</span>
                <p className=" text-gray-200">posts</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <span className=" font-bold">1</span>
                <p className=" text-gray-200">followers</p>
              </div>
              <div className=" flex justify-start items-center gap-2">
                <span className=" font-bold">1</span>
                <p className=" text-gray-200">followings</p>
              </div>
            </div>

            <div className=" flex flex-col ">
              <span className=" font-bold text-xl">korurerridvan</span>
              <p className=" tracking-wider">I m a Full-Stack Developer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
