import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
import Container from '@material-ui/core/Container'


// import { Carousel } from 'react-responsive-carousel';

// import image1 from "../../assets/img/bg.jpg";
// import image2 from "../../assets/img/bg2.jpg";
// import image3 from "../../assets/img/bg3.jpg";

import styles from "../../assets/jss/material-kit-pro-react/views/gearItemPage.js";

const useStyles = makeStyles(styles);
export default function BasicInfo(props) {
  const classes = useStyles();

  return (
    <div>
    <Container fixed>
        <div className={classes.title}> 
         <h2>  { props.gear.title } </h2> { props.gear.year } 
         <p>{""}</p>
         <p>{ props.gear.brand }          </p> 
         <p>{ props.gear.description }    </p> 

        </div>       
    </Container>
    </div>
  );
}
