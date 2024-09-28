import TestButtonComponent from '@/course-test/test-components/test-buton-component/test-button-component';
import TestCardComponent from '@/course-test/test-components/test-card-component/test-card-component';
import TestNavigationBarComponent from '@/course-test/test-components/test-navigation-bar-component/test-navigation-bar-component';
import { FC, } from 'react';

const TestView1Component: FC = (props) => {

  return (
    <>
      <TestNavigationBarComponent title={'Title Nav Bar'}></TestNavigationBarComponent>
      <TestCardComponent title={'Card title'} description={'Card Description'}></TestCardComponent>
      <TestButtonComponent content={'Content Button'}></TestButtonComponent>
    </>
  )
}

export default TestView1Component