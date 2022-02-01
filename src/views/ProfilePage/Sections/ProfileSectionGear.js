import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../agent';

import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_GEAR_SECTION_LOADED,
  PEOPLE_PAGE_GEAR_SECTION_UNLOADED
} from 'constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

// @material-ui/icons
import Star from "@material-ui/icons/Star";
import People from "@material-ui/icons/People";
import AcUnit from "@material-ui/icons/AcUnit";
// import Favorite from "@material-ui/icons/Favorite";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";


import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import LoadingAnimation from "views/LoadingAnimation.js";




const mapStateToProps = state => ({
  gears: state.people.gears
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_PAGE_GEAR_SECTION_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_PAGE_GEAR_SECTION_UNLOADED })
});

class ProfileSectionGear extends React.Component {

  componentDidMount() {
    console.log("this.props.displaynameslug = " + this.props.displaynameslug)
    this.props.onLoad(
      agent.Gears.byPerson(this.props.displaynameslug)
    );

  }


  componentWillUnmount() {
    // this.props.onUnload();
  }


  render() {
    
    const  { classes } = this.props;

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    
    const gears = this.props.gears;
    console.log("gears" + this.props)
    if (!gears ) {
      return(
        <div className={classes.gearShowcase}>
          
        </div>
      )

    } else if (gears.length == 0) {
      return(
        <div className={classes.gearShowcase}>
              <div className={classes.container}>
                <GridContainer justifyContent="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <h3>No Setups Yet</h3>
                  </GridItem>
                </GridContainer>
              </div>
        </div>
      )

    


    } else {


      return (

        <div className={classes.gearShowcase}>

          <div className={classes.container}>

            <h3>Setup</h3>
            <GridContainer>
              
                  {
                    gears.map(gear => {
                      return (


                        <GridItem md={4} sm={4}>
                          <Card product plain>
                            <CardHeader image plain>
                              <a href={"/product/" + gear.slug} >
                                <img src={gear.image} alt="..." />
                              </a>
                              <div
                                className={classes.coloredShadow}
                                style={{ backgroundImage: `url(${gear.slug})`, opacity: 1 }}
                              />
                            </CardHeader>
                            <CardBody className={classes.textCenter} plain>
                              <h4 className={classes.cardTitle}>
                                {gear.brand_name + " " + gear.title + " " + gear.year}
                              </h4>
                              <p className={classes.cardDescription}>
                                The structured shoulders and sleek detailing ensure a sharp
                                silhouette. Team it with a silk pocket square and leather
                                loafers.
                              </p>
                            </CardBody>
                            <CardFooter plain>
{/*
                              <div className={classes.priceContainer}>
                                <span className={classNames(classes.price, classes.priceOld)}>
                                  {" "}
                                  €1,430
                                </span>
                                <span className={classNames(classes.price, classes.priceNew)}>
                                  {" "}
                                  €743
                                </span>
                              </div>
*/}
                              <div className={classNames(classes.stats, classes.mlAuto)}>
                                <Tooltip
                                  id="tooltip-top"
                                  title="Saved to Wishlist"
                                  placement="top"
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button justIcon simple color="rose">
                                    <Favorite />
                                  </Button>
                                </Tooltip>
                              </div>
                            </CardFooter>
                          </Card>
                        </GridItem>




                      )
                    })
                  }


            </GridContainer>
          </div>
        </div>




  
      );



    }



  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfileSectionGear));



