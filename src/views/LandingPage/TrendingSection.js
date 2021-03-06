import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import classNames from "classnames";
import agent from '../../agent';

import { connect } from 'react-redux';
import {
  HOME_PAGE_TRENDING_LOADED,
  HOME_PAGE_TRENDING_UNLOADED
} from 'constants/actionTypes';

// material-ui core components
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from "@material-ui/core";
// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';


// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import InfoArea from "../../components/InfoArea/InfoArea.js";

import InfoArea from "../../components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";

import LoadingAnimation from "views/LoadingAnimation.js";

import landingPageSections from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

const mapStateToProps = state => ({
  people: state.home.people,
  gears: state.home.gears
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: HOME_PAGE_TRENDING_LOADED, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_TRENDING_UNLOADED })
});


class TrendingSection extends React.Component {
  componentDidMount() {
    this.props.onLoad(Promise.all([
      agent.People.trending(),
      agent.Gears.trending()
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;
    const people = this.props.people
    const gears = this.props.gears

    if (people) {
      return (
        <div className={classes.section}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Trending Now</h2>
              {/*<h2 className={classes.title}>Top Members From the Leaderboard</h2>*/}
            </GridItem>
          </GridContainer>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={classes.title}>People</h2>
                <List className={classes.list}>

                  {
                    people.map(person => {
                      return (
                        
                        <ListItem key={person.id.toString()}>
                          <Link to={"/people/" + person.display_name}>
                          
                            <ListItemAvatar>
                              <Avatar>
                                <ImageIcon /> {/*<img src={person.avatar} alt="..." />*/}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText disableTypography
                              primary={ <Typography type="body2" style={{ color: '#000' }}>
                                        {person.full_name}
                                        </Typography> }
                              secondary={ <Typography type="body2" style={{ color: '#999' }}>
                                        {person.bio}
                                        </Typography> }
                             />
                          </Link>
                        </ListItem>

                      );
                    })
                  }


                </List>



              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={classes.title}>Gear</h2>

                  {
                    gears.map(gear => {
                      return (
                        
                        <ListItem key={gear.id.toString()}>
                          <Link to={"/product/" + gear.slug}>
                          
                            <ListItemAvatar>
                              <Avatar>
                                <ImageIcon /> {/*<img src={person.avatar} alt="..." />*/}
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText disableTypography
                              primary={ <Typography type="body2" style={{ color: '#000' }}>
                                        {gear.brand_name} - {gear.title}
                                        </Typography> }

                             />
                          </Link>
                        </ListItem>


                      );
                    })
                  }

              </GridItem>

            </GridContainer>
          </div>
        </div>
      );
    } else {
      return( <LoadingAnimation/> )
    }

  }

}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(landingPageSections)(TrendingSection));
