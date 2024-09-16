import { BaseSyntheticEvent, FC, useRef, useState } from 'react';

interface MyControlledFormProps {
  name?: string;
}

const NoControlledForm:FC<MyControlledFormProps> = (props) => {

    const [name, setName] = useState("")
    const emailRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e:BaseSyntheticEvent)=>{
        setName(e.target.value)
        console.log('event>>', e);
    }

    const handleSubmit = (e:BaseSyntheticEvent)=>{
      e.preventDefault();
      if (emailRef && emailRef.current) {
        console.log(`Email ${emailRef.current.value}`);
      }
      
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" ref={emailRef} />
        <button type='submit'>Aceptar</button>
      </form>
    </>
  )
}

export default NoControlledForm