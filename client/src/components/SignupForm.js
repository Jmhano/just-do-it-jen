import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SIGNUP } from "../utils/queries";


function SignupForm()  {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [signup] = useMutation(SIGNUP, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ userLogin }) => {
        localStorage.setItem('auth_token', userLogin.token);
        window.location.reload(true)
      }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log('formState', formState)
    signup()
  }
  return (
    <form onSubmit= {submitHandler}>
      <div className="form-inner">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default SignupForm;
