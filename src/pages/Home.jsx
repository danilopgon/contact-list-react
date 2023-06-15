import { Link } from "react-router-dom";

import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useContactList from "../hooks/useContactList";
import useAppContext from "../context/AppContext";
import Alert from "../components/Alert";

const Home = () => {
  const { store, dialog } = useAppContext();

  if (store.loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Alert open={store.alertOpen ? "open" : ""} id={store.idToDelete} />

      <header className="p-3 container d-flex justify-content-center justify-content-md-end">
        <Link to="/add">
          <button type="button" className="btn btn-success btn-lg">
            Add new contact
          </button>
        </Link>
      </header>
      <div className="container">
        {store.contactList.map((contact) => {
          return (
            <ContactCard contact={contact} id={contact.id} key={contact.id} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
