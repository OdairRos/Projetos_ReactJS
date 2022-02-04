export function Navbar(){
  return(
    <header className="navbar-header">
       <nav className="nav">
          {Img()}
          <h3>FatosReactJs</h3>
      
          <h4>React Course - Projects 1</h4>
      </nav>
    </header>
  )
}

function Img(){
  return <img id="logo" src="src\react-logo-vector-1.svg" />
}
   