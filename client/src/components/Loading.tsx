import { CircularProgress } from '@mui/material'
import React from 'react'


interface IProps {
    customClass: string
}

const Loading: React.FC<IProps> = ({customClass}) => {
    

    // console.log(typeof(customClass),"customClass");
  return (
    <div className={customClass}>
        <CircularProgress color="secondary" style={{width: 20, height: 20}}/>
    </div>
  )
}

export default Loading