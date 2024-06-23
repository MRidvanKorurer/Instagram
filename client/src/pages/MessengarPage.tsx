import React from 'react'
import Left from '../components/Messengar/Left';
import Middle from '../components/Messengar/Middle';
import Right from '../components/Messengar/Right';

const MessengarPage: React.FC = () => {
  return (
    <div className=' flex w-10/12 mx-auto h-[700px] rounded-xl border-gray-600 shadow-lg shadow-gray-600'>
        <div className=' flex-1 p-4 bg-gray-500 bg-opacity-10'>
            <Left />
        </div>

        <div className=' flex-[2] p-4 bg-gray-500 bg-opacity-50'>
            <Middle />
        </div>

        <div className=' flex-1 p-4 bg-gray-500 bg-opacity-10'>
            <Right />
        </div>
    </div>
  )
}

export default MessengarPage;