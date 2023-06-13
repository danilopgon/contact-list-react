import useAppContext from "../context/AppContext";

const Home = () => {
  const { store, actions } = useAppContext();

  return <div className="card">{store.prueba}</div>;
};

export default Home;
