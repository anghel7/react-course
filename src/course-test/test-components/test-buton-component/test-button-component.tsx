import { FC, } from 'react';

interface TestButtonProps{
  content:string,
  customClick?:any
}

const Style = {
  border: "1px solid #138d75",
  borderRadius: '4px',
  padding: '5px'
}

const TestButtonComponent: FC<TestButtonProps> = (props) => {

  return (
    <>
      <button type='button' style={Style} onClick={props.customClick}>{props.content}</button>
    </>
  )
}

export default TestButtonComponent