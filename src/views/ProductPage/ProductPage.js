import React from 'react';

import agent from 'agent';
import { connect } from 'react-redux';

import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED,
  GEAR_FOLLOW,
  GEAR_UNFOLLOW
} from 'constants/actionTypes';

import SectionBasicInfo from "./Sections/SectionBasicInfo.js";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import Parallax from "components/Parallax/Parallax.js";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

import { withStyles } from "@material-ui/core/styles";

import bg from "assets/img/bg7.jpg";

// const Promise = global.Promise;

const mapStateToProps = state => ({
  gear: state.gear.gear,
  currentUser: state.common.currentUser  

});

const mapDispatchToProps = dispatch => ({
  // onClickTag: (tag, pager, payload) =>
  //   dispatch({ type: APPLY_CATEGORY_FILTER, tag, pager, payload }),
  onLoad: (payload) =>
    dispatch({ type: GEAR_ITEM_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: GEAR_ITEM_PAGE_UNLOADED }),
  followGear: slug => dispatch({
    type: GEAR_FOLLOW,
    payload: agent.People.follow_gear(slug)
  }),
  unfollowGear: slug => dispatch({
    type: GEAR_UNFOLLOW,
    payload: agent.People.unfollow_gear(slug)
  })
});

class ProductPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Gears.get(this.props.match.params.slug));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.Gears.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  handleClickFollowGear = e => {

    if (this.props.currentUser) {
      this.props.followGear(e);
    }
  }

  handleClickUnfollowGear = e => {
    if (this.props.currentUser) {    
      this.props.unfollowGear(e);
    }
  }


  // ownsThisGear = (gear) => {
  //   console.log(gear)
  //   console.log(gear.followed_by)
  //   console.log(this.props.currentUser)
  //   gear.followed_by.map((profile) => {
  //     console.log(profile.slug);
  //     if ( profile.slug == this.props.currentUser ) {
  //       console.log("found true");
  //       return true
  //     }
  //   });
  //   return false
  // }


  render() {

    const  { classes } = this.props;
    const gear = this.props.gear;


    if (gear) {
      return (
        <div className={classes.productPage}>
          <Parallax
            image={bg}
            filter="rose"
            className={classes.pageHeader}
          >
          </Parallax>
          <div className={classNames(classes.section, classes.sectionGray)}>
            <div className={classes.container}>
              <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionBasicInfo gear={gear} onFollow={this.handleClickFollowGear} onUnfollow={this.handleClickUnfollowGear} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(productStyle)(ProductPage));

