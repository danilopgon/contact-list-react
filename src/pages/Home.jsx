import useAppContext from "../context/AppContext";

import ContactCard from "../components/ContactCard";

const Home = () => {
  const { store, actions } = useAppContext();

  return (
    <div className="card">
      <ContactCard />
    </div>
  );
};

export default Home;
