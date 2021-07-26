import React from "react";
import { Link } from "react-router-dom";
import LoadingAnimation from "views/LoadingAnimation.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Person from "@material-ui/icons/Person";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

// import styles from "../../assets/jss/material-kit-pro-react/views/homePageSections/browsePersonStyle.js";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";


const useStyles = makeStyles(gearSectionStyle);

const BrowsePerson = props => {
  const persons = props.persons;
  const classes = useStyles();
  
  if (persons) {
    console.log("in BrowsePerson" +persons)
    return (
  
      <div className={classes.section}>
        <Card>
          <CardHeader
            color="warning"
            signup
            className={classes.cardHeader}
          >
            <h4 className={classes.cardTitle}>Explore gear used by your favorite athlete</h4>
  
          </CardHeader>
  
  
          <CardBody plain>
            <GridContainer  justify="center">
              {
                persons.map(person => {
                  return (
                    <GridItem xs={12} sm={6} md={3} className={classes.textCenter}>
                      <Link to={"/people/" + person.display_name  }>
                      <InfoArea
                        title={person.full_name}
                        description=""
                        icon={Person}
                        image={person.avatar}
                        iconColor="info"
                        vertical
                      />
    
      
      
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
      <div className={classes.section} className="center">
        <LoadingAnimation />
      </div>
    );
  }


}
export default BrowsePerson;
