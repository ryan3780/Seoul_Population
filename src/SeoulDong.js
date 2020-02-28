import React from "react";
import { Col, Button } from "reactstrap";
// import Statistics from "./Statistics";

// 서울시 통계 자료에서 각 '구'의 해당하는 '동'의 데이터를 보여주는 컴포넌트
const SeoulDong = ({
  dongsOfGu,
  onPopulationsChange,
  choosedDong,
  filterDongText,
  dongNames
}) => {
  // 해당 동의 이름이 적혀 있는 버튼을 누르면 버튼의 'value'를 onPopulationsChange로 값을 넘겨 준다.
  const handlePopulations = e => {
    onPopulationsChange(e.target.value);
  };
  // console.log(dongNames);

  // 반복문으로 중복되는 자료를 처리 하고 화면에 '동'을 출력하는 기능
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
  // 중복되지 않는 동들을 검색할 수 있게 하는 기능
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
