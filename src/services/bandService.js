const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/bands`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(Error);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (formData, bandId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bandId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteBand = async (bandId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bandId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      })
  } catch (error) {
    console.log(error)
  }
}

export { index, create, update, deleteBand };
