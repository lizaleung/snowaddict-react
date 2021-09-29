import React from 'react';
import ReactLoading from "react-loading";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

class LoadingAnimation extends React.Component {
  render() {
    if (true) {
      return (
      <div>
          <GridContainer justifyContent="center">
          <ReactLoading type="bubbles" color="#FFF" />
          </GridContainer>

      </div>
      );
    } else {
      return null;
    }
  }
}

export default LoadingAnimation;
