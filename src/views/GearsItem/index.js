
import React from 'react';

import SectionCarousel from './SectionCarousel';
import BasicInfo from './BasicInfo';
import BottomSection from './BottomSection'

// import classNames from "classnames";


import agent from 'agent';
import { connect } from 'react-redux';


import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED,
} from 'constants/actionTypes';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import Container from '@material-ui/core/Container'


import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/views/gearItemPage.js";

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

class GearsItem extends React.Component {
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
          <div>

            <Container fixed>
                <div className={classes.container}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                      <SectionCarousel images={gear.image} />

                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <BasicInfo gear={gear} />
                    </GridItem>
                  </GridContainer>


                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>


          
                      <BottomSection gear={gear} /> 

                    </GridItem>
                  </GridContainer>
                </div>


            </Container>
          </div>

        );
      } else {
        return null;
      }




  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(GearsItem));

