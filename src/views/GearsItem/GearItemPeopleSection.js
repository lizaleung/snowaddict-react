import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

// import team1 from "../../assets/img/faces/avatar.jpg";
// import team2 from "../../assets/img/faces/christian.jpg";
// import team3 from "../../assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);


const GearItemPeopleSection = props => {
  console.log(props.gear.gear.ownedBy);

  const profiles = props.gear.gear.ownedBy;

  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>


          {
            profiles.map(profile => {
              return (

                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={ profile.avatar } alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      { profile.full_name }
                      <br />
                      <small className={classes.smallTitle}>{ profile.display_name }</small>
                    </h4>
                    <CardBody>
                      <p className={classes.description}>
                        { profile.bio }
                      </p>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                    </CardFooter>
                  </Card>
                </GridItem>

              );
            })
          }



        </GridContainer>
      </div>
    </div>
  );
}

export default GearItemPeopleSection;
