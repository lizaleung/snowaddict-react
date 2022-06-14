import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../agent';

import { connect } from 'react-redux';
import {
  PEOPLE_ADD_GEAR_GET_GEAR_LIST,
  PEOPLE_ADD_GEAR_ADD_GEAR
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

// import Select from "@material-ui/core/Select";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import CustomInput from "components/CustomInput/CustomInput.js";

import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import LoadingAnimation from "views/LoadingAnimation.js";

import Select from 'react-select'




const mapStateToProps = state => ({
    gears: state.people.gears,
    thisPerson: state.people.person,
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: PEOPLE_ADD_GEAR_GET_GEAR_LIST, payload }),
  addGear: (person_slug, gear_slug) => dispatch({
    type: PEOPLE_ADD_GEAR_ADD_GEAR,
    payload: agent.People.addGear(person_slug, gear_slug)
  }),

});

class ProfileSectionGear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "",
      brands: [],
      submitted: false
    };
  }

  componentDidMount() {

    
  }



  componentWillUnmount() {
  }


  // handleBrand = event => {
  //   this.setState({ brand: event.target.value })
  // };



  // updateSnowboardSelect = event => {
  //   this.setState({ snowboard: event.target.value })
  // };


  // handleSearchValue = event => {

  //   console.log(event);
  //   this.props.onLoad(
  //     agent.Gears.byBrand(event)
  //   );
  //   console.log("in handleSearchValue")
  //   console.log(this.props.gears);
  //   if(this.props.gears) {
  //     this.setState({ snowboards: this.formatSelectFromSb(this.props.gears)  })
      
  //   }

  // };


  handleGearSelect = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleSubmit = () => {
      console.log(`Submitting `, this.state.selectedOption)
      console.log(this.props)
      this.props.addGear(this.props.thisPerson.slug, this.state.selectedOption.slug)
      this.setState({ selectedOption: null  })
      // this.setState({ selectedOption: ""  })
  };

  formatSelectFromSb = inputVal => {
    if (!inputVal) { return []}
    let selectOps = []
    for (let i = 0; i < inputVal.length; i++){
      selectOps[i] = { slug: inputVal[i].slug, label: inputVal[i].title };
    }
    return selectOps
  };

  formatSelectFromBrands = inputVal => {
    if (!inputVal) { return []}
    let selectOps = []
    for (let i = 0; i < inputVal.length; i++){
      selectOps[i] = { value: inputVal[i], label: inputVal[i] };
    }
    return selectOps;
  };

  render() {
    // console.log(this.props.brands)

    const  { classes } = this.props;

    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    let brands = ["Burton","K2","Gnu"]
    let selectOps = []
    let selectSbOps = []

    selectOps = this.formatSelectFromBrands(brands);

    if (brands) {

      return (

        <div className={classes.gearShowcase}>
          <div className={classes.container}>
            <h3>Add Snowboard</h3>


            {/*{brands.map(brand => <h2>{brand}</h2>)}*/}
            {/*{this.props.gears ? this.props.gears.map(thisval => <h2>{thisval.title}</h2>) : "" }*/}


            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4>
                    Brand:
                  </h4>

                  <Select 
                   options={selectOps} 
                   onChange={option => this.props.onLoad(agent.Gears.byBrand(option.value))}/>
                </GridItem>


                <GridItem xs={12} sm={12} md={12}>
                  <h4>
                    Snowboard:
                  </h4>

                  { this.props.gears ?
                    <Select 
                    options={this.formatSelectFromSb(this.props.gears)} 
                    onChange={this.handleGearSelect}
                    />
                  : 
                    <Select isDisabled/>
                  }
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>

                {this.state.selectedOption ? 
                  <Button 
                    onClick={this.handleSubmit}
                  >
                    submit
                  </Button>

                  :

                  <Button disabled={!this.state.selectedOption}>
                    submit
                  </Button>

                }

                </GridItem>


            </GridContainer>
          </div>
        </div>




  
      );
    } else {
      return (
        <div className={classes.gearShowcase}>
          <div className={classes.container}>
            <h3>Error</h3>
          </div>
        </div>
      );
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(profilePageStyle)(ProfileSectionGear));



