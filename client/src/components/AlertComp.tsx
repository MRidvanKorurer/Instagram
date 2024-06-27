import React from 'react'
import Alert from '@mui/material/Alert';


interface IProps {
  message: string
}

const AlertComp: React.FC<IProps> = ({message}) => {
  return (
    <div className=' w-full h-screen flex justify-center items-start'>
      <Alert severity="error">{message}</Alert>
    </div>
  )
}

export default AlertComp;