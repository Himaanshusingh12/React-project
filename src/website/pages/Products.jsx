import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const redirect = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  };
  return (
    <>
      <div>
        <Header />
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                Our Products Categories
                <span />
              </p>
              <h1 className="text-center mb-5">products We Provide</h1>
            </div>
            <div className="row g-4">
              {data.map((value, index, arr) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="service-item d-flex flex-column text-center rounded">
                      <div className="service-icon flex-shrink-0">
                        <img
                          src={value.cate_img}
                          width="50%"
                          height="200px"
                          alt=""
                        />
                      </div>
                      <h5 className="mb-3">{value.cate_name}</h5>
                      <h5 className="mb-3"> {value.price}</h5>

                      <a
                        className="btn btn-square"
                        onClick={() => redirect("/view_products/" + value.id)}
                        href="javascript:void(0)"
                      >
                        <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;
