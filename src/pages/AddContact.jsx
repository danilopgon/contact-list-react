import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div className="my-3 container">
      <h1 className="">Add a new contact</h1>

      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputFullName"
            className="form-label d-flex justify-content-start"
          >
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFullName"
            aria-describedby="fullNameHelp"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail"
            className="form-label d-flex justify-content-start"
          >
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputPhone"
            className="form-label d-flex justify-content-start"
          >
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPhone"
            aria-describedby="phoneHelp"
            placeholder="Enter phone"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleInputAdress"
            className="form-label d-flex justify-content-start"
          >
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAdress"
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
