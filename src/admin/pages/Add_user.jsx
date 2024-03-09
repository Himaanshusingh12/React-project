import React, { useState } from "react";
import AHeader from "../Components/AHeader";
import axios from "axios";

function Add_user() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState(0);
  const [mobile, setmObile] = useState(0);
  const [status, setstatus] = useState(0);

  const onclickSubmit = () => {
    console.log("SUBMIT");
    axios
      .post("http://localhost:3000/user", {
        name,
        email,
        password,
        mobile,
        status,
      })
      .then(function (response) {
        // handle success
        console.log("success");
      });
  };
  return (
    <>
      <AHeader />
      <div>
        <div className="container mt-5">
          <h2>Add User</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                required
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="Password"
                className="form-control"
                id="name"
                placeholder="Enter Email"
                required
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Password</label>
              <input
                type="number"
                className="form-control"
                id="name"
                placeholder="Enter password"
                required
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Mobile</label>
              <input
                type="number"
                className="form-control"
                id="name"
                placeholder="Enter number"
                required
                onChange={(event) => {
                  setmObile(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Status</label>
              <input
                type="number"
                className="form-control"
                id="name"
                placeholder="Enter status"
                required
                onChange={(event) => {
                  setstatus(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              onClick={onclickSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add_user;
