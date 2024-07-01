// Importing desired components
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import "../styling/signUp.css";

// Setting validate values
const validate = (values) => {
  const errors = {};
  // Making sure first name is required and uses 15 characters or less
  if (!values.firstName) errors.firstName = "Required";
  else if (values.firstName.length > 15)
    errors.firstName = "Please use 15 characters or less";

  // Making sure surname is required and uses 20 characters or less
  if (!values.surname) errors.surname = "Required";
  else if (values.surname.length > 20)
    errors.surname = "Please use 20 characters or less";

  // Making sure email is required and using "strong" password
  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Please enter a valid email address";

  if (!values.password) errors.password = "Required";
  else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      values.password
    )
  )
    // Error message if email is not "Strong"
    errors.password =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character";

  // Making sure passwords match
  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.confirmPassword !== values.password)
    errors.confirmPassword = "Passwords do not match";

  return errors;
};

// Creating SignUp function
const SignUp = () => {
  const navigate = useNavigate();

  // Setting initial values to null
  const initialValues = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Handling the submit of the user values and navigating to login.js
  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem(values.email, JSON.stringify(values));
    navigate("/login");
  };

  // Displaying the function
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {/* Using Formik for user input */}
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" className="input-field" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <Field type="text" name="surname" className="input-field" />
            <ErrorMessage
              name="surname"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="input-field" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className="input-field" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              name="confirmPassword"
              className="input-field"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />
          </div>
          {/* Register button to save user input */}
          <button type="submit" className="submit-button">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
