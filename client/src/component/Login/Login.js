import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:9090/login", {
          email,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: name } });
          } else if (res.data === "notexist") {
            alert("User Not Register");
            history("/");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
          </div>

          <form action="POST">
            <div className="form_input">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                name=""
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="email"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id=""
                placeholder="Enter Your Password"
              />
            </div>
            <button className="btn" onClick={submit}>
              Login
            </button>
            <br />
            <div style={{ textAlign: "center" }}>OR</div>
            <br />

            <Link to="/adminlogin">Admin Login</Link>

            <br />
            <div style={{ textAlign: "center" }}>
              <Link to="/signup">Sign UP</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
