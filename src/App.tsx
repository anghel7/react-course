import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import PokeInfo from './course-examples/poke-info'

import { Routes, Route } from "react-router-dom"
import PokeList from './course-examples/poke-list'
import CountryListComponent from './pages/home/components/countryListComponent/CountryListComponent'
import CountryDetailComponent from './pages/home/components/countryDetailComponent/CountryDetailComponent'
import CountryFormComponent from './pages/home/components/countryFormComponent/CountryFormComponent'
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

        <div className='main-header'>
          <h1 className='text-2xl'>Where in the world?</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ModeToggle></ModeToggle>
            <h1>Mode</h1>
          </div>
        </div>

        {/* <div style={{ display: 'flex', alignItems:'center', gap:'10px' }}>
          <ModeToggle></ModeToggle>
          <h3>Mode</h3>
        </div> */}

        {/* <Home></Home> */}
        {/* <ControlledForm></ControlledForm> */}
        {/* <NoControlledForm></NoControlledForm> */}
        {/* <PokeList></PokeList> */}
        {/* <PokeInfo></PokeInfo> */}
        <Routes>
          <Route path='/pokelist' element={<PokeList></PokeList>}></Route>
          <Route path='/view/:id' element={<PokeInfo></PokeInfo>}></Route>
          <Route path='/' element={<CountryListComponent></CountryListComponent>}></Route>
          <Route path='/country/detail/:countryIndex' element={<CountryDetailComponent></CountryDetailComponent>}></Route>
          <Route path='/country/form' element={<CountryFormComponent></CountryFormComponent>}></Route>
        </Routes>

      </ThemeProvider>
    </>

  )
}

export default App
