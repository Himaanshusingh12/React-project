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
  return (
    <>
      <AHeader />
      <div>
        <div className="container mt-5">
          <h2>Manage Employees</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index, arr) => {
                return (
                  <tr className="odd gradeX">
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.mobile}</td>
                    <td>
                      <img src={value.image} alt="" width="50px" />
                    </td>
                    <td className="center">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandel(value.id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                  </tr>
                );
              })}
              {/* Add more rows for additional medicines as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Manage_emp;
