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
            color="warning"
            signup
            className={classes.cardHeader}
          >
            <h4 className={classes.cardTitle}>Browse gear in these popular brands</h4>
  
          </CardHeader>
  
          <CardBody plain>
  
            <GridContainer >
              {
                brands.map(category => {
                  return (
                    
                    <GridItem xs={12} sm={6} md={3} className={classes.textCenter}>
                      <Link to={"/brand/" + category.slug}>
                      <InfoArea
                        title={category.name}
                        description=""
                        icon={Class}
                        image={category.image}
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
      <LoadingAnimation />
    );
  }
};

export default ListBrand;
