import { useState } from "react";
import { useNavigate } from 'react-router';

const BandsForm = (props) => {
  const initialState = {
    bandName: "",
    genre: "",
    members: "",
  };

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt, bandId) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateBand(formData, bandId);
    } else {
      props.handleAddBand(formData);
    }
    navigate('/bands')
  };

  return (
    <div>
        <h1>Bands Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Band Name: </label>
          <input
            id="name"
            name="bandName"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="genre"> Genre: </label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="members"> Members: </label>
          <input
            id="members"
            name="members"
            value={formData.members}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {props.selectedBand ? "Update Band" : "Add New Band"}
        </button>
      </form>
    </div>
  );
};

export default BandsForm;
