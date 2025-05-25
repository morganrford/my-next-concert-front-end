import { useNavigate } from "react-router";


const HomePage = () => {

    const navigate = useNavigate()

    const handleConcertClick = () => {
        navigate('/concerts/new')
    }
    const handleBandClick = () => {
        navigate('/band/new')
    }

    return (
        <div>


            <h1>My Next Concert</h1>
            <div>
                LOOP OVER CONCERTS
            </div>
            <button onClick={handleConcertClick}>Add New Concert</button>
            <button onClick={handleBandClick}>Add New Band</button>
        </div>
    )
}

export default HomePage;