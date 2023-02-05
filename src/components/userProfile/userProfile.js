import React, { useState, useEffect } from "react";
import Share from "../share/share";
import SideBar from "../sideBar/sideBar";
import "./userProfile.scss";
import Post from "./../post/post";
import UserInfo from "./userInfo/userInfo";
import { useParams } from "react-router";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const { userId } = useParams();

  const getUserbyId = async () => {
    const userData = await axios.get(`https://dummyjson.com/users/${userId}`);
    console.log(userData?.data)
    setUser(userData?.data);
  };

  useEffect(() => {
    getUserbyId();
  }, [userId]);

  return (
    <div className="userContainer">
      <div className="userProfileLeft">
       
      </div>
      <div className="userProfileRight">
        <div className="userProfileRightTop">
          <img
            src="/assets/post/3.jpeg"
            alt="coverImage"
            className="coverImage"
          />
          <div className="userProfileDetails">
            <img
              src={user?.image}
              alt="coverImage"
              className="profileImage"
            />
          </div>
          <div className="profileText">
            <h2>{user.firstName} {user.lastName}</h2>
          </div>
          <span className="profileDescription">Hello my friends</span>
        </div>
        <div className="profileBottom">
          <div className="profBottomLeft">
            <Share />
            <Post />
          </div>
          <div className="profBottomRight">
            <UserInfo user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
