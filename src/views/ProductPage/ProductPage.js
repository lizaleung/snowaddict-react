import React from 'react';

import agent from 'agent';
import { connect } from 'react-redux';

import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED,
} from 'constants/actionTypes';

import SectionBasicInfo from "./Sections/SectionBasicInfo.js";

// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import Parallax from "components/Parallax/Parallax.js";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

import { withStyles } from "@material-ui/core/styles";

// const Promise = global.Promise;

const mapStateToProps = state => ({
  gear: state.gear.gear
});

const mapDispatchToProps = dispatch => ({
  // onClickTag: (tag, pager, payload) =>
  //   dispatch({ type: APPLY_CATEGORY_FILTER, tag, pager, payload }),
  onLoad: (payload) =>
    dispatch({ type: GEAR_ITEM_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: GEAR_ITEM_PAGE_UNLOADED })
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
  
  render() {

    const  { classes } = this.props;
    const gear = this.props.gear;


      if (gear) {
        return (
          <div className={classes.productPage}>
            <Parallax
              image={require("assets/img/bg7.jpg")}
              filter="rose"
              className={classes.pageHeader}
            >
            </Parallax>
            <div className={classNames(classes.section, classes.sectionGray)}>
              <div className={classes.container}>
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <SectionBasicInfo  gear={gear}  />
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

