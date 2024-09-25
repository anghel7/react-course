import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import PokeInfo from './course-examples/poke-info'

import { Routes, Route } from "react-router-dom"
import PokeList from './course-examples/poke-list'
// import Home from './pages/home/Home'
// import ControlledForm from './course-examples/controlled-form'
// import NoControlledForm from './course-examples/no-controlled-form'

export function App() {
  return (
    <>
      {/* <div>
        <Routes>
          <Route path='/' element={<PokeInfo></PokeInfo>}></Route>
          <Route path='/view' element={<PokeInfo></PokeInfo>}></Route>
        </Routes>
      </div> */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <ModeToggle></ModeToggle>
        {/* <Home></Home> */}
        {/* <ControlledForm></ControlledForm> */}
        {/* <NoControlledForm></NoControlledForm> */}
        {/* <PokeList></PokeList> */}
        {/* <PokeInfo></PokeInfo> */}
        <Routes>
          <Route path='/' element={<PokeList></PokeList>}></Route>
          <Route path='/view/:id' element={<PokeInfo></PokeInfo>}></Route>
        </Routes>

      </ThemeProvider>
    </>

  )
}

export default App
