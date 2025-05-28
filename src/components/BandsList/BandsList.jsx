import { Link } from "react-router";

const BandsList = (props) => {
  return (
    <div>
      <h1>Bands List</h1>
      <div>
        {!props.bands.length ? (
          <h2>
            No Bands Yet!{" "}
            <div>
              <button type="submit">
                <Link to="/band/new">Add a Band</Link>
              </button>
            </div>
          </h2>
        ) : (
          <ul>
            {props.bands.map((band) => (
              <li key={band._id} onClick={() => props.handleSelectBand(band)}>
                <Link to={`/bands/${band._id}`}>{band.bandName}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BandsList;
