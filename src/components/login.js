// Importing Components
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";
import "../styling/login.css";

// Handling Login component
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Using Yup to validate the email and make the email and password required
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Setting the initial value of the email and password to nothing
  const initialValues = {
    email: "",
    password: "",
  };
  // Handling the login function with the user input data
  const handleSubmit = (values) => {
    const userData = JSON.parse(localStorage.getItem(values.email));
    if (userData && userData.password === values.password) {
      dispatch(login(userData));
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Using Formik to handle the user input values */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" className="input-field" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" className="input-field" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          {/* Login button */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </Form>
      </Formik>
      {/* Button to register if you do not have an account */}
      <button onClick={() => navigate("/signup")} className="signup-button">
        Sign Up
      </button>
    </div>
  );
};

export default Login;
