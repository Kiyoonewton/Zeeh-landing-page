import React from "react";

const Nav = () => {
  return (
    <nav id="nav">
      <div className="nav_wrapper">
        <div className="logo_div"></div>
        <div className="link_div">
          <ul>
            <li>
              <a href="#home">Product</a>
            </li>
            <li>
              <a href="#home">Developers</a>
            </li>
            <li>
              <a href="#hone">Blog</a>
            </li>
            <li>
              <a href="#home">Why Zeeh</a>
            </li>
          </ul>
        </div>
        <div className="signIn">
          <button>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
