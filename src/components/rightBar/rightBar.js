import React from "react";
import "./rightBar.scss";
import SideBarProfile from "../sideBar/sideBarProfile/sideBarProfile";

const RightBar = ({users}) => {

  return (
    <div className="rightBar">
      <div className="rightbarTop">
        <div className="notifyDaily">
          <img src="/assets/gift.png" alt="notifyDaily" className="giftImg" />
          <span className="notifyText">
            <strong>Akash Gite</strong> and <strong>3 other friends</strong>
            <br /> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="adImg" className="adImg" />
      </div>
      <div className="rightbarBottom">
      <h4>Online friends</h4>
      {users.map((user)=>(
        <SideBarProfile user={user} isOnline/>
      ))}
      </div>
    </div>
  );
};

export default RightBar;
