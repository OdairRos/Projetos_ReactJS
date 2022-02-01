import { useState } from 'react'
import { Header } from "../components/Header"
import { Card } from "../components/CardLocals"
import data from "./data"
import './App.css'

function App() {
  const cards = data.map(item=>
    <Card
      {...item}
    />
    
  )
  return (
    <div>
     <Header/>
     <div className="Card-list">
      {cards}
     </div>
    
    </div>
   
  )
}

export default App
