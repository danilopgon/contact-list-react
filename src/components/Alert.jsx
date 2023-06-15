import useAppContext from "../context/AppContext";

const Alert = ({ open, id }) => {
  const { store, actions } = useAppContext();

  return (
    <>
      {open && (
        <dialog className="delete-alert">
          <div className="card">
            <h1>Are u sure?</h1>
            <button
              onClick={() => {
                actions.handleDeleteButton(id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                actions.setAlertOpen(false);
              }}
            >
              Close alert
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Alert;
