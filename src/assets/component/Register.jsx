// import React from 'react';

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.config";
import { useState } from "react";
import { FaEye ,FaEyeSlash  } from 'react-icons/fa';


const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked
    console.log(accepted,email, password);

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Please provide one capital letter");
      return;
    }else if(!accepted){
      setError("Please accepted our terms")
      return
    }

    setSuccess("");
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Register Successful");
        // send verification email
        sendEmailVerification(result.user)
        .then(() =>{
          alert("Please check your email and verify")
        })
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
            
               <input 
                  type={showPassword? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />{" "}
                <span className="absolute  top-12 right-2" onClick={() => setShowPassword(!showPassword)}>
                  {
                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                  }
                </span>
            
                <br />
                <div>
                  <input type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">Accept Our terms</label>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Already have an account <Link to="/login">Login</Link>{" "}
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              {success && <p className="text-green-500">{success}</p>}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
