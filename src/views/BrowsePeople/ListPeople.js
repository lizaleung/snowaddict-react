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
import Info from "components/Typography/Info.js";

// import styles from "../../assets/jss/material-kit-pro-react/views/homePageSections/browsePersonStyle.js";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";
import Filter from "./Filter";


const useStyles = makeStyles(gearSectionStyle);

const ListPeople = props => {
  const people = props.people;
  const classes = useStyles();
  
  if (people) {
    return (
  
      <div className={classes.section}>
        <Card>
          <CardHeader
            color="primary"
            signup
            className={classes.cardHeader}
          >
            <h4 className={classes.cardTitle}>Explore Riders</h4>
  
          </CardHeader>
  
  
          <CardBody plain style={{minHeight: "800px"}}>

            <GridContainer>
              <GridItem xs={12} className={classes.textCenter} >
              <Filter choiceList={props.choiceList} onApplyFilter={props.onApplyFilter} />
              </GridItem>
              {
                people.map(person => {
                  return (

                    <GridItem xs={12} md={4} lg={3} className={classes.textCenter} key={person.id.toString()}>
                      <Link to={"/people/" + person.slug}>
                        <Card blog plain>
                          <CardHeader plain 
                                style={{
                                minHeight: '200px'

                          }}>
                            <img src={person.avatar} alt="..." style={{
                                maxWidth: '180px'
                              }}
                           />
                          </CardHeader>
                          <CardBody plain >
                            <Info>
                              <h4>{person.full_name}</h4>
                            </Info>
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
      <div className={classes.section} className="center">
        <LoadingAnimation />
      </div>
    );
  }


}
export default ListPeople;
