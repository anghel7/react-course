import { BaseSyntheticEvent, FC, useState } from 'react';

interface MyControlledFormProps {
  name?: string;
}

const ControlledForm:FC<MyControlledFormProps> = (props) => {

    const [name, setName] = useState("")

    const handleChange = (e:BaseSyntheticEvent)=>{
        setName(e.target.value)
        console.log('event>>', e);
    }

  return (
    <>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange} />
        <label htmlFor="emai">Email</label>
        <input type="email" name="emai" id="emai" />
      </form>
    </>
  )
}

export default ControlledForm