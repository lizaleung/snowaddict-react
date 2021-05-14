
import React from 'react';

// import BrowsePerson from './BrowsePerson';
// import BrowseCategory from './BrowseCategory';
// import Categories from './Categories';

import agent from 'agent';
import { connect } from 'react-redux';

import BrowseGears from './BrowseGears';

import {
  GEARS_LIST_PAGE_LOADED,
  GEARS_LIST_PAGE_UNLOADED,
} from 'constants/actionTypes';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/bg7.jpg";


import { withStyles } from "@material-ui/core/styles";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

// const Promise = global.Promise;

const mapStateToProps = state => ({
  gears: state.gearsList.gears
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: GEARS_LIST_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: GEARS_LIST_PAGE_UNLOADED })
});

class GearsList extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.categoryslug !== nextProps.match.params.categoryslug) {
      if (nextProps.match.params.categoryslug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Gears.byCategory(this.props.match.params.categoryslug));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.categoryslug) {
      return this.props.onLoad(agent.Gears.byCategory(this.props.match.params.categoryslug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  
  render() {
    const  { classes } = this.props;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
    
              <BrowseGears gears={this.props.gears}  />
  
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gearSectionStyle)(GearsList));

