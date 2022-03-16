import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../img/track.png";

function TrackList() {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="" />
        <p>
          Sample Name <span>Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input className="volume" type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export default TrackList;
