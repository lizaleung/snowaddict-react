
import React from 'react';

import ListPeople from './ListPeople';
import Filter from "./Filter";

import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED,
  PEOPLE_PAGE_APPLY_FILTER
} from '../../constants/actionTypes';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import image from "assets/img/bg7.jpg";


import { withStyles } from "@material-ui/core/styles";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";


const Promise = global.Promise;

const mapStateToProps = state => ({
  peoples: state.people.peoples
});

const mapDispatchToProps = dispatch => ({
  onApplyFilter: (lastnamefilter, payload) =>
    dispatch({ type: PEOPLE_PAGE_APPLY_FILTER, lastnamefilter, payload }),
  onLoad: (payload) =>
    dispatch({ type: PEOPLE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({  type: PEOPLE_PAGE_UNLOADED })
});

class BrowsePeople extends React.Component {
  componentDidMount() {
    this.props.onLoad(agent.People.trending())
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;
    const people = this.props.peoples;
    // generate A-Z array
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const choiceList = alpha.map((x) => String.fromCharCode(x));
    return (

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <ListPeople people={people} choiceList={choiceList} onApplyFilter={this.props.onApplyFilter} />
            </GridItem>
          </GridContainer>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gearSectionStyle)(BrowsePeople));


