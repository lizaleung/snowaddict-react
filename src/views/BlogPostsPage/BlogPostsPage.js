/*eslint-disable*/
import React from "react";

import agent from '../../agent';
import { connect } from 'react-redux';
import {
  BLOG_LIST_LOADED,
  BLOG_LIST_UNLOADED
} from '../../constants/actionTypes';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./Sections/SectionPills.js";
import SectionInterested from "./Sections/SectionInterested.js";
import SectionImage from "./Sections/SectionImage.js";
import SubscribeLine from "./Sections/SubscribeLine.js";

import SectionBlogPostList from "./Sections/SectionBlogPostList.js";


import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";

import bg from "assets/img/bg7.jpg";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.blogList,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: BLOG_LIST_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: BLOG_LIST_UNLOADED })
});


class BlogPostsPage extends React.Component {

  componentDidMount() {
    // const tab = this.props.token ? 'feed' : 'all';
    const tab = 'all';
    // const tab = this.props.token ? 'all' : 'all';
    // const articlesPromise = this.props.token ?
    //   agent.Articles.feed :
    //   agent.Articles.all;

    const articlesPromise = agent.Articles.all;

    this.props.onLoad(tab, articlesPromise, 
      Promise.all(
        [agent.Tags.getAll(), 
        articlesPromise()]
      )
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;
    const props = this.props;

      return (
        <div>
          <Parallax image={bg} filter="dark" tiny>
            <div className={classes.container}>
                  <h2 className={classes.title}>
                    All About Snowboard
                  </h2>
            </div>
          </Parallax>
          <div className={classes.main}>
            <div className={classes.container}>
              {/*<SectionPills />*/}

              {/*<SectionInterested />*/}

              <SectionBlogPostList
                pager={props.pager}
                articles={props.articles}
                loading={props.loading}
                articlesCount={props.articlesCount}
                currentPage={props.currentPage} />

            </div>
            {/*<SectionImage />*/}
            <SubscribeLine />
          </div>

        </div>
      );
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BlogPostsPage));

