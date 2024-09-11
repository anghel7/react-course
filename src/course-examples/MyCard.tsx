import { useEffect, useState } from "react"
import MyButton from "./MyButton"

function MyCard() {
  const [title,setTitle] = useState("some value");
  useEffect(()=>{},[]);

  return (
    <>
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="content">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <button className="btn" onClick={()=> setTitle("Card Title")}>Change Title</button>
        <button className="btn">Cerrar</button>
        <MyButton name={'Aceptar'}/>
      </div>
    </>
  )
}

export default MyCard
