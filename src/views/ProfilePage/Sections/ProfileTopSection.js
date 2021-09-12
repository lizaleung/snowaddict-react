import React from 'react';
// import { Link } from 'react-router-dom';
import agent from '../../../agent';
import { connect } from 'react-redux';
import {
  PEOPLE_PAGE_LOADED,
  PEOPLE_PAGE_UNLOADED,
  PROFILE_DISPLAY_FOLLOWED,
  PROFILE_DISPLAY_UNFOLLOWED,
} from 'constants/actionTypes';

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

import PromptNewProfile from "./PromptNewProfile.js";
import ProfileBottomTabs from "./ProfileBottomTabs.js"




import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";




const mapStateToProps = state => ({
  people: state.people.peoples,
  peopleCount: state.people.peoplesCount,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PEOPLE_PAGE_UNLOADED }),
  followProfileDisplay: slug => dispatch({
    type: PROFILE_DISPLAY_FOLLOWED,
    payload: agent.People.follow(slug)
  }),
  unfollowProfileDisplay: slug => dispatch({
    type: PROFILE_DISPLAY_UNFOLLOWED,
    payload: agent.People.unfollow(slug)
  })

});

class ProfileTopSection extends React.Component {

  componentDidUpdate (prevProps, prevState) {
    // if (prevProps.match.params.displaynameslug !== this.props.match.params.displaynameslug) {
    //   if (this.props.match.params.displaynameslug) {
    //     prevProps.onUnload();
    //     return this.props.onLoad(agent.People.get(this.props.match.params.displaynameslug));
    //   }
    //   prevProps.onLoad(null);
    // }
  }
  componentDidMount() {
    if (this.props.displaynameslug) {
      return this.props.onLoad(agent.People.get(this.props.displaynameslug));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  render() {
    const  { classes } = this.props;
    const displaynameslug = this.props.displaynameslug;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    console.l
    console.log("displaynameslug " + displaynameslug)
    
    if (this.props.currentUser) {
      console.log("this.props.currentUser.username " + this.props.currentUser.username)
    }

    
    if (!this.props.people ) {
      return(
          <div>

          </div>
      )

    } else {

      const peopleCount = this.props.peopleCount
      const thisPerson = this.props.people[0]
    
      console.log("peopleCount "+ peopleCount + " thisPerson " + thisPerson)
  


      if ( peopleCount > 0 ) {
  
        return (


            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <div className={classes.profile}>
                      <div>
                        <img src={thisPerson.avatar} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                        <h3 className={classes.title}>{thisPerson.full_name}</h3>
                        <h6>@{thisPerson.display_name}</h6>
                        <h6>
                          {
                            thisPerson.badge.map(eachBadge => {
                              return (
                                <Badge color="warning">{eachBadge.name}</Badge>
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
                  <p>{thisPerson.bio}{" "}</p>
                </div>
                <ProfileBottomTabs />
                <Clearfix />
              </div>
            </div>
      
        );
      }
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfileTopSection));
