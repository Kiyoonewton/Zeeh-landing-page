import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import vector from "./../../Assest/vector.png";

const Middle = () => {
  return (
    <div id="middle">
      <div className="mid_top">
        <h2>Create a foundation for the future of digital finance.</h2>
        <h3>With Zeeh, you have access to several amazing features</h3>
      </div>
      <div className="mid_link">
        <ul>
          <li className="active">
            <a href="#" >Authentication</a>
          </li>
          <li>
            <a href="#">Finance Manager</a>
          </li>
          <li>
            <a href="#">Direct Debit</a>
          </li>
          <li>
            <a href="#">Universal Card</a>
          </li>
          <li>
            <a href="#">Payment</a>
          </li>
        </ul>
      </div>
      <div className="mid_bottom">
        <div className="mid_bottom__left">
          <h2>Get swift access to your bank accounts</h2>
          <p>
            Customers can use their internet or mobile banking credentials to
            connect their bank accounts directly to financial applications,
            making onboarding faster and safer.
          </p>
          <a href="#home">
            Learn more <AiOutlineArrowRight />
          </a>
        </div>
        <div className="mid_bottom__right">
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default Middle;
