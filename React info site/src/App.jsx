import { Navbar } from "../components/header"
import {Main} from  "../components/MainContent"

function Page(){
  return(
    <div>
      <Navbar/>
      <Main/>
    </div>
  )
}

function App() {
  return (
    <div>
      {Page()}
    </div>
  )
}

export default App
