import React from 'react'
import Post from '../Post/Post'
import { useAppSelector } from '../../redux/hooks'
import { useGetTimelinePostQuery } from '../../redux/services/postApi';
import { IPost } from '../../types/type';
import Loading from '../Loading';

const LeftBox: React.FC = () => {
  const {user} = useAppSelector(state => state.auth);

  const userId = user && user._id;

  const {data, isLoading} = useGetTimelinePostQuery(userId);

  // console.log(data);

  let content; 

  if(isLoading) {
    content = (
      <Loading customClass='w-full'/>
    )
  }else {
    content = (
      data?.data.map((item: IPost) => (
        <Post key={item._id} item={item}/>
      ))
    )
  }
  

  return (
    <div className=' flex flex-col  gap-y-6'>
      {
        content
      }
    </div>
  )
}

export default LeftBox