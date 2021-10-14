import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";

import Paginations from "components/Pagination/Pagination.js";

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

const useStyles = makeStyles(gearSectionStyle);

import {
  GEARS_LIST_SET_PAGE
} from 'constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: GEARS_LIST_SET_PAGE, page, payload })
});

const ListPagination = props => {
  const classes = useStyles();

  if (props.gearsCount <= props.pageLimit) {
    return null;
  }

  const range = [];
  for (let i = 0; i < Math.ceil(props.gearsCount / props.pageLimit); ++i) {
    range.push(i);
  }
  console.log(range)

  // const setPage = page => {
  //   if(props.pager) {
  //     console.log("props.pager yes")
  //     props.onSetPage(page, props.pager(page));
  //   }else {
  //     console.log("props.pager no")
  //     props.onSetPage(page, agent.Gears.byCategory(props.category, page, props.pageLimit))
  //   }
  // };

  const setPage = page => props.onSetPage(page, agent.Gears.byCategory(props.category, page, props.pageLimit));

  const onClick = v => {
    setPage(v);
    console.log("setting to page " + v)
  };

  const getRangeSnippet = () => {
            range.map(v => {
              const isCurrent = v === props.currentPage;
              const boolActive = isCurrent ? true : false
              const onClick = ev => {
                ev.preventDefault();
                setPage(v);
                console.log("setting to page " + v)
              };

              return (
                {'text':v+1 , active: boolActive, onClick: onClick }
              )
            })

  }
  console.log(getRangeSnippet)

  return (
    <div>

        <Paginations
          className={
            classes.textCenter + " " + classes.justifyContentCenter
          }
          pages= {
            range.map(v => {
              const isCurrent = v === props.currentPage;
              const boolActive = isCurrent ? true : false
              const onClick = ev => {
                ev.preventDefault();
                setPage(v);
                console.log("setting to page " + v)
              };

              return (
                {'text':v+1 , active: boolActive, onClick: onClick }
              )
            })
          }
          color="primary"
        />





    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ListPagination);
