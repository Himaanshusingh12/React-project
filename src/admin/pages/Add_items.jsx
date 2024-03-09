import React, { useState, useEffect } from "react";
import axios from "axios";
import AHeader from "../Components/AHeader";

function Add_items() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };

  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_id: "",
    name: "",
    price: "",
    img: "",
    status: "",
  });
  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      status: "Available",
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    const res = await axios.post(`http://localhost:3000/items`, formvalue);
    //console.log(res);
    if (res.status == 201) {
      setFormvalue({
        ...formvalue,
        name: "",
        cate_id: "",
        desc: "",
        price: "",
        img: "",
      });
      alert("item submited success");
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
              <h4 className="header-line">Add Items</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading">BASIC FORM</div>

                <div className="panel-body">
                  <form
                    role="form"
                    action=""
                    method="post"
                    onSubmit={submithandel}
                  >
                    <div className="form-group">
                      <label>Categories Name</label>
                      <select
                        className="form-control"
                        name="cate_id"
                        value={formvalue.cate_id}
                        onChange={getform}
                      >
                        <option value="">
                          ------- Select Categories of items ---------
                        </option>
                        {data.map((value, index, arr) => {
                          return (
                            <option value={value.id}>{value.cate_name}</option>
                          );
                        })}
                      </select>
                      <p className="help-block">Help text here.</p>
                    </div>

                    <div className="form-group">
                      <label>Item name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={formvalue.name}
                        onChange={getform}
                        type="text"
                      />
                      <p className="help-block">Help text here.</p>
                    </div>

                    <div className="form-group">
                      <label>price</label>
                      <input
                        className="form-control"
                        name="price"
                        value={formvalue.price}
                        onChange={getform}
                        type="text"
                      />
                      <p className="help-block">Help text here.</p>
                    </div>
                    <div className="form-group">
                      <label>Image Upload</label>
                      <input
                        className="form-control"
                        name="img"
                        value={formvalue.img}
                        onChange={getform}
                        type="url"
                      />
                      <p className="help-block">Help text here.</p>
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

export default Add_items;
