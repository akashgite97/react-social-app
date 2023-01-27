import React from 'react'
import Topbar from './../../components/topbar/topbar';
import SideBar from './../../components/sideBar/sideBar';
import Feed from './../../components/feed/feed';
import RightBar from './../../components/rightBar/rightBar';
import './home.scss'

const Home = () => {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
      </>
  )
}

export default Home