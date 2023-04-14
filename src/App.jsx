import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Works from './pages/Works'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='works' element={<Works></Works>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
      
  )
}

export default App
