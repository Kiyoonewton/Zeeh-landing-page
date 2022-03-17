import React from "react";
import Bottom from "./Bottom";
import Biz from "./../../Assest/Inflow_Business_Screenshot 3.png";
import Rectangle from "./../../Assest/Rectangle6.png";
import logo from "./../../Assest/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <section id="header">
      <div className="header_wrapper">
        <div className="header_container">
          <div className="left">
            <div className="text_head">
              <h1>
                <span>Get access </span>
                <span>to bank accounts with confidence</span>
              </h1>
            </div>
            <div className="p_text">
              <p>
                Zeeh facilitates seamless access to high-quality financial data
                and safe direct bank payments.
              </p>
            </div>
            <Button />
          </div>
          <div className="header_right">
            <div className="svg1">
              <img src={Biz} alt="Inflow Business" />
            </div>
            <div className="svg2">
              <img src={Rectangle} alt="Rectangle" />
            </div>
            <div className="svg3">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </section>
  );
};

export default Header;
