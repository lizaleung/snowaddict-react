import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: "All",
                tabContent: ""
              },
              {
                tabButton: "Gear",
                tabContent: ""
              },
              {
                tabButton: "Resorts",
                tabContent: ""
              },
              {
                tabButton: "Preparation",
                tabContent: ""
              },
              {
                tabButton: "People",
                tabContent: ""
              }
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>GEAR</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Airline Ski and Snowboard Fees
                </h3>
              </a>
              <p className={classes.category}>
                All airlines have special baggage policies for your skis and snowboards 
                so we have put together a quick summary of how each domestic US airline treat your snow equipment!
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + blog8 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>PEOPLE</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Remembering Jake Burton
                </h3>
              </a>
              <p className={classes.category}>
                'Dear Rider: The Jake Burton Story' is a fantastic sports documentary released by HBO. 
                A moving story of a man with drive and against the whole ......
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + cardProject6 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>GEAR</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  What to Pack for a Ski Trip
                </h3>
              </a>
              <p className={classes.category}>
                Not sure what to buy, borrow or bring from home for your ski vacation? 
                Here’s a lowdown of all the essentials you need to pack for ski trip. 
                Or if you need a comprehensive packing checklist, see our Ski Trip Packing List.
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Read article
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
