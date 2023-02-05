import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sideBarProfile.scss";


const SideBarProfile = ({ user, isOnline }) => {
  return (
    <div className="sideBarProfile">
      <img src={user.image} alt="profileImg" className="profileImage" />
      {isOnline && <span className="onlineStatus"></span>}

      <NavLink to={`/userprofile/${user.id}`} className="profileLink">{user.firstName} {user.lastName}</NavLink>
    
    
        
      
    </div>
  );
};

export default SideBarProfile;
