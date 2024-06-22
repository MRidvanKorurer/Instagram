import React from 'react'
import ProfileHead from '../components/Profile/ProfileHead'
import ProfileBody from '../components/Profile/ProfileBody'

const ProfilePage: React.FC = () => {
  return (
    <div className=' w-6/12 mx-auto'>
      <ProfileHead />
      <ProfileBody />
    </div>
  )
}

export default ProfilePage