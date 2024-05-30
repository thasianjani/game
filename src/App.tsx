import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing-page/LandingPage'
import Home from './pages/home/Home'
import TicTacToe from './pages/tic-tac-toe/TicTacToe'
import RockPaperScissors from './pages/rock-paper-scissors/RockPaperScissors'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}>          
          <Route path='/' element={<LandingPage />} ></Route>
          <Route path='/tic-tac-toe' element={<TicTacToe />} ></Route>
          <Route path='/rock-paper-scissors' element={<RockPaperScissors />} ></Route>
          <Route path='*' element={<Navigate to={'/'} />} ></Route>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
