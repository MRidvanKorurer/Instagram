import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Avatar, Input} from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { handleClose, handleOpen } from '../../redux/slices/postModalSlice';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ridvan from "../../assets/ridvan.jpeg";
import CancelIcon from '@mui/icons-material/Cancel';


const Share: React.FC = () => {
    const {open} = useAppSelector(state => state.postModal);
    const dispatch = useAppDispatch();

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        // p: 4,
      };

  return (
    <div>
        <Modal
        open={open}
        onClose={() => dispatch(handleClose())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} className=" rounded-lg py-4 px-2 flex flex-col gap-y-5 border-none outline-none">
            <div className="flex justify-center items-center py-1 flex-col">
                    <Typography><span className=' font-bold tracking-wide text-xl'>Create New Post</span></Typography>
                    <div className=' w-full border-b'></div>
            </div>

            <div className=' flex justify-between items-center '>
                <div>
                    <Avatar src={ridvan} sx={{width: 55, height: 55}}/>
                </div>

                <div className=' w-full flex justify-center'>
                    <input 
                        className="border border-blue-500 rounded-xl p-2 w-2/3 outline-none"
                        type="text"
                        placeholder="Write a post."
                    />
                </div>

                <div>
                    <Button variant='contained' size='medium'>Paylaş</Button>
                </div>
            </div>

            <div className=' flex justify-between items-center select-none cursor-pointer'>
                <div className=' flex justify-center items-center gap-2'>
                    <CameraAltIcon sx={{width: 30, height:30}}/>
                    <p className=' font-semibold'>Fotoğraf</p>
                </div>
                <div className=' flex justify-center items-center gap-2'>
                    <OndemandVideoIcon sx={{width: 30, height:30}}/>
                    <p className=' font-semibold'>Video</p>
                </div>
                <div className=' flex justify-center items-center gap-2'>
                    <CalendarMonthIcon sx={{width: 30, height:30}}/>
                    <p className=' font-semibold'>Etkinlik</p>
                </div>
                <div className=' flex justify-center items-center gap-2'>
                    <ShortTextIcon sx={{width: 30, height:30}}/>
                    <p className=' font-semibold'>Yazı Yaz</p>
                </div>
            </div>

            <div className=' relative'>
                <img className=' rounded-lg h-[400px] w-full' src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <div className=' absolute top-2 right-2'>
                    <CancelIcon sx={{width: 25, height: 25}} color='error' className='cursor-pointer'/>
                </div>
            </div>
        </Box>
        </Modal>
  </div>
  )
}

export default Share