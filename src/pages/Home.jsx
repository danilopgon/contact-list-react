import useAppContext from "../context/AppContext";
import { Link } from "react-router-dom";

import ContactCard from "../components/ContactCard";

const Home = () => {
  const { store, actions } = useAppContext();

  return (
    <>
      <header className="p-3 container d-flex justify-content-center justify-content-md-end">
        <Link to="/add">
          <button type="button" className="btn btn-success btn-lg">
            Add new contact
          </button>
        </Link>
      </header>
      <div className="container">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </>
  );
};

export default Home;
