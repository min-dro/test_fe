import './App.css'
import BoardDetailComponent from './components/BoardDetailComponent'
import BoardEnrollFormComponent from './components/BoardEnrollFormCompoment'

import BoardListComponent from "./components/BoardListComponent"

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <br />
      <h1 align="center">익명 게시판</h1>

      <br />
      <br />
      
      <Routes>
        <Route path="/" element={ <BoardListComponent /> } />
        <Route path="/:boardNo" element={ <BoardDetailComponent /> } />
        <Route path="/enrollForm" element={ <BoardEnrollFormComponent /> } />
      </Routes>

    </div>
  )
}

export default App
