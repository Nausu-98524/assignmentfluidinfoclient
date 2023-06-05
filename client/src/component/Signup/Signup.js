import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:9090/user/signup", {
        name,
        email,
        password,
        contact,
      })
      .then((res) => {
        if (res.data === "exist") {
          alert("User already Register");
        } else if (res.data === "notexist") {
          alert("Registration Successfull");
          history("/", { state: { id: email } });
        }
      });
  }
  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>New User, Sign UP</h1>
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
                id="name"
                placeholder="Enter Your Name"
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
            <div className="form_input">
              <label htmlFor="Contact">Contact</label>
              <input
                type="number"
                name=""
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                id=""
                placeholder="Enter Your Contact"
              />
            </div>
            <button className="btn" onClick={submit}>
              Signup
            </button>
            <br />
            <div style={{ textAlign: "center" }}>Or</div>
            <br />
            <div className="linkk">
              <Link to="/">Go to login</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
