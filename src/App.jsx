import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ConcertDetail from './components/ConcertDetail/ConcertDetail'
import ConcertForm from './components/ConcertForm/ConcertForm'
import ConcertList from './components/ConcertList/ConcertList'

function App() {

  return (
    <>
      <NavBar />
      <h1>My Next Concert</h1>
      <ConcertDetail />
      <ConcertForm />
      <ConcertList />
    </>
  )
}

export default App
