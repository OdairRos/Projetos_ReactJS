import { Navbar } from "../components/header"
import {Main} from  "../components/MainContent"
import React from "react"




function Page(){
  const [theme, settheme] = React.useState(true)

  function handleClick(){
    settheme(!theme)
  }
  return(
    <div>
      <Navbar 
      darkMode={theme}
      toggleDarkMode={handleClick}
      />
      <Main 
      darkMode={theme}
      />
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
3