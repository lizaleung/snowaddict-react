import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../agent';
import { connect } from 'react-redux';
import { BLOG_POST_FAVORITED, BLOG_POST_UNFAVORITED } from '../../../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

// import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";

import Badge from "components/Badge/Badge.js";

import bg5 from "assets/img/bg5.jpg";


import styles from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);


const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: BLOG_POST_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: BLOG_POST_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const SectionBlogPreview = props => {
  const classes = useStyles();
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (


        <GridItem xs={12} sm={6} >
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src={bg5} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + bg5 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>

              <ul className="tag-list">
                {
                  article.tagList.map(tag => {
                    return (
                      <Badge color="primary" key={tag}>{tag}</Badge>
                    )
                  })
                }
              </ul>



              <h4 className={classes.cardTitle}>
                <a href="#">
                  {article.title}
                </a>
              </h4>
              <p className={classes.description}>
                {article.description}
                

              </p>
              <p> <a href="#"> Read More </a></p>
              {/*<p> {article.favoritesCount}</p>*/}
              {/*<p> by {article.author.username}</p>*/}
              {/*<p> {new Date(article.createdAt).toDateString()} </p>*/}
{/*
              <button className={favoriteButtonClass} onClick={handleClick}>
                <i className="ion-heart"></i> {article.favoritesCount}
              </button>
*/}
            </CardBody>
          </Card>
        </GridItem>



  );
}

export default connect(() => ({}), mapDispatchToProps)(SectionBlogPreview);
