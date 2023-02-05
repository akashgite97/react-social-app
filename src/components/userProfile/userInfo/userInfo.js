import React from "react";
import "./userInfo.scss";

const UserInfo = ({user}) => {
console.log("address",user)
  return (
    <div className="userInfoContainer">
      <div className="userInfoTop">
        <h4>User Information</h4>
        <div className="userDetails">
          <span>
            <strong>City: </strong> {user?.address?.city}
          </span>
          <span style={{ padding: "10px 0px" }}>
            <strong>State: </strong> {user?.address?.state}
          </span>
          <span>
            <strong>Email: </strong> {user?.email}
          </span>
        </div>
      </div>
      <div className="userInfoBottom">
        <h4>User Friends</h4>
        
      </div>
    </div>
  );
};

export default UserInfo;
