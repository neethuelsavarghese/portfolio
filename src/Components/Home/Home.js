import React from 'react';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../assets/avatar.png";

const useStyles=makeStyles((theme)=>({ 

avatar:{

  width:theme.spacing(15),
  height:theme.spacing(15),
  margin:theme.spacing(1),
  
},

boxclass:{

  position:"absolute",
  top:"50%",
  left:"50%",
  width:"100vw",
  textAlign:"center",
  transform:"translate(-50%,-50%)",
  zIndex:1,
},

title:{
  color:"tomato",
},

subtitle:{
color:"tan",
textTransform:"uppercase",

},
}))

const Home = () => 
{
  const classes=useStyles();
  
  return(

    <Box className={classes.boxclass}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Neethu Varghese" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Neethu Varghese"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "React Js",
            "Vanilla Js",
            "PHP",
            "Word Press",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>

  )
}
export default Home;