import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';

import {
  GEARS_LIST_PAGE_LOADED,
  GEARS_LIST_PAGE_UNLOADED,
} from 'constants/actionTypes';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/bg7.jpg";

import { withStyles } from "@material-ui/core/styles";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

import GearList from './GearList';

const PAGE_LIMIT = 8;

const mapStateToProps = state => ({
  gears: state.gearsList.gears,
  gearsCount: state.gearsList.gearsCount,
  currentPage: state.gearsList.currentPage


});


const mapDispatchToProps = dispatch => ({
  onSetPage: (p) => 
  dispatch({
    type: 'GEARS_LIST_SET_PAGE',
    page: p,
    payload: agent.Gears.byCategory(this.props.match.params.categoryslug, p, PAGE_LIMIT)
  }),
  onLoad: (payload) =>
    dispatch({ type: GEARS_LIST_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: GEARS_LIST_PAGE_UNLOADED })

  
});




class GearsList extends React.Component {

  componentWillMount() {
    if (this.props.match.params.categoryslug) {
      return this.props.onLoad(agent.Gears.byCategory(this.props.match.params.categoryslug, 0, PAGE_LIMIT));
    } else {
    this.props.onLoad(null);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();

  }
  
  render() {
    const onSetPage = page => props.onSetPage(page);


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
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
    
              <GearList 
              gears={this.props.gears} 
              gearsCount={this.props.gearsCount}
              currentPage={this.props.currentPage}
              onSetPage={onSetPage} 
              category={this.props.match.params.categoryslug}
              pageLimit={PAGE_LIMIT}
              />

  
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gearSectionStyle)(GearsList));

