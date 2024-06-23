import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import ridvan from "../../assets/ridvan.jpeg";
import { useAppDispatch } from '../../redux/hooks';
import { handleOpen } from '../../redux/slices/postModalSlice';
import { useNavigate } from 'react-router-dom';


const Icons: React.FC = () => {
  // const {open} = useAppSelector(state => state.postModal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // console.log(open);

  return (
    <div className=' flex gap-x-5 justify-center items-center cursor-pointer'>
        <HomeIcon sx={{fontSize: 32}} onClick={() => navigate("/")}/>
        <ChatIcon sx={{fontSize: 30}} onClick={() => navigate("/messengar")}/>
        <AddIcon sx={{fontSize: 32}} onClick={() => dispatch(handleOpen())} />

        <Avatar
            alt="Remy Sharp"
            src={ridvan}
            sx={{ width: 46, height: 46 }}
            onClick={() => navigate("/profile")}
        />
    </div>
  )
}

export default Icons