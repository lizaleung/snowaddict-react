import React from 'react';
// import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED
} from '../../constants/actionTypes';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import Add from "@material-ui/icons/Add";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";

import PromptNewProfile from "./Sections/PromptNewProfile.js";
import ProfileBottomTabs from "./Sections/ProfileBottomTabs.js"




import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";




const mapStateToProps = state => ({
  people: state.people.peoples,
  peopleCount: state.people.peoplesCount,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_PAGE_UNLOADED })
});

class ProfilePage extends React.Component {

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match.params.displaynameslug !== this.props.match.params.displaynameslug) {
      if (this.props.match.params.displaynameslug) {
        prevProps.onUnload();
        return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
      }
      prevProps.onLoad(null);
    }
  }
  componentDidMount() {
    if (this.props.match.params.displaynameslug) {
      return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
    } else if (this.props.currentUser.username) {
      return this.props.onLoad(agent.People.get(this.props.currentUser.username));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {
    const  { classes } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    console.log("this.props.match.params.displaynameslug " + this.props.match.params.displaynameslug)
    
    if (this.props.currentUser) {
      console.log("this.props.currentUser.username " + this.props.currentUser.username)
    }
    if (!this.props.people ) {
      return null;
    } else {

      const peopleCount = this.props.peopleCount
      const people = this.props.people[0]
    
      console.log("peopleCount "+ peopleCount + " people " + people)
  


      if ( peopleCount > 0 ) {
        const roles = people.get_roles.join(' ') 
  
        return (
          <div>
            <Parallax
              image={require("assets/img/bg7.jpg")}
              filter="dark"
              className={classes.parallax}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img src={people.avatar} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                        <h3 className={classes.title}>{people.full_name}</h3>
                        <h6>@{people.display_name}</h6>
                        <h6>
                          {
                            people.get_roles.map(role => {
                              return (
                                <Badge color="warning">{role}</Badge>
                              );
                            })
                          }
                        </h6>

                        <Button
                          justIcon
                          simple
                          color="facebook"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fa fa-link"} />
                        </Button>

                        <Button
                          justIcon
                          simple
                          color="instagram"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fab fa-instagram"} />
                        </Button>
                        <Button
                          justIcon
                          simple
                          color="twitter"
                          className={classes.margin5}
                        >
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>

                      </div>
                    </div>
                    <div className={classes.follow}>
                      <Tooltip
                        id="tooltip-top"
                        title="Follow this user"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button
                          justIcon
                          round
                          color="primary"
                          className={classes.followButton}
                        >
                          <Add className={classes.followIcon} />
                        </Button>
                      </Tooltip>
                    </div>
                  </GridItem>
                </GridContainer>
                <div className={classNames(classes.description, classes.textCenter)}>
                  <p>{people.bio}{" "}</p>
                </div>
                <ProfileBottomTabs />
                <Clearfix />
              </div>
            </div>
      
          </div>
        );
      } else {
        console.log(this.props);
        if (this.props.match.params.displaynameslug) {
          console.log("Searching for " + this.props.match.params.displaynameslug)
          return (
          <div>
            <Parallax
              image={require("assets/img/bg7.jpg")}
              filter="dark"
              className={classes.parallax}
            />

            <div className={classes.container}>
              <h2>
                we can't find this user {this.props.match.params.displaynameslug} 
              </h2>
            </div>
          </div>
          );
        }
        if (this.props.currentUser && this.props.currentUser.username) {
          console.log("hello" + this.props.currentUser.username)
          return (
            <div> <PromptNewProfile /> </div>
          );
        } else {
          return (
            <div> <PromptNewProfile /> </div>
          );
        }
        return null;
      }
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfilePage));
