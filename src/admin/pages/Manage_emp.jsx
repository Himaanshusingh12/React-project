import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AHeader from "../Components/AHeader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Manage_emp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/employees`);
    console.log(res.data);
    setData(res.data);
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/employees/${id}`);
    fetch();
  };

  // edit profile

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    image: "",
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/employees/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  };

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    if (formvalue.name == "") {
      toast.error("Name Field is required");
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error("Email Field is required");
      result = false;
      return false;
    }

    if (formvalue.password == "") {
      toast.error("password Field is required");
      result = false;
      return false;
    }
    if (formvalue.mobile == "") {
      toast.error("mobile Field is required");
      result = false;
      return false;
    }
    if (formvalue.image == "") {
      toast.error("image Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/employees/${formvalue.id}`,
        formvalue
      );
      console.log(res);
      if (res.status == 200) {
        setFormvalue({
          ...formvalue,
          name: "",
          email: "",
          password: "",
          mobile: "",
          image: "",
        });
        toast.success("Update success");
        fetch();
      }
    }
  };

  return (
    <>
      <AHeader />
      <div>
        <div className="container mt-5">
          <h2>Manage Employee</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>MObile</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>
                      <p>{value.email}</p>
                    </td>
                    <td>
                      <p>{value.password}</p>
                    </td>
                    <td>
                      <p>{value.mobile}</p>
                    </td>
                    <td>
                      <img src={value.image} alt="" width="50px" />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editdata(value.id)}
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteHandel(value.id)}
                      >
                        Delete
                      </button>
                      <div className="modal" id="myModal">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                              <h4 className="modal-title">Edit Profile</h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-dismiss="modal"
                              />
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                              <div className="container">
                                <form action="" method="post">
                                  <div className="row g-3">
                                    <div className="col-md-6">
                                      <label htmlFor="name">Name</label>
                                      <div className="form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="name"
                                          value={formvalue.name}
                                          onChange={getform}
                                          id="name"
                                          placeholder="Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="Type">Email</label>
                                      <div className="form-floating">
                                        <input
                                          type="email"
                                          className="form-control"
                                          id="email"
                                          placeholder="Enter your email"
                                          accept="url"
                                          required
                                          name="email"
                                          value={formvalue.email}
                                          onChange={getform}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="name">Password</label>
                                      <div className="form-floating">
                                        <input
                                          type="number"
                                          className="form-control"
                                          name="password"
                                          value={formvalue.password}
                                          onChange={getform}
                                          id="password"
                                          placeholder="password"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <label htmlFor="name">Mobile</label>
                                      <div className="form-floating">
                                        <input
                                          type="number"
                                          className="form-control"
                                          name="mobile"
                                          value={formvalue.mobile}
                                          onChange={getform}
                                          id="mobile"
                                          placeholder="mobile"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12">
                                      <label htmlFor="name">Image</label>
                                      <div className="form-floating">
                                        <input
                                          type="url"
                                          className="form-control"
                                          name="image"
                                          value={formvalue.image}
                                          onChange={getform}
                                          id="image"
                                          placeholder="URL"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-12">
                                      <button
                                        onClick={submithandel}
                                        data-dismiss="modal"
                                        className="btn btn-primary w-100 py-3"
                                        type="submit"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_emp;
