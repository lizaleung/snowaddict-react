import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>We are a group of snow addicts!</h2>

          <h5 className={classes.description}>
            Snow Addict is a ski and snowboard gear and travel website that provides 
            information and reviews for those researching  about their next snow destination 
            and gears. The aim of our website is to provide a platform faciliting information 
            and experience sharing about anything related to snow rides! 


          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
