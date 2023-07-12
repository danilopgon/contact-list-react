import { Link } from "react-router-dom";

import ContactCard from "../components/ContactCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useAppContext from "../context/AppContext";
import Alert from "../components/Alert";
import Prompt from "../components/Prompt";
import UserNameInput from "../components/UserNameInput";

const Home = () => {
  const { store, actions } = useAppContext();

  if (!store.userName) {
    return <UserNameInput />;
  }

  if (store.loading) {
    return <LoadingSpinner />;
  }

  if (store.alertOpen) {
    return (
      <Alert open={store?.alertOpen ? "open" : ""} id={store.idToModify} />
    );
  }

  if (store.promptOpen) {
    return (
      <Prompt open={store?.promptOpen ? "open" : ""} id={store.idToModify} />
    );
  }

  return (
    <>
      <header className="p-3 container d-flex justify-content-center justify-content-md-end">
        <Link to="/add">
          <button type="button" className="btn btn-success ">
            Add new contact
          </button>
        </Link>
        <button
          className="btn btn-secondary ms-2"
          onClick={actions.changeUsername}
        >
          Change username
        </button>
      </header>
      <h1 className="my-3">
        {store?.contactList.length > 0 ? "Contact List" : "No contacts yet"}
      </h1>
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
