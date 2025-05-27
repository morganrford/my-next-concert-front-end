import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import ConcertDetail from "./components/ConcertDetail/ConcertDetail";
import HomePage from "./components/HomePage/HomePage";
import ConcertForm from "./components/ConcertForm/ConcertForm";
import ConcertList from "./components/ConcertList/ConcertList";
import * as concertService from "./services/concertService";
import * as bandService from "./services/bandService";
import BandsForm from "./components/BandsForm/BandsForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
import BandsList from "./components/BandsList/BandsList";
import BandDetail from "./components/BandDetail/BandDetail";
import { useNavigate } from 'react-router'
import Footer from './components/Footer/Footer';

const App = () => {
  const [concerts, setConcerts] = useState([]);
  const [bands, setBands] = useState([]);

  const [selectedConcert, setSelectedConcert] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const navigate = useNavigate()

  //concerts
  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const fetchedConcerts = await concertService.index();
        if (fetchedConcerts.err) {
          throw new Error(fetchedConcerts.err);
        }
        setConcerts(fetchedConcerts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchConcerts();
  }, [concerts]);

  const handleSelectConcert = (concert) => {
    setSelectedConcert(concert);
    setIsFormOpen(false);
  };

  const handleConcertFormView = (concert) => {
    if (!concert._id) setSelectedConcert(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddConcert = async (formData) => {
    try {
      const newConcert = await concertService.create(formData);
      console.log(newConcert);
      if (newConcert.error) {
        throw new Error(newConcert.error);
      }

      setConcerts([newConcert, ...concerts]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateConcert = async (formData, concertId) => {
    try {
      const updatedConcert = await concertService.update(formData, concertId);

      if (updatedConcert.error) {
        throw new Error(updatedConcert.error);
      }

      const updatedConcertList = concerts.map((concert) =>
        concert._id !== updatedConcert._id ? concert : updatedConcert
      );
      setConcerts(updatedConcertList);
      setSelectedConcert(updatedConcert);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteConcert = async (concertId) => {
    try {
      const deletedConcert = await concertService.deleteConcert(concertId);

      if (deletedConcert.error) {
        throw new Error(deletedConcert.error);
      }
      setConcerts(
        concerts.filter((concert) => concert._id !== deletedConcert._id)
      );
      setSelectedConcert(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
    navigate('/concerts')
  };

  //bands
  useEffect(() => {
    const fetchBands = async () => {
      try {
        const fetchedBands = await bandService.index();
        if (fetchedBands.err) {
          throw new Error(fetchedBands.err);
        }
        setBands(fetchedBands);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBands();
  }, [bands]);

  const handleSelectBand = (band) => {
    setSelectedBand(band);
    setIsFormOpen(false);
  };

  const handleBandFormView = (band) => {
    if (!band._id) setSelectedBand(null);
    setIsFormOpen(!isFormOpen);
    
  };

  const handleAddBand = async (formData) => {
    try {
      const newBand = await bandService.create(formData);
      console.log(newBand);
      if (newBand.error) {
        throw new Error(newBand.error);
      }

      setBands([newBand, ...bands]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateBand = async (formData, bandId) => {
    try {
      const updatedBand = await bandService.update(formData, bandId);

      if (updatedBand.error) {
        throw new Error(updatedBand.error);
      }

      const updatedBandsList = bands.map((band) =>
        band._id !== updatedBand._id ? band : updatedBand
      );
      setBands(updatedBandsList);
      setSelectedBand(updatedBand);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBand = async (bandId) => {
    try {
      const deletedBand = await bandService.deleteBand(bandId);

      if (deletedBand.error) {
        throw new Error(deletedBand.error);
      }
      setBands(bands.filter((band) => band._id !== deletedBand._id));
      setSelectedBand(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
    navigate('/bands')
  };

  return (
    <div className='app'>
      <NavBar />

      <div className='content'>
      <h1>My Next Concert</h1>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/" element={<HomePage />} />

        <Route
          path="/concerts"
          element={
            <ConcertList
              concerts={concerts}
              handleSelectConcert={handleSelectConcert}
              handleConcertFormView={handleConcertFormView}
              isFormOpen={isFormOpen}
            />
          }
        />

        <Route
          path="/concerts/new"
          element={
            <ConcertForm
              handleAddConcert={handleAddConcert}
              selectedConcert={selectedConcert}
              handleUpdateConcert={handleUpdateConcert}
            />
          }
        />

        <Route
          path="/concerts/:concertId"
          element = {isFormOpen ? <ConcertForm handleAddConcert={handleAddConcert} selectedConcert={selectedConcert} handleUpdateConcert={handleUpdateConcert}/> : <ConcertDetail selectedConcert={selectedConcert} handleConcertFormView={handleConcertFormView} handleDeleteConcert={handleDeleteConcert}/>}
        />

        <Route
          path="/bands"
          element={
            <BandsList
              bands={bands}
              handleSelectBand={handleSelectBand}
              handleBandFormView={handleBandFormView}
              isFormOpen={isFormOpen}
            />
          }
        />
        <Route
          path="/band/new"
          element={
            <BandsForm
              handleAddBand={handleAddBand}
              selectedBand={selectedBand}
              handleUpdateBand={handleUpdateBand}
            />
          }
        />

        <Route
          path="/bands/:bandId"
          element = {isFormOpen ? <BandsForm handleAddBand={handleAddBand} selectedBand={selectedBand} handleUpdateBand={handleUpdateBand}/> : <BandDetail selectedBand={selectedBand} handleBandFormView={handleBandFormView} handleDeleteBand={handleDeleteBand}/>}
        />

        <Route path="*" element={<h2>Whoops, nothing to see here!</h2>} />
      </Routes>
    </div>
          <Footer />
    </div>

  )
}

export default App;
