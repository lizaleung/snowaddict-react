import React from 'react';
// import agent from '../agent';
import { connect } from 'react-redux';
import {
  LOGOUT
} from '../constants/actionTypes';


const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: LOGOUT, payload })
});
 
class Logout extends React.Component{

  componentDidMount() {
    this.props.onLoad(null);
  }

    render(){
        return(
            <div>
                Logged out. See you!
            </div>
        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Logout);
