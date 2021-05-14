import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Muted from "components/Typography/Muted.js";
// import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg7.jpg";


import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";



const useStyles = makeStyles(signupPageStyle);

export default function PromptNewProfile() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
        <h2>  set up your profile! </h2>
        </div>
      </div>
    </div>
  );
}
