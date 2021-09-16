import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import {Helmet} from "react-helmet"

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// import styles from "assets/jss/material-kit-pro-react/views/landingPage.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";


// Sections for this page

import ContactUs from "./ContactUs.js";
import IntroSection from "./IntroSection"
import TrendingSection from "./TrendingSection"
import BlogSection from "./BlogSection"
import bg from "assets/img/snowaddictnet/landing-bg.JPG";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Snowaddict Home</title>
        <meta name="A place to share your favorite snowboards" 
              content="A place to share your favorite snowboards" />
      </Helmet>
      <Parallax filter image={bg} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Gear Up For the Pow Ride</h1>
              <h4>
                Find your next adventure and enjoy everything that comes with it. We provide the snow reports, gear reviews and expert insight from the people who live for powder days.
              </h4>
              <br />
              <Link to="/register" >

              <Button
                color="warning"
                size="lg"
              >
                <b>
                Get Started
                </b>
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <IntroSection />
          {/* <BlogSection /> */}
          <TrendingSection />
          {/* <ContactUs /> */}
        </div>
      </div>
      
    </div>
  );
}
