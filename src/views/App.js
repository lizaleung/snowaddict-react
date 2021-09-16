import agent from '../agent';
import React from 'react';
// import { Link } from "react-router-dom";


import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Article from 'views/Article';
import Editor from 'views/Editor';
// import Login from 'views/Login';
import Discuss from 'views/Discuss';
// import Profile from '../views/Profile';
import ProfileFavorites from 'views/ProfileFavorites';
import Settings from 'views/Settings';
import Contact from 'views/Contact';
import FooterSection from "views/FooterSection/FooterSection.js";
// import FooterSection from "views/FooterSection.js";

import BrowseGearCategories from 'views/BrowseGearCategories';
import BrowsePeople from 'views/BrowsePeople';
import BrowseBrands from 'views/BrowseBrands';



import GearsItem from 'views/GearsItem';
import GearsList from 'views/GearsList';

import Header from "components/Header/Header.js";
import HeaderLinks from "views/HeaderLinks.js";

import RegisterPage from 'views/RegisterPage/RegisterPage.js';
import Logout from "views/Logout.js";

// pages for this product
import LandingPage2 from "views/LandingPage2/LandingPage2.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";


import { store } from '../store';
import { push } from 'react-router-redux';


import brandLogo from "assets/img/snowaddictnet/logo-snowaddict-word.png";

// pages for this product
// import Components from "../views/Components/Components.js";
import LandingPage from "../views/LandingPage";
// import ProfilePage from "../views/ProfilePage/ProfilePage.js";
// import LoginPage from "../views/LoginPage/LoginPage.js";

// const dashboardRoutes = [];

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {


    // const { ...rest } = this.props;
    if (this.props.appLoaded) {
      return (
        <main>

          <Header
            color="transparent"
            brandimg={brandLogo}
            links={<HeaderLinks 
                  appName={this.props.appName}
                  currentUser={this.props.currentUser} 
                  />}
            fixed
            changeColorOnScroll={{
              height: 10,
              color: "dark"
            }}
          />



            <Switch>
            <Route exact path="/" component={LandingPage}/>
            
            
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterPage} />

            <Route path="/about" component={AboutUsPage} />
            <Route path="/contact" component={Contact} />
            
            <Route exact path="/discuss" component={Discuss}/>
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />

            <Route path="/blog" component={BlogPostsPage} />

            <Route path="/@:username/favorites" component={ProfileFavorites} />


            <Route path="/people/:displaynameslug" component={ProfilePage} />
            <Route path="/profile" component={ProfilePage} />


            <Route path="/category/:categoryslug" component={GearsList} />
            <Route path="/item/:slug" component={GearsItem} />

            <Route path="/product/:slug" component={ProductPage} />

            <Route path="/browse/categories" component={BrowseGearCategories} />
            <Route path="/browse/people" component={BrowsePeople} />
            <Route path="/browse/brands" component={BrowseBrands} />



      <Route path="/landing-page-2" component={LandingPage2} />

      <Route path="/presentation" component={PresentationPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />


            
            <Route component={ErrorPage} />
            </Switch>
            <FooterSection />
        </main>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
