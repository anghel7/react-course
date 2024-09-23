import './App.css'

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'
import PokeInfo from './course-examples/poke-info'
// import PokeList from './course-examples/poke-list'
// import Home from './pages/home/Home'
// import ControlledForm from './course-examples/controlled-form'
// import NoControlledForm from './course-examples/no-controlled-form'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      {/* <Home></Home> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <NoControlledForm></NoControlledForm> */}
      {/* <PokeList></PokeList> */}
      <PokeInfo></PokeInfo>
    </ThemeProvider>
  )
}

export default App
