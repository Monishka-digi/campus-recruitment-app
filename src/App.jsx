import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layout from './components/Layout'
import Home from './components/Home'


const App = () => {
  return (
<>
<Routes>
    <Route path='/' element={<Home/>}/>
</Routes>
</>
  )
}

export default App