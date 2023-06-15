const deleteContact = async (id) => {
  fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

export default deleteContact;
