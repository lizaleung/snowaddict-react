import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";

import Paginations from "components/Pagination/Pagination.js";

import ReactPaginate from 'react-paginate';

import gearSectionStyle from "assets/jss/material-kit-pro-react/views/gearSections/gearSectionStyle.js";

const useStyles = makeStyles(gearSectionStyle);

import {
  GEARS_LIST_SET_PAGE
} from 'constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onSetPage: (page, payload) =>
    dispatch({ type: GEARS_LIST_SET_PAGE, page, payload })
});

const GearListPagination = props => {
  const classes = useStyles();

  if (props.gearsCount <= props.pageLimit) {
    return null;
  }

  const pageCount = Math.ceil(props.gearsCount / props.pageLimit);

  const range = [];
  range.push("<")
  for (let i = 0; i < Math.ceil(props.gearsCount / props.pageLimit); ++i) {
    range.push(i);
  }
  range.push(">")

  const setPage = page => props.onSetPage(page, agent.Gears.byCategory(props.category, page, props.pageLimit));

  const onClick = v => {
    setPage(v);
  };

  const maxRange = Math.ceil(props.gearsCount / props.pageLimit);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(props.currentPage)

  return (
    <div>

        <Paginations
          className={
            classes.textCenter + " " + classes.justifyContentCenter
          }
          pages= {
            range.map(v => {
              const isCurrent = v === props.currentPage;
              const boolShow = v < props.currentPage + 5 || v === props.currentPage - 5;
              const boolDisable = (v === "<" && props.currentPage === 0) ? true : (v === ">" && props.currentPage === maxRange - 1 ) ? true : false ;
              const textString = (v === "<" || v === ">") ? v : v+1;
              const pageToSetTo = (v === "<") ? props.currentPage - 1 : (v === ">") ? props.currentPage + 1 : v;
              const onClick = ev => {
                ev.preventDefault();
                setPage(pageToSetTo);
              };

              return (
                {'text':textString , active: isCurrent, onClick: onClick,  disabled: boolDisable }
              ) 
            })
          }

          color="primary"
        />


      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={setPage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />


    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(GearListPagination);
