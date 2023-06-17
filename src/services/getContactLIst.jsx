import useAppContext from '../context/AppContext';

const getContactList = async () => {
  const { store } = useAppContext();
  return fetch(` https://assets.breatheco.de/apis/fake/contact/agenda/${store.userName}`
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
