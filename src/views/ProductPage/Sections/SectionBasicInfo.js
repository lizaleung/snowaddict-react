import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "components/Accordion/Accordion.js";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";
import Favorite from "@material-ui/icons/Favorite";

import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Add from "@material-ui/icons/Add";


import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionBasicInfo(props) {
  const classes = useStyles();

  console.log(props)
  console.log(props.ownsThisGear)
  const images = [
    {
      original: props.gear.image,
      thumbnail: props.gear.image
    }
  ];

  return (
    <div>
      <GridContainer>
        <GridItem md={6} sm={6}>
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={0}
            items={images}
            showThumbnails={true}

          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h2 className={classes.title}>{ props.gear.title }</h2>
          <h3 className={classes.mainPrice}>{ props.gear.brand_name } { props.gear.year}</h3>
          <h3>{props.ownsThisGear}</h3>

          <div>
            <Tooltip
              id="tooltip-top"
              title="Save to wishlist"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              { props.gear.isFollowedByCurrentUser ? 

                <Button
                  justIcon
                  simple
                  color="rose"
                  onClick={()=>props.onUnfollow(props.gear.slug)}
                  
                >
                  <Favorite />
                </Button>
                :
                <Button
                  justIcon
                  simple
                  color="rose"
                  onClick={()=>props.onFollow(props.gear.slug)}
                >
                  <FavoriteBorder />
                </Button> 

              }

            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Save to rack (I have this)"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button justIcon simple color="success">
                <Add />
              </Button>
            </Tooltip>

          </div>


          <Accordion
            active={0}
            activeColor="rose"
            collapses={[
              {
                title: "Description",
                content: (
                  <p>
                    { props.gear.description }
                  </p>
                )
              },
              {
                title: "Size",
                content: (
                  <ul>
                    { props.gear.gear_sizes.map(eachItem => { 
                      return ( <Badge color="primary"> { eachItem.size_value }  </Badge> ) 
                    })}
                  </ul>
                )
              },
              {
                title: "Specification",
                content: (
                  <ul>
                    { props.gear.gear_specs.map(eachItem => { 
                      return ( <li> { eachItem.attribute }  -  {eachItem.detail} </li> ) 
                    })}
                  </ul>
                )
              },
              {
                title: "Features",
                content: (
                  <ul>
                    { props.gear.gear_features.map(eachItem => { 
                      return ( <li> { eachItem.attribute }  -  {eachItem.detail} </li> ) 
                    })}
                  </ul>
                )
              }
            ]}
          />

        </GridItem>
      </GridContainer>

    </div>
  );
}
