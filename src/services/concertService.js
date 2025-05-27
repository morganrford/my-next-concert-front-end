const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/concerts`;

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

const update = async (formData, concertId) => {
  try {
    const res = await fetch(`${BASE_URL}/${concertId}`, {
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

const deleteConcert = async (concertId) => {
  try {
    const res = await fetch(`${BASE_URL}/${concertId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      })
  } catch (error) {
    console.log(error)
  }
}

export { index, create, update, deleteConcert };
