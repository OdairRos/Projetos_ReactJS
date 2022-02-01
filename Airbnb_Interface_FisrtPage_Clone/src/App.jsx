import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { GridImage } from '../components/GridImages';
import { Card } from '../components/CardImages'
import { Footer } from '../components/Footer'
import data from './data.js'

import './App.css'

function App() {
  const dados = data.map(item =>
    <Card
    id={item.id}
    {...item}
  />
     )

  return (
    <div>
      <Navbar/>
      <GridImage/>
      <section className="cards-list">
        {dados}
      </section>
      <Footer/>
    </div>
  )
}
export default App
