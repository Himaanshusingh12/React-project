import React from "react";
import AHeader from "../Components/AHeader";
import Afooter from "../Components/Afooter";

function Dashboard() {
  return (
    <>
      <AHeader />
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-12 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">
              Fashion at your fingertips
            </h1>
            <div className="row g-4">
              <div className="col-sm-12">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    2000
                  </h2>
                  <p className="text-light mb-0">products</p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1000
                  </h2>
                  <p className="text-light mb-0">our Stuff</p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12345
                  </h2>
                  <p className="text-light mb-0">Total customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Afooter />
    </>
  );
}

export default Dashboard;
