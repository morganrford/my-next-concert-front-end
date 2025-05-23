import { useState } from "react";
const BandsForm = (props) => {
  const initialState = {
    name: "",
    genre: "",
    members: "",
  };
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
  };
  // And finally, the form itself.
  return (
    <div>
        <h1>Bands Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="genre"> Genre </label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="members"> Members </label>
          <input
            id="members"
            name="members"
            value={formData.members}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {props.selected ? "Update Band" : "Add New Band"}
        </button>
      </form>
    </div>
  );
};

export default BandsForm;
