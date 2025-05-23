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

  const navigate = useNavigate()

  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt, concertId) => {
    evt.prevent.default();
    if (props.selected) {
      props.handleUpdateConcert(formData, concertId);
    } else {
      props.handleAddConcert(formData);
    }
  };

  return (
    <div>
      <h1>Concert Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="venue-name">Venue Name:</label>
          <input
            id="venue-name"
            name="venue-name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="venue-address">Venue Address:</label>
          <input
            id="venue-address"
            name="venue-address"
            value={formData.venueAddress}
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
          <label htmlFor="bands">Bands:</label>
          <input
            id="bands"
            name="bands"
            value={formData.bands}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{props.selected ? "Update Concert" : "Add New Concert"}</button>
      </form>
    </div>
  );
};

export default ConcertForm;
