// import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_DETAIL_TAB } from '../../constants/actionTypes';
import GearItemPeopleSection from './GearItemPeopleSection'

const PeopleTab = props => {
  
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('people',  agent.Articles.all, agent.Articles.all());
  }

  return (
    <li className="nav-item">
      <a  href=""
          className={ props.tab === 'people' ? 'nav-link active' : 'nav-link' }
          onClick={clickHandler}>
        People
      </a>
    </li>
  );

};

const ReviewsTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('reviews', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'reviews' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Reviews
      </a>
    </li>
  );
};

const VideoTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('video', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'video' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Video
      </a>
    </li>
  );
};

const PriceTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('price', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li className="nav-item">
      <a
        href=""
        className={ props.tab === 'price' ? 'nav-link active' :  'nav-link' }
        onClick={clickHandler}>
        Price
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  tab:  state.gear.tab,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_DETAIL_TAB, tab, pager, payload })
});

const BottomSectionView = props => {
  console.log(props.gear);
  return (
    <div>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">

          <PeopleTab tab={props.tab} onTabClick={props.onTabClick}  />
          <ReviewsTab tab={props.tab} onTabClick={props.onTabClick} />
          <VideoTab tab={props.tab} onTabClick={props.onTabClick}   />
          <PriceTab tab={props.tab} onTabClick={props.onTabClick}   />

        </ul>
      </div>
      <div>
          { props.tab === 'people' ? <GearItemPeopleSection gear={props.gear}/> :  "" }
          { props.tab === 'reviews' ? <h5>Coming Soon!</h5> :  "" }
          { props.tab === 'video' ? <h5>Coming Soon!</h5> :  "" }
          { props.tab === 'price' ? <h5>Coming Soon!</h5> :  "" }


      </div>
      { /* <ArticleList
        pager={props.pager}
        articles={props.articles}
        loading={props.loading}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} /> 
      */ }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomSectionView);
