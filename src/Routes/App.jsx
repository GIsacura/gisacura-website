//React
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Home from '../Pages/Home'

//Components
import Header from '../Components/Header'
import Layout from '../Containers/Layout'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
