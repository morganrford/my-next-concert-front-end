import { useState } from "react";
import { useNavigate } from 'react-router';

const BandsForm = (props) => {
  const initialState = {
    bandName: "",
    genre: "",
    members: "",
  };

  const navigate = useNavigate();
  // formData state to control the form.
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  // handleChange function to update formData state.
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
  // And finally, the form itself.
  return (
    <div>
        <h1>Bands Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name"> Band Name: </label>
          <input
            id="name"
            name="bandName"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="genre"> Genre: </label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="members"> Members: </label>
          <input
            id="members"
            name="members"
            value={formData.members}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Add New Band
          {/* {props.selected ? "Update Band" : "Add New Band"} */}
        </button>
      </form>
    </div>
  );
};

export default BandsForm;
