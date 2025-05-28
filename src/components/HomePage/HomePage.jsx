import { useNavigate } from "react-router";

const HomePage = ({ user }) => {
  const navigate = useNavigate();

  const handleConcertClick = () => {
    navigate("/concerts/new");
  };
  const handleBandClick = () => {
    navigate("/band/new");
  };

  return (
    <div>
      <div></div>
      {user && (
        <>
          <button onClick={handleConcertClick}>Add New Concert</button>
          <button onClick={handleBandClick}>Add New Band</button>
        </>
      )}
    </div>
  );
};

export default HomePage;
