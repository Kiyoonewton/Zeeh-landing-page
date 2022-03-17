import React from "react";
import dax from "./../../Assest/daxlinks1.png"
import dax2 from "./../../Assest/daxlinks2.png"
import tom from "./../../Assest/tomxcredit1.png"
import fks from "./../../Assest/fksavings1.png"
import cord from "./../../Assest/cordialexchange1.png"


const Bottom = () => {
  return (
    <div className="head_bottom">
      <div className="bot_top">Trusted By</div>
      <div className="bot_down">
        <span>
          <img src={dax} alt="logo" />
          <img src={dax2} alt="logo" />
        </span>
        <span>
          <img src={tom} alt="logo" />
        </span>
        <span>
          <img src={fks} alt="logo" />
        </span>
        <span>
          <img src={cord} alt="logo" />
        </span>
      </div>
    </div>
  );
};

export default Bottom;
