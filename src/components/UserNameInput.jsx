import useAppContext from "../context/AppContext";


const UserNameInput = () => {

    const { store, actions } = useAppContext();

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Enter your User Name</h5>
                <form className="row g-3" onSubmit={actions.handleUserNameSubmit}>
                    <div className="col-12">
                        <label htmlFor="validationDefault01" className="form-label d-flex justify-content-start mt-2">User Name</label>
                        <input type="text" className="form-control" onChange={(e) => {actions.setUserNameInput(e.target.value)}}  id="validationDefault01" required />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Enter</button>
                    </div>
                </form>
            </div>
        </div>
    )

};

export default UserNameInput;


