import React, { ReactNode } from 'react'
import Header from './Header'
import { useAppSelector } from '../redux/hooks';

interface IProps {
    children: ReactNode
}

const MainLayout: React.FC<IProps> = ({children}) => {

  const {isAuth} = useAppSelector(state => state.auth);

  return (
    <div className=' w-10/12 mx-auto text-white flex flex-col gap-10'>
        {isAuth && <Header />}
        {children}
    </div>
  )
}

export default MainLayout