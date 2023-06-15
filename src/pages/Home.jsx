import useAppContext from "../context/AppContext";
import { Link } from "react-router-dom";

import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { store, actions } = useAppContext();

  if (store.loading) {
    return <LoadingSpinner />;
  }

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
        {store.contactList.map((contact) => {
          return <ContactCard contact={contact} key={contact.id} />;
        })}
      </div>
    </>
  );
};

export default Home;
