import React from "react";
export function Form(props){


  const [Allmemes, setAllMemes] = React.useState()

  const [meme , setmeme] = React.useState({
    memeUrl: "http://i.imgflip.com/1bij.jpg",
    TopText: "",
    BottomText: ""
  })

  const [Texts, setTexts] = React.useState({
    above: "",
    below: "",
    imageOn:true,
  })

  React.useEffect(()=>{

    async function getMemes(){
      const res = await  fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data)
    }
    getMemes()
    
  }, [])

  
  function GetRandomMeme(){
    const memesArray = Allmemes.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setmeme(prevMeme => ({
      ...prevMeme,
      memeUrl: memesArray[randomNumber].url
    }))
       
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
            placeholder="above text" 
            className="Form--Input"/>
        
          <input 
            type="text" 
            name="below" 
            id="below"
            value={Texts.below} 
            onChange={handleChange} 
            placeholder="below text" 
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