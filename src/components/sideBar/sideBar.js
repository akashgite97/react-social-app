import React from 'react'

import SideBarMenu from './sideBarMenu/sideBarMenu'
import IconButton from '@mui/material/IconButton'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Divider from "@mui/material/Divider";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle"

import HelpIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import Button from '@mui/material/Button';
import './sideBar.scss'
import { useState,useEffect } from 'react';
import axios from 'axios'
import SideBarProfile from './sideBarProfile/sideBarProfile';

const SideBar = () => {

const[users, setUsers] = useState([]);

const getAllUsers = async () =>{
  const usersData = await axios.get("https://dummyjson.com/users")
  setUsers(usersData?.data?.users)
}

useEffect(()=>{
  getAllUsers()
},[])

  return (
    <div className='sideBar'>
    <div className="sidebarWrapper">
    <SideBarMenu Icon={RssFeedIcon} title="Feed" />
    <SideBarMenu Icon={ChatIcon} title="Chats" />
    <SideBarMenu Icon={PlayCircleIcon} title="Videos" />
    <SideBarMenu Icon={PlayCircleIcon} title="Groups" />
    <SideBarMenu Icon={PlayCircleIcon} title="Bookmarks" />
    <SideBarMenu Icon={HelpIcon} title="Questions" />
    <SideBarMenu Icon={EventIcon} title="Jobs" />
    <SideBarMenu Icon={SchoolIcon} title="Events" />
    <SideBarMenu Icon={HelpIcon} title="Courses" />
    <Button className="btn-show-more" variant="contained">Show More</Button>
    <Divider />
    <div className="sidebarProfile">
    {users.map((user)=>(
      <SideBarProfile user={user} />
    ))}
    </div>
    </div>
    </div>
  )
}

export default SideBar