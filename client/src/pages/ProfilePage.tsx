import React from 'react'
import ProfileHead from '../components/Profile/ProfileHead'
import ProfileBody from '../components/Profile/ProfileBody'
import { useAppSelector } from '../redux/hooks'

const ProfilePage: React.FC = () => {
  const {user} = useAppSelector(state => state.auth);

  console.log(user,"user");
  return (
    <div className=' w-6/12 mx-auto'>
      <ProfileHead />
      <ProfileBody />
    </div>
  )
}

export default ProfilePage