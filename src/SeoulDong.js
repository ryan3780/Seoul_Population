import React from "react";
import { Col, Button } from "reactstrap";
// import Statistics from "./Statistics";

const SeoulDong = ({
  dongsOfGu,
  onPopulationsChange,
  choosedDong,
  filterDongText,
  dongNames
}) => {
  const handlePopulations = e => {
    onPopulationsChange(e.target.value);
  };
  // console.log(dongNames);
  const searchedDongNames = [];
  dongNames.forEach((element, idx) => {
    searchedDongNames.push(
      <div key={idx}>
        <Button
          value={element}
          onClick={handlePopulations}
          style={{ width: "184px", borderRadius: "1px" }}
          color={
            element === choosedDong ? "btn btn-warning" : "btn btn-secondary"
          }
        >
          {element}
        </Button>
      </div>
    );
  });
  // map을 forEach로 바꾸면 왜 안될까??
  const uniqueDong = dongsOfGu.map((element, idx) => {
    if (element.indexOf(filterDongText) !== -1)
      return (
        <div key={idx}>
          <Button
            value={element}
            onClick={handlePopulations}
            style={{ width: "184px", borderRadius: "1px" }}
            color={
              element === choosedDong ? "btn btn-warning" : "btn btn-secondary"
            }
          >
            {element}
          </Button>
        </div>
      );
    return null;
  });

  return (
    <Col style={{ padding: "0px" }}>
      {filterDongText !== "" && searchedDongNames}
      {uniqueDong}
    </Col>
  );
};

export default SeoulDong;
