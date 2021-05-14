import React from 'react';
import { Link } from 'react-router-dom';

// import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";


const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Discuss extends React.Component {
  componentDidMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;

    return (

        <div className={classes.container}>

          <GridContainer justify="center">
            <GridItem md={9}>
              <MainView />
            </GridItem> 
            <GridItem md={3} >

              <Link to="/editor" className="nav-link">
                <i className="ion-compose"></i>&nbsp;New Post
              </Link>

              <div className="sidebar">

                <p>Popular Tags</p>

                <Tags
                  tags={this.props.tags}
                  onClickTag={this.props.onClickTag} />

              </div>

            </GridItem>

          </GridContainer>  
            


        </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Discuss));
