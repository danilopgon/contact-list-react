import useAppContext from "../context/AppContext";

import ContactForm from "./ContactForm";

const Prompt = ({ open, id }) => {
  const { actions } = useAppContext();

  return (
    <>
      {open && (
        <dialog className="prompt">
          <div className="card p-5 border-rounded d-flex flex-column justify-content-center gap-2">
            <h3 className="my-3">Enter new contact info</h3>
            <ContactForm />
          </div>
        </dialog>
      )}
    </>
  );
};

export default Prompt;
