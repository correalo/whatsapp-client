import React, { useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import "./UserForm.css";
function UserForm(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(13).required(),
  };

  const validateForm = (event) => {
    event.preventDefault();
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errorData);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };
  const clearState = () => {
    setUser({
      password: "",
      email: "",
    });
  };
  return (
    <div className="primeira">
      <h1>Login</h1>

      <form className="ui form">
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Please enter your email"
            value={user.email}
            onChange={handleSave}
          />
        </div>
        {errors.email && (
          <div className="alert alert-danger">{errors.email}</div>
        )}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="string"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleSave}
          />
        </div>
        {errors.email && (
          <div className="alert alert-danger">{errors.password}</div>
        )}
        <div className="btn">
          <button
            type="submit"
            onClick={validateForm}
            className="btn btn-success"
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
