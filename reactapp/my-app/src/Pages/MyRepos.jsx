import React, { useContext, useMemo, useState } from "react";
import Header from "../Components/Header";
import { Card, CardContent, Typography,Box, InputLabel,MenuItem,FormControl,Select} from "@mui/material";
import {  AuthContext } from "../Context";



function MyRepos() {
  const { arrayRepos } = useContext(AuthContext);
  const [changer, setChanger] = useState(false);

  const handleChange = (event) => {
    setChanger(event.target.value);
  };

  const sortedRepos = useMemo(() => {
    if (changer === false) {
      return [...arrayRepos].filter((repos) => repos.private == false);
    }  
    else {
      return [...arrayRepos].filter((repos) => repos.private == true);
    }
  }, [changer]);

  return (
    <div>
      <Header/>
      <Box sx={{width:375,mt:3}}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Filter</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={changer}
          label="sort"
          onChange={handleChange}
        >
          <MenuItem value={false}>Public</MenuItem>
          <MenuItem value={true}>Private</MenuItem>
        </Select>
      </FormControl>
    </Box>
      {sortedRepos.length !== 0 
      ? 
        sortedRepos.map(repos =>
          <Card key={repos.name} sx={{mt:1,bgcolor: "#a6c6c1",borderRadius:5,p:1}}>
            <CardContent>
              <Typography color={"teal"}>{repos.name}</Typography>
              <a href={repos.clone_url}>{repos.clone_url}</a>
              <Typography>
                Owner: {repos.owner.login} <br /> URL:{" "}
                <a href={repos.owner.url}>{repos.owner.url}</a>
              </Typography>
            </CardContent>
          </Card>
        )
      : <div>You haven`t Repositories</div>
      }
    </div>
  );
}

export default MyRepos;
