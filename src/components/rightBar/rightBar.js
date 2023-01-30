import React from "react";
import { useState,useEffect } from 'react';
import axios from 'axios'
import "./rightBar.scss";
import SideBarProfile from "../sideBar/sideBarProfile/sideBarProfile";

const RightBar = () => {

  const[users, setUsers] = useState([]);

const getAllUsers = async () =>{
  const usersData = await axios.get("https://dummyjson.com/users")
  setUsers(usersData?.data?.users)
}

useEffect(()=>{
  getAllUsers()
},[])


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
