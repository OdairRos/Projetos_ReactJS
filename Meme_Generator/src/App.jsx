import { useState } from 'react'
import './App.css'
import { Header } from '../components/Header'
import { Form } from '../components/MemeForm'
import { Footer } from '../components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Header/>
     <Form/>
     <Footer/>
   </div>
  )
}

export default App
