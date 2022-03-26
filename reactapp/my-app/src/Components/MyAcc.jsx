import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../Context";

function MyAcc() {
  const { user } = useContext(AuthContext);
  return (
        <Card  sx={{ m:5,bgcolor: "#a6c6c1",borderRadius:5,border:'2px solid teal',color:'#5297ac' }}>
        <CardContent>
      <Avatar alt="none" src={user.avatar_url}  sx={{ width: 250, height: 250, ml:3,mt:3, border:'3px solid #5297ac' }}/>
     
         <Typography sx={{ fontSize:34}} >Login:{' '} 
      {user.login !== null 
        ?<span style={{color:'teal'}}>{user.login}</span>
        :<span style={{color:'teal'}}>there is no Login</span>
        }</Typography>

      <Typography sx={{ fontSize:34 }}>Email:{' '} 
      {user.email !== null 
        ?<span style={{color:'teal'}}>{user.email}</span>
        :<span style={{color:'teal'}}>there is no Email</span>
        }
        </Typography>

      <Typography sx={{ fontSize:34  }}>
        Company:{' '}
        {user.company !== null 
        ?<span style={{color:'teal'}}>{user.company}</span>
        :<span style={{color:'teal'}}>there is no Company</span>
        }
      </Typography>
      <Typography sx={{ fontSize:34  }}>Location:{' '}
      {user.location !== null 
        ?<span style={{color:'teal'}}>{user.location}</span>
        :<span style={{color:'teal'}}>there is no Location</span>
        }</Typography>

      <Typography sx={{ fontSize:34  }}>Bio:{' '} 
      {user.bio !== null 
        ?<span style={{color:'teal'}}>{user.bio}</span>
        :<span style={{color:'teal'}}>there is no Bio</span>
        }</Typography>

      <Typography sx={{ fontSize:34  }}>URL:{' '}
      {user.url !== null 
        ?<a href={user.url}>{user.url}</a>
        :<span style={{color:'teal'}}>there is no URL</span>
        }</Typography>
        </CardContent>
        </Card>
  );
}

export default MyAcc;
