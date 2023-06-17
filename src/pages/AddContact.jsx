import ContactForm from "../components/ContactForm";
import useAppContext from "../context/AppContext";

const AddContact = () => {
  return (
    <div className="my-3 container">
      <h1 className="">Add a new contact</h1>
      <ContactForm />
    </div>
  );
};

export default AddContact;
