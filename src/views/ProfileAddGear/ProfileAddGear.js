import React from 'react';
// import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_ADD_GEAR_SECTION_LOADED,
  PEOPLE_ADD_GEAR_SECTION_UNLOADED
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

import ProfileTopSection from "./Sections/ProfileTopSection.js"
import ProfileSectionAddGear from "./Sections/ProfileSectionAddGear.js"



import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";


import bg from "assets/img/bg7.jpg";

const mapStateToProps = state => ({
  currentUser: state.common.currentUser,
  brands: state.people.brands
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_ADD_GEAR_SECTION_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_ADD_GEAR_SECTION_LOADED })
});

class ProfilePage extends React.Component {

  // componentDidUpdate (prevProps, prevState) {
  //   if (prevProps.match.params.displaynameslug !== this.props.match.params.displaynameslug) {
  //     if (this.props.match.params.displaynameslug) {
  //       prevProps.onUnload();
  //       return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
  //     }
  //     prevProps.onLoad(null);
  //   }
  // }

  componentDidMount() {
    this.props.onLoad(
      agent.Brands.all()
    );
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }



  render() {
    const  { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    // console.log(this.props.brands)

    return(
        <div>
          <Parallax
            image={bg}
            filter="dark"
            className={classes.parallax}
          />
            <div className={classNames(classes.main)}>

              <ProfileTopSection displaynameslug={this.props.match.params.displaynameslug} />

              <ProfileSectionAddGear displaynameslug={this.props.match.params.displaynameslug} brands={this.props.brands}/>

            </div>

        </div>
    )


    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfilePage));
