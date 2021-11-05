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
            snowaddict is created by a team of snow enthusiast with aims to connect fellow riders to their next
            set of gear. Our team consists of members from across the globe. You will find us riding on powder days
            and working hard at the desk in between. 


          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
