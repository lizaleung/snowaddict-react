import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";

import Container from '@material-ui/core/Container'
import { Carousel } from 'react-responsive-carousel';

// import image1 from "../../assets/img/bg.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";

// import styles from "../../assets/jss/material-kit-pro-react/views/homePageSections/browseCategoryStyle.js";

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

// nodejs library that concatenates classes
import classNames from "classnames";

const useStyles = makeStyles(gearSectionStyle);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );  
  console.log(props.images);
  const images = props.images;


  return (
    <div>

      <Container fixed>

      
            <Carousel
              selectedItem={false}
              showArrows={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
            >
                <div>
                    <img src={images} alt="1" classNames={imageClasses} />
                </div>
                <div>
                    <img src={image2} alt="2" classNames={imageClasses} />
                </div>
                <div>
                    <img src={image3} alt="3"  classNames={imageClasses} />
                </div>
            </Carousel>
      </Container>




    </div>
  );
}
