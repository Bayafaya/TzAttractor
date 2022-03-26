import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Header from "../Components/Header";

function OtherUsers() {
  const [value, setValue] = useState("");
  const [resultOfSearch, setResultOfSearch] = useState([]);
  const [publicRepos, setPublicRepos] = useState([]);
 
  async function GetUsers() {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${value}`
    );
    setResultOfSearch(response.data.items);
  }
  async function showPublicRepos(urlToRepos) {
    const response = await axios.get(urlToRepos);
    const sorted = response.data.sort((result) => result.private === "false")
    setPublicRepos([...publicRepos,...sorted]);
  }

  return (
    <div style={{ justifyContent:"center"}}>
      <Header />
      <Typography sx={{fontSize:28}}>Result of Search:{resultOfSearch.length > 1
      ? <span> {resultOfSearch.length} Users</span>
      : <span> {resultOfSearch.length} User</span>
      } </Typography>
      <TextField
        sx={{ mt: 3 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="outlined-basic"
        label="Search..."
        variant="outlined"
      />
      <Button sx={{ mt: 4, ml: 4,bgcolor:'black' }} variant="contained" onClick={GetUsers}>
        Search
      </Button>
     
      {resultOfSearch.map((repos) => (
        <Card sx={{mt:1,bgcolor: "#a6c6c1",borderRadius:5,p:1}}>
          <CardContent>
            <Button sx={{bgcolor:'#5297ac',mb:1}} variant="contained"
              key={repos.id}
              onClick={(e) => showPublicRepos(repos.repos_url)}
            >
              {repos.login}
            </Button>
            {publicRepos.map(every =>{
              if(every.owner.login === repos.login){
               return(
                 <Typography sx={{color:'teal'}}>
              {every.name} : <a href={every.clone_url}>{every.clone_url}</a>
            </Typography>
               )  
              }
            }
            
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default OtherUsers;
