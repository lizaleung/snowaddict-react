
import React from 'react';
// import { Link } from 'react-router-dom';

import BottomSectionView from './BottomSectionView';

// import agent from '../../agent';
import { connect } from 'react-redux';
import {
  GEAR_ITEM_PAGE_LOADED,
  GEAR_ITEM_PAGE_UNLOADED
} from '../../constants/actionTypes';

// const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  // onClickTag: (tag, pager, payload) =>
  //   dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: GEAR_ITEM_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: GEAR_ITEM_PAGE_UNLOADED })
});

class BottomSection extends React.Component {
  componentDidMount() {

    // const tab = 'people';
    // const articlesPromise = agent.Profile.byGear ;

    // this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log(this.props.gear);
    return (
      <div >
        <BottomSectionView gear={this.props.gear} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);
