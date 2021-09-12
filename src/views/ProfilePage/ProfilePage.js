import React from 'react';
// import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED
} from '../../constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Add from "@material-ui/icons/Add";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";

import PromptNewProfile from "./Sections/PromptNewProfile.js";
import ProfileBottomTabs from "./Sections/ProfileBottomTabs.js"
import ProfileTopSection from "./Sections/ProfileTopSection.js"



import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";




const mapStateToProps = state => ({
  people: state.people.peoples,
  peopleCount: state.people.peoplesCount,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_PAGE_UNLOADED })
});

class ProfilePage extends React.Component {

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.displaynameslug !== this.props.match.params.displaynameslug) {
      if (this.props.match.params.displaynameslug) {
        prevProps.onUnload();
        return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
      }
      prevProps.onLoad(null);
    }
  }
  componentDidMount() {
    if (this.props.match.params.displaynameslug) {
      return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
    } else if (this.props.currentUser.username) {
      return this.props.onLoad(agent.People.get(this.props.currentUser.username));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {
    const  { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );




    return(
        <div>
          <Parallax
            image={require("assets/img/bg7.jpg")}
            filter="dark"
            className={classes.parallax}
          />
          <ProfileTopSection displaynameslug={this.props.displaynameslug} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
            </div>
          </div>
        </div>
    )


    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfilePage));
