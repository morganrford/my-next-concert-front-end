import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ConcertDetail from './components/ConcertDetail/ConcertDetail'
import ConcertForm from './components/ConcertForm/ConcertForm'
import ConcertList from './components/ConcertList/ConcertList'
import * as concertService from "./services/concertService"
import BandsForm from './components/BandsForm/BandsForm'

const App = () => {

  const [concerts, setConcerts] = useState([]);
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const fetchedConcerts = await concertService.index();
        if (fetchedConcerts.err) {
          throw new Error(fetchedConcerts.err)
        }
        setConcerts(fetchedConcerts);
      } catch (err) {
        console.log(err)
      }
    }
    fetchConcerts();
  })

  const handleSelect = (concert) => {
    setSelected(concert);
    setIsFormOpen(false);
  }

  const handleFormView = (concert) => {
    if (!concert._id) setSelected(null)
    setIsFormOpen(!isFormOpen)
  }

  const handleAddConcert = async (formData) => {
    try {
      const newConcert = await concertService.create(formData);

      if(newConcert.error) {
        throw new Error(newConcert.error)
      }

      setConcerts([newConcert, ...concerts])      
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateConcert = async (formData, concertId) => {
    try {
      const updatedConcert = await concertService.update(formData, concertId);

      if(updatedConcert.error) {
        throw new Error(updatedConcert.error)
      }

      const updatedConcertList = concerts.map((concert) => (
        concert._id !== updatedConcert._id ? concert : updatedConcert
    ))
      setPets(updatedConcertList)
      setSelected(updatedConcert)
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteConcert = async (concertId) => {
    try {
      const deletedConcert = await concertService.deleteConcert(concertId)

      if(deletedConcert.error) {
        throw new Error(deletedConcert.error)
      }
      setConcerts(concerts.filter((concert) => concert._id !== deletedConcert._id))
      setSelected(null)
      setIsFormOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

    const addConcert = (newConcertData) => {
    newConcertData._id = concerts.length + 1
    setConcerts([...concerts, newConcertData])
  }
  return (
    <>
      <NavBar />
      <h1>My Next Concert</h1>
      <Routes>
        <Route path = '/' element={<h2> Home Page</h2>} />
        <Route path = '/concerts/new' element= {<ConcertForm addConcert={addConcert} />} />
        <Route path='*'  element={<h2>Whoops, nothing to see here!</h2>} />
      </Routes>
      <ConcertDetail />
      <ConcertForm />
      <BandsForm />
      <ConcertList />
    </>
  )
}

export default App
