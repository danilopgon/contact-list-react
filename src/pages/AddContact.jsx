const AddContact = () => {
  return (
    <div>
      <h1>Add a new contact</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" />
          <div id="fullNameHelp" className="form-text">Enter your full name</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
