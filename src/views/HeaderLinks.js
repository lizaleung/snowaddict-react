/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Person from "@material-ui/icons/Person";

import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();



  return (
    <List className={classes.list + " " + classes.mlAuto}>
  
      <ListItem className={classes.listItem}>
        <Link to="/browse/categories" className="nav-link">
          <Button
          color="transparent"
          className={classes.navLink}>
            Browse Categories
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/browse/brands" className="nav-link">
          <Button
          color="transparent"
          className={classes.navLink}>
            Browse Brands
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/browse/people" className="nav-link">
          <Button
          color="transparent"
          className={classes.navLink}>
            Browse People
          </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/blog" className="nav-link">
          <Button
          color="transparent"
          className={classes.navLink}>
            Blog
          </Button>
        </Link>
      </ListItem>

      { !props.currentUser && 
        (  
          <div>
          <ListItem className={classes.listItem}>
            <Link to="/login" className="nav-link">
              <Button
              color="transparent"
              className={classes.navLink}>
                Sign in
              </Button>
            </Link>
          </ListItem>
      
      
          <ListItem className={classes.listItem}>
            <Link to="/register" className="nav-link">
              <Button
              color="transparent"
              className={classes.navLink}>
                Sign up
              </Button>
            </Link>
          </ListItem>
          </div>
        )
      }

      { props.currentUser && 
        (
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="warning"
              buttonText={props.currentUser.username}
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Person}
              dropdownList={[
                <Link to="/profile" className={classes.dropdownLink}>
                  <LineStyle className={classes.dropdownIcons} /> Profile
                </Link>,
  
                <Link to="/settings" className={classes.dropdownLink}>
                  <Layers className={classes.dropdownIcons} />
                  Settings
                </Link>,
                <Link to="/logout" className={classes.dropdownLink}>
                  <Layers className={classes.dropdownIcons} />
                  Logout
                </Link>
  
              ]}
            />
          </ListItem>
  
        )
      }

        
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>,
            <a
              href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial?ref=mkpr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>
          ]}
        />
      </ListItem>


      
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Examples"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/blog-post" className={classes.dropdownLink}>
              <ArtTrack className={classes.dropdownIcons} /> Blog Post
            </Link>,
            <Link to="/blog-posts" className={classes.dropdownLink}>
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>,
            <Link to="/contact-us" className={classes.dropdownLink}>
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link to="/pricing" className={classes.dropdownLink}>
              <AttachMoney className={classes.dropdownIcons} /> Pricing Page
            </Link>,
            <Link to="/shopping-cart-page" className={classes.dropdownLink}>
              <ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
            </Link>,
            <Link to="/ecommerce-page" className={classes.dropdownLink}>
              <Store className={classes.dropdownIcons} /> Ecommerce Page
            </Link>,
            <Link to="/product-page" className={classes.dropdownLink}>
              <ShoppingCart className={classes.dropdownIcons} /> Product Page
            </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              <AccountCircle className={classes.dropdownIcons} /> Profile Page
            </Link>
          ]}
        />
      </ListItem>

  
  
    </List>
  );

  
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
