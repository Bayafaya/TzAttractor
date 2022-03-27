import React, { useEffect, useMemo, useState }  from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Profile from "./Pages/Profile";
import MyRepos from "./Pages/MyRepos";
import OtherUsers from "./Pages/OtherUsers";
import { AuthContext } from "./Context";
import Login from "./Pages/Login";



function App() {
  const [user, setUser] = useState({});
  const [arrayRepos, setArrayRepos] = useState([]);
  
  useEffect(() => {
    fetching()
  }, []);
  
   useMemo(()=>{
    getRepos();
   },[user]) 

  async function fetching() {
    fetch("https://api.github.com/user", {
      headers: {
        Authorization: "token  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",
      },
    })
      .then(response => response.json())
      .then(json => setUser(json))
  }
  async function getRepos()  {
    const response = await axios.get(user.repos_url);
    setArrayRepos(response.data);
  }

  return (
    <AuthContext.Provider value={{
      user,
      arrayRepos,
    }}>
         <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/repos" element={<MyRepos/>}/>
            <Route path="/search" element={<OtherUsers/>}/>
            <Route path="*" element={<Navigate to="/profile" replace />}/>
          </Routes>
        </Router>
    </AuthContext.Provider>
  );
}
export default App;
