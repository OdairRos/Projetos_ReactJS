import React from "react";
import data from "../src/data"
export function Form(props){
  const Allmemes = data.data.memes

  const [meme , setmeme] = React.useState({
    memeUrl: "",
    TopText: "",
    BottomText: ""
  })

  function GetRandomMeme(){
    setmeme(
       {
        TopText: document.getElementById("above").value,
        bottomText: document.getElementById("below").value,
        memeUrl: Allmemes[Math.floor(Math.random() * Allmemes.length)].url
    })
    

  }

  return(
    <div >
      <div className="Form">
        <input 
          type="text" 
          name="above" 
          id="above" 
          Placeholder="above text" 
          className="Form--Input"/>
       
        <input 
          type="text" 
          name="below" 
          id="below" 
          Placeholder="below text" 
          className="Form--Input"/>
       
        <input 
          type="submit" 
          name="below"
          className="btn" 
          value="Get a meme image    🖼"
          onClick={GetRandomMeme}/>
      </div>

      <div className="center">
        <img className="Meme-Photo" src={meme.memeUrl} alt="" />
      </div>
      
    </div>
    
  )
}