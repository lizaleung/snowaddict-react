
import React from 'react';

import ListCategory from './ListCategory';

import agent from '../../agent';
import { connect } from 'react-redux';
import {
  GEARS_PAGE_LOADED,
  GEARS_PAGE_UNLOADED,
} from '../../constants/actionTypes';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import image from "assets/img/bg7.jpg";


import { withStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";


const Promise = global.Promise;

const mapStateToProps = state => ({
  peoples: state.gears.peoples,
  categories: state.gears.categories
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: GEARS_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: GEARS_PAGE_UNLOADED })
});

class BrowseGearCategories extends React.Component {
  componentDidMount() {
    this.props.onLoad(Promise.all([
      agent.People.all(),
      agent.Categories.all(),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;

    const peoples = this.props.peoples;
    const categories = this.props.categories;

    
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
    
            <ListCategory categories={categories} />
  
            </GridItem>
          </GridContainer>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gearSectionStyle)(BrowseGearCategories));


