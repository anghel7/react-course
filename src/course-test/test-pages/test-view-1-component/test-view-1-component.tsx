import TestButtonComponent from '@/course-test/test-components/test-buton-component/test-button-component';
import TestCardComponent from '@/course-test/test-components/test-card-component/test-card-component';
import TestNavigationBarComponent from '@/course-test/test-components/test-navigation-bar-component/test-navigation-bar-component';
import { FC, useState, } from 'react';

const TestView1Component: FC = (props) => {
  const [counter, setCounter] = useState<number>(0);
  const handleClick = ()=>{
    setCounter(v=>v+1)
  }
  return (
    <>
      <TestNavigationBarComponent title={'Title Nav Bar'}></TestNavigationBarComponent>
      <TestCardComponent title={'Card title'} description={'Card Description'}></TestCardComponent>
      <TestButtonComponent content={'Content Button'}></TestButtonComponent>

      <h1>Counter using State:</h1>
      <p><strong>conter: {counter}</strong>{}</p>
      <TestButtonComponent content={'Increment counter'} customClick={handleClick}></TestButtonComponent>
    </>
  )
}

export default TestView1Component