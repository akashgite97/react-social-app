import React from "react";
import "./sideBarProfile.scss";

const SideBarProfile = ({ user }) => {
  return (
    <div className="sideBarProfile">
      <img src={user.image} alt="profileImg" className="profileImage" />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
    </div>
  );
};

export default SideBarProfile;
