import React from 'react'

import SideBarMenu from './sideBarMenu/sideBarMenu'
import IconButton from '@mui/material/IconButton'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Divider from "@mui/material/Divider";
import './sideBar.scss'

const SideBar = () => {
  return (
    <div className='sideBar'>
    <div className="sidebarWrapper">
    <SideBarMenu />
    <Divider />
    </div>
    </div>
  )
}

export default SideBar