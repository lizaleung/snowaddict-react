import React from 'react';
// import { Link } from 'react-router-dom';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  PROFILE_DISPLAY_LOADED,
  PROFILE_DISPLAY_UNLOADED,
  PROFILE_DISPLAY_FOLLOWED,
  PROFILE_DISPLAY_UNFOLLOWED,
} from 'constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";
import Table from "components/Table/Table.js";


import LoadingAnimation from "views/LoadingAnimation.js";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";
import Favorite from "@material-ui/icons/Favorite";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const mapStateToProps = state => ({
  thisPerson: state.people.person,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROFILE_DISPLAY_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_DISPLAY_UNLOADED }),
  followProfileDisplay: slug => dispatch({
    type: PROFILE_DISPLAY_FOLLOWED,
    payload: agent.People.follow(slug)
  }),
  unfollowProfileDisplay: slug => dispatch({
    type: PROFILE_DISPLAY_UNFOLLOWED,
    payload: agent.People.unfollow(slug)
  })

});

class ProfileTopSection extends React.Component {

  componentDidMount() {
    if (this.props.displaynameslug) {
      return this.props.onLoad(agent.People.get(this.props.displaynameslug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  handleClickFollow = e => {
    if (this.props.currentUser) {
    this.props.followProfileDisplay(e);
    }
  }

  handleClickUnfollow = e => {
    if (this.props.currentUser) {    
    this.props.unfollowProfileDisplay(e);
    }
  }


  render() {
    const  { classes } = this.props;
    const displaynameslug = this.props.displaynameslug;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    if (!this.props.thisPerson ) {
      return(
        <LoadingAnimation/>
      )

    } else {

      const thisPerson = this.props.thisPerson;

      if ( thisPerson ) {
  
        return (

          <div className={classes.container}>
            <GridContainer justifyContent="flex-start">
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer justifyContent="flex-start">
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                  >
                    <div className={classes.profile}>
                      <div>
                        <img src={thisPerson.avatar} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                        <h3 className={classes.title}>{thisPerson.full_name}</h3>
                      </div>
                    </div>
                  </GridItem>
                  <GridItem
                    style={{paddingTop: "20px"}}
                    xs={12}
                    sm={4}
                    md={3}
                  >


                  </GridItem>
                </GridContainer>
                

              </GridItem>
            </GridContainer>
          </div>
      
        );
      }
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfileTopSection));
