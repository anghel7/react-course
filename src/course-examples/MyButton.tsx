import { FC } from 'react';

interface MyButtonProps {
  name: string;
}

const MyButton:FC<MyButtonProps> = ({name}) => {

  return (
    <>
      <button>{name}</button>
    </>
  )
}

export default MyButton