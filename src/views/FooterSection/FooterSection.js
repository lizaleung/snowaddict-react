/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import agent from '../../agent';
import {
  SUBSCRIBE_NEW,
  SUBSCRIBE_UNLOADED,
  UPDATE_SUBSCRIBE_NEW_EMAIL
} from 'constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import notificationsStyles from "assets/jss/material-kit-pro-react/views/componentsSections/notificationsStyles.js";

import ListErrors from 'views/ListErrors';


// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";



import { withStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";


const mapStateToProps = state => ({ ...state.common });


const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_SUBSCRIBE_NEW_EMAIL, key: 'email', value }),
  onSubmit: (email) => {
    const payload = agent.Subscribe.add(email);
    dispatch({ type: SUBSCRIBE_NEW, payload })
  },
  onUnload: () =>
    dispatch({ type: SUBSCRIBE_UNLOADED })
});



class FooterSection extends React.Component {
  constructor() {

    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.submitForm = (email) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email);
      this.props.onChangeEmail("");
    };

  }




  componentWillUnmount() {
    this.props.onUnload();
  }




  render() {
    const  { classes } = this.props;


    return (

    <div className={classes.section}>

        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple href="#pablo" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="https://www.instagram.com/powderatlas/" color="facebook">
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
                  Arctic Spark
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
              <GridItem xs={12} sm={1} md={1}>

              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Get the latest snow gear news and trends
                </p>
                <form onSubmit={this.submitForm(this.props.email)}>
                        <fieldset className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Enter email..."
                            value={this.props.email}
                            onChange={this.changeEmail} />
                        </fieldset>

                  <Button color="primary" justIcon type="submit" 
                       disabled={this.props.inProgress}
                  >
                    <Mail />
                  </Button>
                </form>
                { this.props.success && 
      <SnackbarContent
        message={
            "Success"
        }
        close
        color="success"
        icon={Check}
      />

                 }
                <ListErrors errors={this.props.errors} />


              </GridItem>
            </GridContainer>
          </div>
        </Footer>


    </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FooterSection));