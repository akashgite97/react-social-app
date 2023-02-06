
import RightBar from "./components/rightBar/rightBar";
import SideBar from "./components/sideBar/sideBar";
import Home from "./pages/home/home";
import Feed from "./components/feed/feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from './components/userProfile/userProfile';
import TopBar from './components/topbar/topbar';
import "./App.scss";
import { useState, useEffect } from "react";
import axios from 'axios'
import Login from "./pages/login/login";



function App() {

  const[users, setUsers] = useState([]);

const getAllUsers = async () =>{
  const usersData = await axios.get("https://dummyjson.com/users")
  setUsers(usersData?.data?.users)
}

useEffect(()=>{
  getAllUsers()
},[])

  return (
    <div className="App">
      <BrowserRouter>
      <TopBar />
        <Routes>
          <Route exact path="/" element={<Home users={users} />} />
          <Route exact path="/userProfile/:userId" element={<UserProfile users={users}/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="/*" element={<h4>404 page not found</h4>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
