/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";

// import image from "assets/img/clint-mckoy.jpg";
import image from "assets/img/snowaddictnet/404.jpg";

const useStyles = makeStyles(errorPageStyle);

export default function ComingSoon({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              {/*<h1 className={classes.title}></h1>*/}
              <h2 className={classes.subTitle}>Coming soon!</h2>
              <h4 className={classes.description}>
                Sorry, we are still working on this. Please check back soon.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>

    </div>
  );
}
