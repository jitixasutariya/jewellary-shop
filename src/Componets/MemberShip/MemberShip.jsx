import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MemberShip.css";

const MemberShip = () => {
  return (
    <div className="memberShip container-fluid py-4 mt-3 mb-3">
      <div className="row text-center align-items-center">
        <div className="col-md-4">
          <h1 className="memberShip-title">Golden Citizen Membership</h1>
        </div>
        <div className="col-md-4">
          <h3 className="middleDesc">Plus 5% Rewards and Free Shipping</h3>
        </div>
        <div className="col-md-4">
          <button className="join-now">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
