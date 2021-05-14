import { Link } from 'react-router-dom';
import ListErrors from 'views/ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from 'constants/actionTypes';


// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";

// import InputAdornment from "@material-ui/core/InputAdornment";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import Favorite from "@material-ui/icons/Favorite";
// import Face from "@material-ui/icons/Face";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "assets/img/bg7.jpg";



const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const  { classes } = this.props;

    const email = this.props.email;
    const password = this.props.password;

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
            <GridItem xs={8} sm={6}>
              <Card>
                <form className={classes.form} onSubmit={this.submitForm(email, password)}>
                  <CardHeader
                    color="warning"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>

                  </CardHeader>

                  <CardBody signup>

                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={this.changeEmail} />
                    </fieldset>

                    <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.changePassword} />
                    </fieldset>

                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button color="warning" size="lg"
                      type="submit"
                      disabled={this.props.inProgress}
                    >

                      Get started
                    </Button>

                  </div>
                  <ListErrors errors={this.props.errors} />
                </form>

                <p className="text-xs-center">
                  <Link to="/register">
                    Need an account?
                  </Link>
                </p>


              </Card>
            </GridItem>
          </GridContainer>


        </div>
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(Login));
