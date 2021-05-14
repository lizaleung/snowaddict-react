import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
// import CardFooter from "../../components/Card/CardFooter.js";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";




// @material-ui/icons
// import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
// import Success from "components/Typography/Success.js";
// import Danger from "components/Typography/Danger.js";

import bg5 from "assets/img/bg5.jpg";
// import blog5 from "assets/img/examples/blog5.jpg";
// import blog6 from "assets/img/examples/blog6.jpg";



// import blogbg from "../../assets/img/bg.jpg";


const useStyles = makeStyles(sectionInterestedStyle);

export default function BlogSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgFluid
  );
  console.log(imageClasses);
  console.log(classes);

  const blogs = [
     {
       "title": 'Newbie Guide to First Snowboard Set',
       "tag": 'Beginner',
       "content":'Lets talk about your first snowboard setup',
     },
     {
       "title": 'Pro Guide to Freeride Snowboard Set',
       "tag": 'Pro',
       "content":'Lets talk about your freeride snowboard setup',
     },
    ]


  return (
    <div className={classes.section}>
      <h2 className={classes.title + " " + classes.textCenter}>
        Top Blog Articles and Gear Guides
      </h2>

      <GridContainer>
        {
          blogs.map(blog => {
            return (

              <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
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
                    <Info>
                      <h6>{blog.tag}</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">
                        {blog.title}
                      </a>
                    </h4>
                    <p className={classes.description}>
                      {blog.content}
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            );
          })
        }

      </GridContainer>

    </div>
  );
}
