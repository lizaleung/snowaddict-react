import {
  container,
  description,
  cardTitle,
  blackColor,
  whiteColor,
  grayColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";

const gearSectionStyle = theme => ({
  description,
  cardTitle: {
    ...cardTitle,
    color: whiteColor + "  !important"
  },
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  pageHeader: {
    color: whiteColor,
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    padding: "120px 0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before": {
      background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  form: {
    margin: "0"
  },
  sectionCard: {
    // minWidth: "30px",
    // height: "30px",
    minHeight: "75vh",
  },
  section: {
    // minWidth: "30px",
    // height: "30px",
    minHeight: "75vh",
  },

  cardHeader: {
    width: "auto",
    textAlign: "center"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: grayColor[13]
  },
  textCenter: {
    textAlign: "center"
  },
  iconButtons: {
    marginRight: "3px !important",
    marginLeft: "3px !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: whiteColor + "  !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  // start of pagination css

  pagination: {
    display: "flex",
    listStyle: "none",
    borderRadius: "0.25rem",
    justifyContent: "center",
    position:"relative",
    bottom:"0"

  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: grayColor[0]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      // backgroundColor: grayColor[2],
      // borderColor: grayColor[6]
    },
    "&:hover": {
      backgroundColor: grayColor[2],
      cursor: "pointer"
    },
    // primary: {
    //   "&,&:hover,&:focus": {
    //     backgroundColor: primaryColor[0],
    //     borderColor: primaryColor[0],
    //     color: whiteColor,
    //     boxShadow:
    //       "0 4px 5px 0 rgba(" +
    //       hexToRgb(primaryColor[0]) +
    //       ", 0.14), 0 1px 10px 0 rgba(" +
    //       hexToRgb(primaryColor[0]) +
    //       ", 0.12), 0 2px 4px -1px rgba(" +
    //       hexToRgb(primaryColor[0]) +
    //       ", 0.2)"
    //   },
    //   "&:hover,&:focus": {
    //     zIndex: "2",
    //     cursor: "default"
    //   }
    // },
    // info: {
    //   "&,&:hover,&:focus": {
    //     backgroundColor: infoColor[0],
    //     borderColor: infoColor[0],
    //     color: whiteColor,
    //     boxShadow:
    //       "0 4px 5px 0 rgba(" +
    //       hexToRgb(infoColor[0]) +
    //       ", 0.14), 0 1px 10px 0 rgba(" +
    //       hexToRgb(infoColor[0]) +
    //       ", 0.12), 0 2px 4px -1px rgba(" +
    //       hexToRgb(infoColor[0]) +
    //       ", 0.2)"
    //   },
    //   "&:hover,&:focus": {
    //     zIndex: "2",
    //     cursor: "default"
    //   }
    // },
    // success: {
    //   "&,&:hover,&:focus": {
    //     backgroundColor: successColor[0],
    //     borderColor: successColor[0],
    //     color: whiteColor,
    //     boxShadow:
    //       "0 4px 5px 0 rgba(" +
    //       hexToRgb(successColor[0]) +
    //       ", 0.14), 0 1px 10px 0 rgba(" +
    //       hexToRgb(successColor[0]) +
    //       ", 0.12), 0 2px 4px -1px rgba(" +
    //       hexToRgb(successColor[0]) +
    //       ", 0.2)"
    //   },
    //   "&:hover,&:focus": {
    //     zIndex: "2",
    //     cursor: "default"
    //   }
    // },
    // warning: {
    //   "&,&:hover,&:focus": {
    //     backgroundColor: warningColor[0],
    //     borderColor: warningColor[0],
    //     color: whiteColor,
    //     boxShadow:
    //       "0 4px 5px 0 rgba(" +
    //       hexToRgb(warningColor[0]) +
    //       ", 0.14), 0 1px 10px 0 rgba(" +
    //       hexToRgb(warningColor[0]) +
    //       ", 0.12), 0 2px 4px -1px rgba(" +
    //       hexToRgb(warningColor[0]) +
    //       ", 0.2)"
    //   },
    //   "&:hover,&:focus": {
    //     zIndex: "2",
    //     cursor: "default"
    //   }
    // },
    // danger: {
    //   "&,&:hover,&:focus": {
    //     backgroundColor: dangerColor[0],
    //     borderColor: dangerColor[0],
    //     color: whiteColor,
    //     boxShadow:
    //       "0 4px 5px 0 rgba(" +
    //       hexToRgb(dangerColor[0]) +
    //       ", 0.14), 0 1px 10px 0 rgba(" +
    //       hexToRgb(dangerColor[0]) +
    //       ", 0.12), 0 2px 4px -1px rgba(" +
    //       hexToRgb(dangerColor[0]) +
    //       ", 0.2)"
    //   },
    //   "&:hover,&:focus": {
    //     zIndex: "2",
    //     cursor: "default"
    //   }
    // },
    // disabled: {
    //   "&,&:hover,&:focus": {
    //     color: grayColor[10],
    //     cursor: "not-allowed",
    //     backgroundColor: whiteColor,
    //     borderColor: grayColor[6]
    //   }
    // },
    // end of pagination css





  },
  paginationActive: {
    color: whiteColor,
  },

  paginationLinkActive: {
    backgroundColor: primaryColor[0],
    borderColor: primaryColor[0],
    color: whiteColor,
  }


});

export default gearSectionStyle;
