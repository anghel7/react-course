import { FC, } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';


interface TestNavigationBarProps {
  title: string
}

const Style = {
  border: '1px solid blue',
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '10px',
  marginLeft: '10px'
}

const StyleNav = {
  display: 'flex',
  gap: '5px'
}


const TestNavigationBarComponent: FC<TestNavigationBarProps> = ({ title }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Serchig: ', data);
  }

  return (
    <>
      <div style={Style}>
        <div style={StyleNav}>
          <h1>{title}</h1>
          <Link to={'/test/view1'} style={{border: '2px solid green'}}>View 1</Link>
          <Link to={'/test/view2'} style={{border: '2px solid green'}}>View 2</Link>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='search' {...register("search")} />
          <button type='submit'>Search Btn</button>
        </form>

      </div>
    </>
  )
}

export default TestNavigationBarComponent