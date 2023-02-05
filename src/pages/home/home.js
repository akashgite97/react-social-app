import React from 'react'
import Topbar from './../../components/topbar/topbar';
import SideBar from './../../components/sideBar/sideBar';
import Feed from './../../components/feed/feed';
import RightBar from './../../components/rightBar/rightBar';
import './home.scss'

const Home = ({users}) => {
  return (
    <>
    <div className="homeContainer">
        <SideBar users={users} />
        <Feed users={users} />
        <RightBar users={users}/>
      </div>
      </>
  )
}

export default Home