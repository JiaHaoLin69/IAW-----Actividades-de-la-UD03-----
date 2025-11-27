import React from 'react'
import Rutas from './assets/componentes/react-router-dom'
import { Header } from './assets/componentes/header.tsx'
import Footer from './assets/componentes/footer.tsx'
import './App.css'

function App() {
 return (
    <div className="App">
      <Header />
      <Rutas />
      <Footer />
    </div>
  )
}

export default App
