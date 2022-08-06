import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

//components
import Header from './components/Header'
import Home from './components/Home'
//pages
import Details from './pages/Details'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Details />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
