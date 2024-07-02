import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ridvan from "../../assets/ridvan.jpeg";
import { IPost } from '../../types/type';
import { useGetSingleUserIdQuery } from '../../redux/services/userApi';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-timeago'
import turkishStrings from 'react-timeago/lib/language-strings/tr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import { usePostDeleteMutation, usePostLikeDislikeMutation } from '../../redux/services/postApi';
import {toast} from "react-toastify";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



interface IProps {
    item: IPost
}


const Post: React.FC<IProps> = ({item}) => {

    const userId = item && item.userId;
    const {data} = useGetSingleUserIdQuery(userId);
    const [postLikeDislike] = usePostLikeDislikeMutation();
    const [postDelete] = usePostDeleteMutation();

    const [like, setLike] = useState<number>(item.likes.length);
    const [isLiked, setIsLiked] = useState<boolean>(false);


    const formatter = buildFormatter(turkishStrings);

    const user = data?.data;

    // console.log(user);
    // console.log(item,"item")


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const ILikeData = {
        userId,
        postId: item._id
    }

    const handleClickLikeDislikeFunc = async () => {
        try {
            await postLikeDislike(ILikeData).unwrap()
                .then((res) => {
                    // console.log(res)
                    setLike(isLiked ? like - 1 : like + 1 );
                    setIsLiked(!isLiked);
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }


    const handleClickDeletePost = async () => {
       try {
            if(window.confirm("Are you sure?")) {
                await postDelete(ILikeData).unwrap()
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
       } catch (error) {
            console.log(error);
       }
    }

    useEffect(() => {
        setIsLiked(item.likes.includes(user?._id))
    }, [user?._id, item._id]);

// console.log(like);
  return (
    <div className=' border border-gray-600 flex flex-col gap-y-4'>
        <div className=' flex justify-between items-center p-4'>
            <div>
            <Link to={"/profile/"+user?.username}>
                <div className=' flex justify-start items-center gap-x-3 cursor-pointer'>
                    
                    <Avatar src={ridvan} sx={{fontSize: 100}}/>
                    <p className=' font-semibold text-white'>{user?.fullname}</p>
                </div>
            </Link>
            </div>

            <div className=' cursor-pointer'>
                <MoreHorizIcon fontSize='large' onClick={handleClick} />
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                    <IconButton aria-label="delete" color='error'>
                        <DeleteIcon onClick={handleClickDeletePost}/>
                    </IconButton>
                    </MenuItem>
                </Menu>
            </div>
        </div>

        <div className=' w-full h-[500px]'>
            <img className=' w-full h-full object-center' src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        </div>

        <div className=' p-4 flex flex-col gap-y-3'>
            <div className=' flex justify-start items-center gap-x-2 cursor-pointer'>
                <FavoriteIcon className={`${isLiked && "text-red-600"}`} onClick={handleClickLikeDislikeFunc}/>
                <span>{like > 0 ? like : 0} like</span>
            </div>

            <div className=' flex gap-x-3'>
                <Link to={"/profile/"+user?.username} className=' font-bold text-white'>{user?.fullname}</Link>
                <p className=' font-light'>{item.description}</p>
            </div>

            <div>
                <span className=' font-light text-gray-400'><TimeAgo date={item.createdAt} formatter={formatter} /></span>
            </div>
        </div>
    </div>
  )
}

export default Post;