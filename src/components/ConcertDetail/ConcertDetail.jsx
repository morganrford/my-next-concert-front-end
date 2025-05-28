const ConcertDetail = (props) => {
  if (!props.selectedConcert) {
    return (
      <div>
        <h2>No Concert Details</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>{props.selectedConcert.venueName}</h1>
      <ul>
        <li>Venue Name: {props.selectedConcert.venueName}</li>
        <li>Venue Address: {props.selectedConcert.venueAddress}</li>
        <li>Date: {props.selectedConcert.date}</li>
        <li>Time: {props.selectedConcert.time}</li>
        <li>Price: {props.selectedConcert.price}</li>
        <li>Promoter: {props.selectedConcert.promoter}</li>
        <li>
          Bands:{" "}
          {props.selectedConcert.bands.map((band) => band.bandName).join(", ")}
        </li>
      </ul>
      <button
        onClick={() => props.handleConcertFormView(props.selectedConcert)}
      >
        Edit Concert
      </button>
      <button
        onClick={() => props.handleDeleteConcert(props.selectedConcert._id)}
      >
        Delete Concert
      </button>
    </div>
  );
};

export default ConcertDetail;
