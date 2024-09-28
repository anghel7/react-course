import { FC, } from 'react';

interface TestCardBarProps{
  title:string,
  description:string
}

const Style = {
  border: '1px solid red',
  width: '400px'
}



const TestCardComponent: FC<TestCardBarProps> = ({title, description}) => {

  return (
    <>
      <div style={Style}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}

export default TestCardComponent