import React from 'react';
import agent from 'agent';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";

import classNames from "classnames";

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

  // if (props.category) {
  //   const payload = page => agent.Gears.byBrand(props.brand, page.selected, props.pageLimit);
  // } else  {
  //   const payload = page => agent.Gears.byBrand(props.brand, page.selected, props.pageLimit);
  // }

  const setPage = page => props.onSetPage(page.selected, 
                                  (props.brand) ? agent.Gears.byBrand(props.brand, page.selected, props.pageLimit) : 
                                  agent.Gears.byCategory(props.category, page.selected, props.pageLimit) 
                                  );

  console.log("GearListPagination props.category " + props.category)
  console.log("GearListPagination props.brand " + props.brand)
  return (
    <div className={classNames(classes.section, classes.textCenter)}>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={setPage}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageClassName={classes.paginationItem}
        pageLinkClassName={classes.paginationLink}
        activeClassName={classes.paginationActive}
        activeLinkClassName={classes.paginationLinkActive}

      />


    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(GearListPagination);
