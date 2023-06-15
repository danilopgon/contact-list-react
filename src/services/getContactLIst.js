const getContactList = async () => {
  return fetch(
    "https://assets.breatheco.de/apis/fake/contact/agenda/danilopgon"
  )
    .then((response) => {
      if (!response.ok) {
        throw Error();
      }
      return response.json();
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};

export default getContactList;
