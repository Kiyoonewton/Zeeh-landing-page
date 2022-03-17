import React from "react";
import Button from "../Header/Button";
import rectangle from "./../../Assest/Rectangle.png";

const FooterMid = () => {
  return (
    <div className="footerMid_div">
      <div className="footerMid_left">
        <h4>Get started with Zeeh</h4>
        <p>
          Gain direct access to financial data and process payments straight
          from bank accounts.
        </p>
        <Button />
      </div>
      <div className="footerMid_right">
        <img src={rectangle} alt="Phone Banking" />
      </div>
    </div>
  );
};

export default FooterMid;
