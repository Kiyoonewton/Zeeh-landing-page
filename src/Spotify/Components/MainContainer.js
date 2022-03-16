import React, { useEffect } from "react";
import "./MainContainer.css";

import "./MainContainer.css";
import Banner from "./Banner";
import { FaUsers } from "react-icons/fa";
import AudioList from "./AudioList";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");
    function changeMenuactive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuactive));
  }, []);
  return (
    <div className="mainContainer">
      <Banner />
      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>

          <li>
            <a href="#">Album</a>
          </li>

          <li>
            <a href="#">Songs</a>
          </li>

          <li>
            <a href="#">Fans</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
}

export default MainContainer;
