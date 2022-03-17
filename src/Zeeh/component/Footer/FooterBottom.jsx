import React from "react";
import twit from "./../../Assest/twitter.png";
import link from "./../../Assest/linked_in.png";

const FooterBottom = () => {
  return (
    <div className="footerbottom_div">
      <div className="footerbottom_top">
        <div className="footerBottom_top1">
          <div className="img"></div>
          <h6>Privacy — Terms</h6>
        </div>
        <div className="footerBottom_top2">
          <p>Product</p>
          <ul>
            <li>
              <a>Authentication</a>
            </li>
            <li>
              <a>Finance Manager</a>
            </li>
            <li>
              <a>Direct Debit</a>
            </li>
            <li>
              <a>Universal card</a>
            </li>
            <li>
              <a>Payment</a>
            </li>
          </ul>
        </div>
        <div className="footerBottom_top3">
          <p>Resources</p>
          <ul>
            <li>
              <a>API Docs</a>
            </li>
            <li>
              <a>Libraries SDKs </a>
            </li>
            <li>
              <a>Demo</a>
            </li>
            <li>
              <a>Join Slack</a>
            </li>
          </ul>
        </div>
        <div className="footerBottom_top4">
          <p>Company</p>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Coverage</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="footerBottom_top5">
          <p>Legal</p>
          <ul>
            <li>
              <a>Developer Policy</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>End-user Policy</a>
            </li>
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Cookies</a>
            </li>
            <li>
              <a>Security</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerbottom_bottom">
        <div className="footerbottom_bottom__left">
          &copy; Copyright, Zeeh Africa 2022
        </div>
        <div className="footerbottom_bottom__right">
          <span>
            <a href="#">
              <img src={twit} alt="" />
            </a>
          </span>
          <span>
            <a href="#">
              <img src={link} alt="" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
