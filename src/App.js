import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

//components
import Header from './components/Header'
import Home from './pages/Home'
//pages
import Details from './pages/Details'
import Login from './pages/Login'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Details />} />
        <Route path='/login' element={<Login />} />
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
