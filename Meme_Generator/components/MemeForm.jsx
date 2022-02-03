import React from "react";
import data from "../src/data"
export function Form(props){
  const Allmemes = data.data.memes

  const [meme , setmeme] = React.useState({
    memeUrl: "",
    TopText: "",
    BottomText: ""
  })

  const [Texts, setTexts] = React.useState({
    above: "",
    below: "",
    imageOn:false,
  })

  function GetRandomMeme(){
    setmeme(
       {
        TopText: document.getElementById("above").value,
        bottomText: document.getElementById("below").value,
        memeUrl: Allmemes[Math.floor(Math.random() * Allmemes.length)].url  
    })

    setTexts(() =>({...Texts, imageOn: true}))
  }
  function handleChange(event){
    const {name, value} = event.target
      setTexts(prevTexts =>({...prevTexts, [name]: value}))
  }

  return(
    <div >
      <div className="Form">

          <input 
            type="text" 
            name="above" 
            id="above" 
            value={Texts.above} 
            onChange={handleChange}
            Placeholder="above text" 
            className="Form--Input"/>
        
          <input 
            type="text" 
            name="below" 
            id="below"
            value={Texts.below} 
            onChange={handleChange} 
            Placeholder="below text" 
            className="Form--Input"/>
     
        <input 
          type="submit" 
          name="below"
          className="btn" 
          id="BtnMeme"
          value="Get a meme image    🖼"
          onClick={GetRandomMeme}/>

      </div>

      <div className="center">
        <img className="Meme-Photo" src={meme.memeUrl} alt="" />
        <div className="text">
          <h2 className="meme--text top">{Texts.imageOn?  Texts.above : ""}</h2>
          <h2 className="meme--text bottom">{Texts.imageOn?  Texts.below : "" }</h2>
        </div>
      </div>
      
    </div>
    
  )
}