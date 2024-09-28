import { FC, } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';


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

const TestNavigationBarComponent: FC<TestNavigationBarProps> = ({ title }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log('Serchig: ', data);
  }

  return (
    <>
      <div style={Style}>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='search' {...register("search")} />
          <button type='submit'>Search Btn</button>
        </form>

      </div>
    </>
  )
}

export default TestNavigationBarComponent