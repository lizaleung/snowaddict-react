import React from "react";
import { Link } from "react-router-dom";
import LoadingAnimation from "views/LoadingAnimation.js";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Class from "@material-ui/icons/Class";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

const useStyles = makeStyles(gearSectionStyle);

const ListBrand = props => {
  const brands = props.brands;
  const classes = useStyles();
  if (brands) {

    return (

      <div className={classes.section}>
        <Card>
          <CardHeader
            color="primary"
            signup
            className={classes.cardHeader}
          >
            <h4 className={classes.cardTitle}>Popular brands</h4>
  
          </CardHeader>
  
          <CardBody plain className={classes.sectionCard}>
  
            <GridContainer >
              {
                brands.map(brand => {
                  return (
                    
                    <GridItem xs={12} sm={6} md={4} lg={3} className={classes.textCenter} key={brand.id.toString()}>
                      <Link to={"/brand/" + brand.slug}>
                        <Card blog plain>
                          <CardHeader plain 
                                style={{
                                minHeight: '18vw'

                          }}>
                            <img src={brand.image} alt="..." />
                          </CardHeader>
                          <CardBody plain >
                            <Info>
                              <h4>{brand.name}</h4>
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
      <LoadingAnimation />
    );
  }
};

export default ListBrand;
