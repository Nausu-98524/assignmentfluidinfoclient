import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const history = useNavigate();
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
            history("/dashboard", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User not register");
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
            <h1>Admin Log In</h1>
          </div>

          <form action="POST">
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
              Admin Login
            </button>
            <br />

            <div style={{ textAlign: "center" }}>
              <Link to="/">User Login</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
