
import React from 'react';
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Info from "components/Typography/Info.js";

import LoadingAnimation from "views/LoadingAnimation.js";
import GearListPagination from "./GearListPagination.js";

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";
const useStyles = makeStyles(gearSectionStyle);

const GearList = props => {
  const classes = useStyles();
  console.log(props.gears);
  if (!props.gears) {
    return (
      <LoadingAnimation />
    );
  }

  if (props.gears.length === 0) {
    return (
      <div className={classes.section}>
        No gears to show
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
            <h4 className={classes.cardTitle}>Explore Gears</h4>
  
          </CardHeader>
  
  
          <CardBody plain className={classes.sectionCard}>
            <GridContainer >

              {
                props.gears.map(gear => {
                  return (
                    <GridItem xs={12} sm={6} md={3} className={classes.textCenter} key={gear.id.toString()}>

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
            <GridContainer >
              <GridItem>
                <GearListPagination
                  pager={props.pager}
                  gearsCount={props.gearsCount}
                  currentPage={props.currentPage} 
                  category={props.category}
                  pageLimit={props.pageLimit}
                  />
              </GridItem>
            </GridContainer>

          </CardBody>
        </Card>

    </div>



  );
};

export default GearList;
