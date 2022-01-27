import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import agent from '../../agent';

import { connect } from 'react-redux';


// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";


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






const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({


});

class LandingPage extends React.Component {

  componentDidMount() {


  }


  componentWillUnmount() {
  }


  render() {
    const  { classes } = this.props;
    console.log(this.props.peoples)

    return (
      <>

        <Parallax image={bg} small>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Be Gear Ready</h1>
                <h4>
                  Wondering what board your favorite snowboarder rides? 
                </h4>
                <br />
                <Link to="/register" >

                <Button
                  color="warning"
                  size="lg"
                >
                  <b>
                  Let's Get Started
                  </b>
                </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <IntroSection />


            <TrendingSection />
            {/* <BlogSection /> */}          
            {/* <ContactUs /> */}
          </div>
        </div>
        
      </>
    );

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(landingPageStyle)(LandingPage));
