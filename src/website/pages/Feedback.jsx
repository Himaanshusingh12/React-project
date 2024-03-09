import React, { useState } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { toast } from "react-toastify";
import axios from "axios";

function Feedback() {
  const [formvalue, setFormvalue] = useState({
    id: "",
    user_id: "",
    comment: "",
  });

  const getform = (e) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(formvalue);
  };

  const validation = () => {
    var result = true;
    // if (formvalue.name == "") {
    //   toast.error("Name Field is required");
    //   result = false;
    //   return false;
    // }
    if (formvalue.user_id == "") {
      toast.error("user id Field is required");
      result = false;
      return false;
    }
    if (formvalue.comment == "") {
      toast.error("comment Field is required");
      result = false;
      return false;
    }
    return result;
  };

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/feedback`, formvalue);
      //console.log(res);
      if (res.status == 201) {
        setFormvalue({ ...formvalue, user_id: "", comment: "" });
        toast.success("Feedback submited success");
        return false;
      }
    }
  };
  return (
    <>
      <Header />
      <div className="container-xxl bg-white p-0">
        {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center"></p>
              <h1 className="text-center mb-5">Give us your feedback</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <p className="text-center mb-4">
                    The feedback form is currently inactive. Get a functional
                    and working contact form with Ajax &amp; PHP in a few
                    minutes. Just copy and paste the files, add a little code
                    and you're done.{" "}
                    {/* <a href="https://htmlcodex.com/contact-form">
                      Download Now
                    </a> */}
                    .
                  </p>
                  <form action="" method="post" onSubmit={submithandel}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <label htmlFor="name">user id</label>
                          <input
                            type="number"
                            name="user_id"
                            value={formvalue.user_id}
                            onChange={getform}
                            className="form-control"
                            id="user_id"
                            placeholder="user id"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <label htmlFor="email">Comment</label>
                          <input
                            type="text"
                            name="comment"
                            value={formvalue.comment}
                            onChange={getform}
                            className="form-control"
                            id="comment"
                            placeholder="Your Comment"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Feedback
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Feedback;
