// import { Link } from 'react-router-dom';
import ListErrors from 'views/ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from 'constants/actionTypes';

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// import InputAdornment from "@material-ui/core/InputAdornment";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
// import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
// import Face from "@material-ui/icons/Face";
// import Email from "@material-ui/icons/Email";
// import Check from "@material-ui/icons/Check";
// import Favorite from "@material-ui/icons/Favorite";

// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/bg7.jpg";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }




  render() {





    const  { classes } = this.props;


    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Gear Trends"
                        description="Follow the latest and trendiest gears to prepare for your next ride."
                        icon={Timeline}
                        iconColor="rose"
                      />

                      <InfoArea
                        className={classes.infoArea}
                        title="Community"
                        description="We are a bunch of snow addicts. Join us!"
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>

                      <form className={classes.form} onSubmit={this.submitForm(username, email, password)}>

                        <fieldset className="form-group">
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Username"
                            value={this.props.username}
                            onChange={this.changeUsername} />
                        </fieldset>

                        <fieldset className="form-group">
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            placeholder="Email"
                            value={this.props.email}
                            onChange={this.changeEmail} />
                        </fieldset>

                        <fieldset className="form-group">
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.changePassword} />
                        </fieldset>

                        <div className={classes.textCenter}>
                          <Button size="lg" color="warning" type="submit"
                            disabled={this.props.inProgress}>
                            SUBMIT
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                    <ListErrors errors={this.props.errors} />

                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>
  );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(signupPageStyle)(RegisterPage));

