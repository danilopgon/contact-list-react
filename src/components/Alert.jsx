import useAppContext from "../context/AppContext";

const Alert = ({ open, id }) => {
  const { actions } = useAppContext();

  return (
    <>
      {open && (
        <dialog className="delete-alert">
          <div className="card p-5 border-rounded d-flex flex-column justify-content-center gap-2">
            <h3 className="my-3">Are you sure?</h3>
            <button
              className="btn btn-danger btn-lg"
              onClick={() => {
                actions.handleDeleteButton(id);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => {
                actions.setAlertOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Alert;
