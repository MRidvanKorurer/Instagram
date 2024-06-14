import React, { ReactNode } from 'react'
import Header from './Header'

interface IProps {
    children: ReactNode
}

const MainLayout: React.FC<IProps> = ({children}) => {
  return (
    <div className=' w-10/12 mx-auto text-white flex flex-col gap-10'>
        <Header />
        {children}
    </div>
  )
}

export default MainLayout