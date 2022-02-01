import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import bg5 from "assets/img/bg5.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested() {
  const classes = useStyles();
  return (
    <div className={classes.section}>

      <GridContainer>
        <GridItem xs={12} sm={6} >
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src={bg5} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + bg5 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Info>
                <h6>PEOPLE</h6>
              </Info>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Remembering Jake Burton
                </a>
              </h4>
              <p className={classes.description}>
                'Dear Rider: The Jake Burton Story' is a fantastic sports documentary released by HBO. 
                A moving story of a man with drive and against the whole ......
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={blog5} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + blog5 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Success>
                <h6>GEAR</h6>
              </Success>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  Airline Ski and Snowboard Fees
                </a>
              </h4>
              <p className={classes.description}>
                All airlines have special baggage policies for your skis and snowboards 
                so we have put together a quick summary of how each domestic US airline treat your snow equipment!
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={blog6} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + blog6 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <Danger>
                <h6>
                  <TrendingUp /> GEAR
                </h6>
              </Danger>
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                  What to Pack for a Ski Trip
                </a>
              </h4>
              <p className={classes.description}>
                Not sure what to buy, borrow or bring from home for your ski vacation? 
                Here’s a lowdown of all the essentials you need to pack for ski trip. 
                Or if you need a comprehensive packing checklist, see our Ski Trip Packing List.
                <a href="#pablo"> Read More </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
