import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
import { Navbar } from './Navbar'

export const AppRouter = () => {
  return (
<BrowserRouter>

    <div>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/about' element={<AboutScreen />} />
            <Route exact path='/login' element={<LoginScreen />} />
            
        </Routes>

    </div>

</BrowserRouter>
  )
}
