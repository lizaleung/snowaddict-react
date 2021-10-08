import React from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Toys from "@material-ui/icons/Toys";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import CardFooter from "components/Card/CardFooter.js";

import { Helmet } from 'react-helmet';

import LoadingAnimation from "views/LoadingAnimation.js";

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

const useStyles = makeStyles(gearSectionStyle);

const BrowsePerson = props => {
  const gears = props.gears;
  const classes = useStyles();
  console.log(gears);
  if (gears) {

    if (gears.length === 0 ) {
      return (
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <h2 className={classes.title}>Explore Gears:</h2>
              <h2> No gear found </h2>
            </GridItem>
          </GridContainer>
        </div>
      );
    }

    return (
      <div className={classes.section}>
        <Helmet>
          <title>Browse Gears</title>
        </Helmet>     
        <Card>
          <CardHeader
            color="warning"
            signup
            className={classes.cardHeader}
          >
            <h4 className={classes.cardTitle}>Explore in category</h4>
  
          </CardHeader>
  
  
          <CardBody plain>
            <GridContainer >
              {
                gears.map(gear => {
                  return (
                    <GridItem xs={12} sm={6} md={3} className={classes.textCenter}>


                      <Link to={"/product/" + gear.slug } >
                        <Card blog plain>
                          <CardHeader image plain>
                            
                              <img src={gear.image} alt="..." />
                            

                          </CardHeader>
                          <CardBody plain>
                            <Info>
                              <h6 className={classes.cardCategory}>{gear.title}</h6>
                            </Info>
                            <div className={classes.cardDescription}>
                               {gear.brand_name} - {gear.year}
                            </div>
                          </CardBody>
                        </Card>
                      </Link>



                    </GridItem>
                  );
                })
              }
            </GridContainer>
          </CardBody>
        </Card>
      </div>


    );

  } else {
    return (
      <LoadingAnimation />
    );
  }


}
export default BrowsePerson;




                      // <Link to={"/product/" + gear.slug } >
                      // <InfoArea
                      //   title={gear.title}
                      //   description=""
                      //   icon={Toys}
                      //   image={gear.image}
                      //   iconColor="info"
                      //   vertical
                      // />
      
      
                      // </Link>
