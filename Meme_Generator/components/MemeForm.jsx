import React from "react";
import data from "../src/data"
export function Form(props){
  const memes = data.data.memes
  function GetRandomMeme(){
    
    return item[Math.floor(Math.random() * item.length)]
    
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
    </div>
    
  )
}