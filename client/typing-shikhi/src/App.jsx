import './App.css'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'

import KeyboardContextProvider from './context/KeyboardContextProvider'

import Practice from './pages/Practice'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import Stats from './pages/Stats'
import TypingTest from './pages/TypingTest'
import Options from './pages/Options'


function App() {

  return (
    <>
      <KeyboardContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Practice/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/leaderboard' element={<Leaderboard/>}/>
            <Route path='/stats' element={<Stats/>}/>
            <Route path='/test' element={<TypingTest/>}/>
            <Route path='/options' element={<Options/>}/>
          </Routes>
        </Layout>
      </KeyboardContextProvider>
    </>
  )
}

export default App
