import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import useAppContext from "../context/AppContext";

// And now we can use these
const ContactForm = () => {
  const { actions, store } = useAppContext();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;

  

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={
          store.promptOpen && store.contactToEdit
            ? {
                full_name: store.contactToEdit.full_name,
                email: store.contactToEdit.email,
                phone: store.contactToEdit.phone,
                address: store.contactToEdit.address,
              }
            : {
                full_name: "",
                email: "",
                phone: "",
                address: "",
              }
        }
        validationSchema={Yup.object({
          full_name: Yup.string()
            .max(20, "Must be 15 characters or less")
            .min(6, "Must be 6 characters or more")
            .trim()
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
            .matches(emailRegExp, "Email is not a valid direction")
            .trim(),
          phone: Yup.string()
            .max(12, "Must be 15 characters or less")
            .min(9, "Must be 10 characters or more")
            .required("Required")
            .matches(phoneRegExp, "Phone number is not valid")
            .trim(),
          address: Yup.string()
            .max(50, "Must be 15 characters or less")
            .min(10, "Must be 10 characters or more")
            .required("Required")
            .trim(),
        })}
        onSubmit={store.promptOpen ? actions.handleEdit : actions.handleSubmit}
      >
        <Form>
          <label
            htmlFor="full_name"
            className="form-label d-flex justify-content-start"
          >
            Full name
          </label>
          <Field name="full_name" type="text" className="form-control" />
          <ErrorMessage name="full_name" />

          <label
            htmlFor="email"
            className="form-label d-flex justify-content-start"
          >
            Email{" "}
          </label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" />

          <label
            htmlFor="address"
            className="form-label d-flex justify-content-start"
          >
            Address
          </label>
          <Field name="address" type="text" className="form-control" />
          <ErrorMessage name="address" />

          <label
            htmlFor="phone"
            className="form-label d-flex justify-content-start"
          >
            Phone number
          </label>
          <Field name="phone" type="text" className="form-control" />
          <ErrorMessage name="phone" />

          <button
            type="submit"
            className="btn btn-primary container-fluid my-3"
          >
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
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
