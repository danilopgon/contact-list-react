import { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="my-3 container">
      <h1 className="">Add a new contact</h1>

      <form>
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
            onChange={handleUserInput}
            value={userInput.fullName}
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
            onChange={handleUserInput}
            value={userInput.email}
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
            onChange={handleUserInput}
            value={userInput.phone}
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
            onChange={handleUserInput}
            value={userInput.address}
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
