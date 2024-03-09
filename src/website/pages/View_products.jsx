import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
function View_products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const { cate_id } = useParams();
  const fetch = async () => {
    const res = await axios.get(
      `http://localhost:3000/items?cate_id=${cate_id}`
    );
    console.log(res.data);
    setData(res.data);
  };
  return (
    <>
      <Header />
      <div>
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span />
                Our products
                <span />
              </p>
              <h1 className="text-center mb-5">items We Provide</h1>
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
                          src={value.img}
                          width="50%"
                          height="200px"
                          alt=""
                        />
                      </div>
                      <h5 className="mb-3">{value.name}</h5>
                      <h5 className="mb-3"> {value.price}</h5>

                      <a className="btn btn-square" href="javascript:void(0)">
                        <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default View_products;
