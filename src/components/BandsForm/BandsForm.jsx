import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

const BandsForm = (props) => {
  const initialState = {
    bandName: "",
    genre: "",
    members: "",
  };

  const { bandId } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    props.selectedBand ? props.selectedBand : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt, bandId) => {
    evt.preventDefault();
    if (props.selectedBand) {
      props.handleUpdateBand(formData, bandId);
    } else {
      props.handleAddBand(formData);
    }
    navigate("/bands");
  };

  return (
    <div>
      <h1>Bands Form</h1>
      <form
        onSubmit={(evt) => {
          handleSubmit(evt, bandId);
        }}
      >
        <div className="form">
          <label htmlFor="name"> Band Name: </label>
          <input
            id="name"
            name="bandName"
            value={formData.bandName}
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
          {props.selectedBand ? "Update Band" : "Add New Band"}
        </button>
      </form>
    </div>
  );
};

export default BandsForm;
