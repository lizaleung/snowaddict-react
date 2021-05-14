import React from 'react';
// import { Link } from 'react-router-dom';
// import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED
} from 'constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

// @material-ui/icons
import Star from "@material-ui/icons/Star";
import People from "@material-ui/icons/People";
import AcUnit from "@material-ui/icons/AcUnit";
// import Favorite from "@material-ui/icons/Favorite";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
// import Button from "components/CustomButtons/Button.js";

import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";



const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_PAGE_UNLOADED })
});

class ProfileBottomTabs extends React.Component {
  componentDidUpdate (prevProps, prevState) {

  }
  componentDidMount() {

  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {
    
    const  { classes } = this.props;
    // const imageClasses = classNames(
    //   classes.imgRaised,
    //   classes.imgRoundedCircle,
    //   classes.imgFluid
    // );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    

    return (
      <div>
                <div className={classes.profileTabs}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Gear",
                        tabIcon: Star,
                        tabContent: (
                          <GridContainer>
                            <GridItem
                              xs={12}
                              sm={12}
                              md={7}
                              className={classes.gridItem}
                            >
                              <h4 className={classes.title}>Latest Collections</h4>
                              <GridContainer className={classes.collections}>
                                <GridItem xs={12} sm={12} md={6}>
                                  <Card
                                    background
                                    style={{
                                      backgroundImage: "url(" + mariyaGeorgieva + ")"
                                    }}
                                  >
                                    <CardBody background className={classes.cardBody}>
                                      <Badge
                                        color="warning"
                                        className={classes.badge}
                                      >
                                        Spring 2016
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          Stilleto
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                  <Card
                                    background
                                    style={{
                                      backgroundImage: "url(" + clemOnojeghuo + ")"
                                    }}
                                  >
                                    <CardBody background className={classes.cardBody}>
                                      <Badge color="info" className={classes.badge}>
                                        Spring 2016
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          High Heels
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                  <Card
                                    background
                                    style={{
                                      backgroundImage: "url(" + oluEletu + ")"
                                    }}
                                  >
                                    <CardBody background className={classes.cardBody}>
                                      <Badge color="danger" className={classes.badge}>
                                        Summer 2016
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          Flats
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </Card>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                  <Card
                                    background
                                    style={{
                                      backgroundImage: "url(" + darrenColeshill + ")"
                                    }}
                                  >
                                    <CardBody background className={classes.cardBody}>
                                      <Badge
                                        color="success"
                                        className={classes.badge}
                                      >
                                        Winter 2016
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          Men{"'"}s Sneakers
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </Card>
                                </GridItem>
                              </GridContainer>
                            </GridItem>
                            <GridItem
                              xs={12}
                              sm={12}
                              md={2}
                              className={classes.gridItem}
                            >
                              <h4 className={classes.title}>Stats</h4>
                              <ul className={classes.listUnstyled}>
                                <li>
                                  <b>60</b> Products
                                </li>
                                <li>
                                  <b>4</b> Collections
                                </li>
                                <li>
                                  <b>331</b> Influencers
                                </li>
                                <li>
                                  <b>1.2K</b> Likes
                                </li>
                              </ul>
                              <hr />
                              <h4 className={classes.title}>About this work</h4>
                              <p className={classes.description}>
                                French luxury footwear and fashion. The footwear has
                                incorporated shiny, red-lacquered soles that have
                                become his signature.
                              </p>
                              <hr />
                              <h4 className={classes.title}>Focus</h4>
                              <Badge color="primary">Footwear</Badge>
                              <Badge color="rose">Luxury</Badge>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Resorts",
                        tabIcon: AcUnit,
                        tabContent: (
                          <div>
                            <GridContainer justify="center">
                              <GridItem
                                xs={12}
                                sm={12}
                                md={5}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#pablo">
                                          <img src={avatar} alt="..." />
                                        </a>
                                        <div
                                          className={classes.coloredShadow}
                                          style={{
                                            backgroundImage: "url(" + avatar + ")",
                                            opacity: "1"
                                          }}
                                        />
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4 className={classes.cardTitle}>
                                          Gigi Hadid
                                        </h4>
                                        <Muted>
                                          <h6>MODEL</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          Don{"'"}t be scared of the truth because we
                                          need to restart the human foundation in
                                          truth...
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={5}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#pablo">
                                          <img src={marc} alt="..." />
                                        </a>
                                        <div
                                          className={classes.coloredShadow}
                                          style={{
                                            backgroundImage: "url(" + marc + ")",
                                            opacity: "1"
                                          }}
                                        />
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4 className={classes.cardTitle}>
                                          Marc Jacobs
                                        </h4>
                                        <Muted>
                                          <h6>DESIGNER</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          Don{"'"}t be scared of the truth because we
                                          need to restart the human foundation in
                                          truth...
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                            </GridContainer>
                            <GridContainer justify="center">
                              <GridItem
                                xs={12}
                                sm={12}
                                md={5}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#pablo">
                                          <img src={kendall} alt="..." />
                                        </a>
                                        <div
                                          className={classes.coloredShadow}
                                          style={{
                                            backgroundImage: "url(" + kendall + ")",
                                            opacity: "1"
                                          }}
                                        />
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4 className={classes.cardTitle}>
                                          Kendall Jenner
                                        </h4>
                                        <Muted>
                                          <h6>MODEL</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          I love you like Kanye loves Kanye. Don
                                          {"'"}t be scared of the truth.
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={12}
                                md={5}
                                className={classes.gridItem}
                              >
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#pablo">
                                          <img src={cardProfile2Square} alt="..." />
                                        </a>
                                        <div
                                          className={classes.coloredShadow}
                                          style={{
                                            backgroundImage:
                                              "url(" + cardProfile2Square + ")",
                                            opacity: "1"
                                          }}
                                        />
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4 className={classes.cardTitle}>
                                          George West
                                        </h4>
                                        <Muted>
                                          <h6>MODEL/DJ</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          I love you like Kanye loves Kanye.
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              </GridItem>
                            </GridContainer>
                          </div>
                        )
                      },
                      {
                        tabButton: "People",
                        tabIcon: People,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={3}>
                              <img
                                alt="..."
                                src={mariyaGeorgieva}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={clemOnojegaw}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                              <img
                                alt="..."
                                src={clemOnojeghuo}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={oluEletu}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={cynthiaDelRio}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </div>



      </div>

    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfileBottomTabs));



