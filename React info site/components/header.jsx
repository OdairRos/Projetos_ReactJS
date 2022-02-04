export function Navbar(props){
  return(
    <header className="navbar-header">
       <nav  className={props.darkMode ? "nav dark": "nav light"}>
         <div className="nav">
          {Img(props.darkMode? 1:0)}
          <h3>FatosReactJs</h3>
         </div>
         <div className="toggler" >
              <p className="toggler--light">Light</p>
              <div 
                  className="toggler--slider"
                  onClick={props.toggleDarkMode}
              >
                  <div className="toggler--slider--circle"></div>
              </div>
              <p className="toggler--dark">Dark</p>
         </div>
      </nav>
    </header>
  )
}

function Img(value){
  return value===1? <img id="logo" src=".\src\react-logo-black.svg" /> : <img id="logo" src=".\src\react-logo-white.svg" />
}
   