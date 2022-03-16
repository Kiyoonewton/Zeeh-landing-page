import React from "react";
import LeftMenu from "./Components/LeftMenu";
import MainContainer from "./Components/MainContainer";
import RightMenu from "./Components/RightMenu";
import "./Spotify.css";

function Spotify() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default Spotify;
