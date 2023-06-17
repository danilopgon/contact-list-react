import useAppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const { actions, store } = useAppContext();

  return (
    <form
      onSubmit={store.promptOpen ? actions.handleEdit : actions.handleSubmit}
    >
      <div className="mb-3">
        <label
          htmlFor="full_name"
          className="form-label d-flex justify-content-start"
        >
          Full Name
        </label>
        <input
          type="text"
          name="full_name"
          onChange={actions.handleUserInput}
          value={store.userInput.full_name}
          className="form-control"
          id="fullname"
          aria-describedby="fullNameHelp"
          placeholder="Full Name"
          required
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
          type="email"
          name="email"
          onChange={actions.handleUserInput}
          value={store.userInput.email}
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
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
          type="tel"
          name="phone"
          onChange={actions.handleUserInput}
          value={store.userInput.phone}
          className="form-control"
          id="phone"
          aria-describedby="phoneHelp"
          placeholder="Enter phone"
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="address"
          className="form-label d-flex justify-content-start"
        >
          Address
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
          required
        />
      </div>

      <button type="submit" className="btn btn-primary container-fluid my-3">
        Save
      </button>
      <div className="d-flex justify-content-start">
        {store.promptOpen ? (
          <button
            className="btn btn-secondary container-fluid"
            onClick={() => {
              actions.setPromptOpen(false);
            }}
          >
            Cancel
          </button>
        ) : (
          <Link to={"/"} style={{ textDecoration: "underline" }}>
            or get back to contacts
          </Link>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
