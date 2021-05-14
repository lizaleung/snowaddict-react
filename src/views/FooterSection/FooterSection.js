/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";


import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function FooterSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>

        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple href="#pablo" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="#pablo" color="facebook">
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "} snow addict by {" "} 
                <a
                  href="http://www.arcticspark.co"
                  target="_blank"
                >
                  arcticspark
                </a>{" "}
              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <Link to="/" className="nav-link">
                <h5>snow addict</h5>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Browse</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="/browse" className="nav-link">
                      Gears
                    </Link>
                  </li>
                  <li>
                    <Link to="/brands" className="nav-link">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link to="/people" className="nav-link">
                      People
                    </Link>
                  </li>
                  <li>
                    <Link to="/resorts" className="nav-link">
                      Resorts
                    </Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="nav-link">
                      Blog
                    </Link>
                  </li>                  
                  <li>
                    <Link to="/contact-us" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="nav-link">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>

              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Get the latest snow gear news and trends
                </p>
                <form>
                  <CustomInput
                    id="footeremail"
                    formControlProps={{
                      fullWidth: false,
                      className: classes.customFormControl
                    }}
                    inputProps={{
                      placeholder: "Your Email..."
                    }}
                  />
                  <Button color="primary" justIcon>
                    <Mail />
                  </Button>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
    </div>
  );
}
