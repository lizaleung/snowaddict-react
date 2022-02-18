import React from "react";
import agent from '../../agent';
import Button from "components/CustomButtons/Button.js";

const Filter = ({ choiceList, onApplyFilter }) => {
  
  const btnFilter = choiceList.map(eachChoice => {
    const handleClick = ev => {
      ev.preventDefault();
      onApplyFilter(eachChoice, agent.People.filterLastName(eachChoice));
    };

    return (
      <Button round
        color="primary"
        style={{
          textAlign: "center",
          width: "30px",
          padding: "10px"
        }}
        key={eachChoice}
        onClick={handleClick}
      >
        {eachChoice}
      </Button>
    );
  });
  return <div>{btnFilter}</div>;
};

export default Filter;
