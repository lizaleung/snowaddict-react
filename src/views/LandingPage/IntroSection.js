import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AcUnit from "@material-ui/icons/AcUnit";
import Favorite from "@material-ui/icons/Favorite";
import ThumbUp from "@material-ui/icons/ThumbUp";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Button from "../../components/CustomButtons/Button.js";


import landingPageSections from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(landingPageSections);
// const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Showcase your Snow Quiver</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Get inspired from professional snow riders and skiers."
              description=""
              icon={AcUnit}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Show off your snow quiver with photos &amp; your gear reviews."
              description=""
              icon={Favorite}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Save gear to your wishlist and find your next gear at the cheapest price."
              description=""
              icon={ThumbUp}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <Link to="/register" className={classes.link}>
          <Button color="warning" size="lg">
            Get Started Now
          </Button>
        </Link>

      </div>
    </div>
  );
}
