
import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import {
  PROFILE_SETTINGS_SAVED,
  PROFILE_SETTINGS_PAGE_LOADED,
  PROFILE_SETTINGS_PAGE_UNLOADED
} from 'constants/actionTypes';

import ListErrors from 'views/ListErrors';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/bg7.jpg";


import { withStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";
import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";



class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      avatar: null,
      display_name: '',
      full_name: '',
      bio: ''
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.handleImageChange = (e) => {
      this.setState({
        avatar: e.target.files[0]
      })
    };


    this.submitForm = ev => {
      ev.preventDefault();
      // const profile = Object.assign({}, this.state);

      let form_data = new FormData();

      form_data.append('username', this.state.username);
      if (this.state.avatar) {
      form_data.append('avatar', this.state.avatar, this.state.avatar.name);
      }
      form_data.append('bio', this.state.bio);
      form_data.append('display_name', this.state.username);
      form_data.append('full_name', this.state.full_name);

      this.props.onSubmitForm(form_data);
    };
  }

  componentWillMount() {

    if (this.props.currentUser) {
      Object.assign(this.state, {
        avatar: this.props.currentUser.avatar || '',
        username: this.props.currentUser.username,
        full_name: this.props.currentUser.full_name,
        bio: this.props.currentUser.bio

      });
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        avatar: nextProps.currentUser.avatar || '',
        username: nextProps.currentUser.username,
        full_name: nextProps.currentUser.full_name,
        bio: nextProps.currentUser.bio
      }));
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <fieldset>


          <fieldset className="form-group">
            <input type="file"
                   id="avatar"
                   accept="image/png, image/jpeg"  
                   onChange={this.handleImageChange} />
          </fieldset>


          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.updateState('username')} />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Full name"
              value={this.state.full_name}
              onChange={this.updateState('full_name')} />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows="8"
              placeholder="Short bio about you"
              value={this.state.bio}
              onChange={this.updateState('bio')}>
            </textarea>
          </fieldset>

          <button
            className="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            disabled={this.state.inProgress}>
            Update Settings
          </button>

        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser,
  peoples: state.people.peoples,
  peoplesCount: state.people.peoplesCount  
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PROFILE_SETTINGS_PAGE_LOADED, payload }),    
  onSubmitForm: formdata =>
    dispatch({ type: PROFILE_SETTINGS_SAVED, payload: agent.People.create(formdata) }),
  onUnload: () => dispatch({ type: PROFILE_SETTINGS_PAGE_UNLOADED })
});

class ProfileSettingForm extends React.Component {


  componentDidMount() {
    this.props.onLoad(agent.People.get(this.props.currentUser.username));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }



  render() {
    console.log(this.props);
    console.log(this.state)
    if (this.props.people) {
    console.log(this.props);
    console.log(this.props.peoples)
    }

    const  { classes } = this.props;

    return (
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
            <GridItem xs={12} sm={12} md={12}>
    
              <h1 className="text-xs-center">Your Settings Here</h1>
              <h1> hi { this.props.people } </h1>
              <ListErrors errors={this.props.errors}></ListErrors>

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm} />

              <hr />
  
            </GridItem>
          </GridContainer>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(gearSectionStyle)(ProfileSettingForm));
