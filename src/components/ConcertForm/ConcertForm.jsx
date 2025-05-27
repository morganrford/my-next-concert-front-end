import { useState } from "react";
import { useNavigate } from "react-router";

const ConcertForm = (props) => {
  const initialState = {
    venueName: "",
    venueAddress: "",
    date: "",
    time: "",
    price: "",
    promoter: "",
    bands: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt, concertId) => {
    evt.preventDefault();
    const dataToSubmit = {
    ...formData,
    bands: formData.bands.split(",").map((b) => ({ bandName: b.trim() })),
  };
    if (props.selected) {
      props.handleUpdateConcert(dataToSubmit, concertId);
    } else {
      props.handleAddConcert(dataToSubmit);
    }
    navigate("/concerts");
  };

  return (
    <div>
      <h1>Concert Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="venue-name">Venue Name:</label>
          <input
            id="venue-name"
            name="venueName"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="venue-address">Venue Address:</label>
          <input
            id="venue-address"
            name="venueAddress"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="time">Time:</label>
          <input
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="promoter">Promoter:</label>
          <input
            id="promoter"
            name="promoter"
            value={formData.promoter}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="bands">Bands (comma separated):</label>
          <input
            type="text"
            name="bands"
            value={formData.bands}
            onChange={(e) =>
              setFormData({ ...formData, bands: e.target.value })
            }
            placeholder="Nirvana, Foo Fighters, Soundgarden"
            required
          />
        </div>
        <button type="submit">
{props.selectedConcert ? "Update Concert" : "Add New Concert"}        </button>
      </form>
    </div>
  );
};

export default ConcertForm;
