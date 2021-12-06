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


import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionBasicInfo(props) {
  const classes = useStyles();

  // const images = [
  //   {
  //     original: product3,
  //     thumbnail: product3
  //   },
  //   {
  //     original: product4,
  //     thumbnail: product4
  //   },
  //   {
  //     original: product1,
  //     thumbnail: product1
  //   },
  //   {
  //     original: product2,
  //     thumbnail: product2
  //   }
  // ];
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
                title: "Terrain",
                content: (
                  <p>
                    TBD
                  </p>
                )
              },
              {
                title: "Specs",
                content: (
                  <ul>
                    <li>TBD</li>
                    <li>TBD</li>
                    <li>TBD</li>
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
