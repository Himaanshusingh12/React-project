import React, { useState, useEffect } from "react";
import axios from "axios";
import AHeader from "../Components/AHeader";

function Manage_items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/items`);
    console.log(res.data);
    setData(res.data);
  };

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/items/${id}`);
    fetch();
  };
  return (
    <>
      <AHeader />
      <div>
        <div className="container mt-5">
          <h2>Manage items</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>cate_id</th>
                <th>name</th>
                <th>price</th>
                <th>img</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* Add more rows for additional medical services as needed */}
              {data.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.cate_id}</td>
                    <td>{value.name}</td>
                    <td>{value.price}</td>
                    <td>
                      <img
                        src={value.img}
                        width="200px"
                        height="100px"
                        style={{ objectFit: "contain" }}
                      />
                    </td>
                    <td>{value.status}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Edit</button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteHandel(value.id)}
                      >
                        Delete
                      </button>
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

export default Manage_items;
