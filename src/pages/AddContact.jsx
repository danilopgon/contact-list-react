import { Link } from "react-router-dom";
import useAppContext from "../context/AppContext";

const AddContact = () => {
  const { store, actions } = useAppContext();

  return (
    <div className="my-3 container">
      <h1 className="">Add a new contact</h1>

      <form onSubmit={actions.handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="fullname"
            className="form-label d-flex justify-content-start"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            onChange={actions.handleUserInput}
            value={store.userInput.fullName}
            className="form-control"
            id="fullname"
            aria-describedby="fullNameHelp"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label d-flex justify-content-start"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            onChange={actions.handleUserInput}
            value={store.userInput.email}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="phone"
            className="form-label d-flex justify-content-start"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            onChange={actions.handleUserInput}
            value={store.userInput.phone}
            className="form-control"
            id="phone"
            aria-describedby="phoneHelp"
            placeholder="Enter phone"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="address"
            className="form-label d-flex justify-content-start"
          >
            Adress
          </label>
          <input
            type="text"
            name="address"
            onChange={actions.handleUserInput}
            value={store.userInput.address}
            className="form-control"
            id="address"
            aria-describedby="adressHelp"
            placeholder="Enter adress"
          />
        </div>

        <button type="submit" className="btn btn-primary container-fluid">
          Save
        </button>
        <div className="d-flex justify-content-start">
          <Link to={"/"} style={{ textDecoration: "underline" }}>
            or get back to contacts
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
