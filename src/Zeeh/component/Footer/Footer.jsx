import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="footer_text">
        <div className="footer_text_">
          <h5 className="footer_h5__text">DEVELOPER EXPERIENCE</h5>
          <h4 className="footer_h4__text">Designed with developers in mind</h4>
          <p>
            We are building a product that allows customers to link all their
            bank or financial accounts and bio data in one place. Hence, we help
            boost business operations by getting a full KYC profile for an
            individual or corporate entity across all banks in Nigeria— this
            protects their businesses from risk and fraud and helps them make a
            better and faster financial/lending decision
          </p>
        </div>
        <div className="footer_btns">
          <span className="footer_btn1">
            <button>Read our API docs</button>
          </span>
          <span className="footer_btn2">
            <button>Join us on Slack</button>
          </span>
        </div>
      </div>
      <div>
        <FooterMid />
      </div>
      <div>
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;
