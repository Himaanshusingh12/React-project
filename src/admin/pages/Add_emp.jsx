import React, { useState } from "react";
import AHeader from "../Components/AHeader";
import axios from "axios";

function Add_emp() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    image: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/employees`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        name: "",
        email: "",
        password: "",
        mobile: "",
        image: "",
      });
      alert("Employee add success");
      return false;
    }
  };
  return (
    <>
      <AHeader />
      <div className="content-wrapper">
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h4 className="header-line">Add Employee</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">Add Employee</div>
                <div className="panel-body">
                  <form
                    role="form"
                    action=""
                    method="post"
                    onSubmit={submithandel}
                  >
                    <div className="form-group">
                      <label> Name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={formvalue.name}
                        onChange={getform}
                        type="text"
                      />
                      {/* <p className="help-block">Help text here.</p> */}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        name="email"
                        value={formvalue.email}
                        onChange={getform}
                        type="email"
                      />
                      {/* <p className="help-block">Help text here.</p> */}
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        name="password"
                        value={formvalue.password}
                        onChange={getform}
                        type="password"
                      />
                      {/* <p className="help-block">Help text here.</p> */}
                    </div>

                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        className="form-control"
                        name="mobile"
                        value={formvalue.mobile}
                        onChange={getform}
                        type="number"
                      />
                      {/* <p className="help-block">Help text here.</p> */}
                    </div>
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        className="form-control"
                        name="image"
                        value={formvalue.image}
                        onChange={getform}
                        type="url"
                      />
                      {/* <p className="help-block">Help text here.</p> */}
                    </div>

                    <button type="submit" className="btn btn-info">
                      Submit{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_emp;
