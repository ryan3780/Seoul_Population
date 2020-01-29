import React from "react";
import { Col, Row, Button } from "reactstrap";

function Statistics({
  populationsOfDong,
  populationsOfDongLabel,
  populationsOfGuLabel,
  summaryOfGu,
  // 현자 사용자가 선택한 '구'를 화면에 텍스트로 보여준다
  // choosedGu,
  selectedGu,
  // 현자 사용자가 선택한 '동'을 화면에 텍스트로 보여준다
  choosedDong
}) {
  // console.log(selectedGu);
  // 구의 값에 대한 라벨을 붙여주는 코드
  const lableOfGu = [];
  populationsOfGuLabel &&
    populationsOfGuLabel.forEach((element, idx) => {
      lableOfGu.push(
        <div key={idx}>
          <Col>
            <Button
              color="warning"
              style={{
                width: "195px",
                borderRadius: "0px",
                padding: "0px",

                backgroundColor: "#dadbd1",
                borderColor: "#dadbd1"
              }}
            >
              {element}
            </Button>{" "}
          </Col>
        </div>
      );
    });

  // 선택한 구의 모든 정보 보여주는 코드
  const dataOfSelectedGu = [];
  summaryOfGu &&
    summaryOfGu.forEach((element, idx) => {
      dataOfSelectedGu.push(
        <div key={idx}>
          <Col>
            <Button
              style={{ width: "195px", borderRadius: "0px", padding: "0px" }}
            >
              {element}
            </Button>
          </Col>
        </div>
      );
    });
  // console.log(dataOfSelectedGu);

  const populationsOfDongStatistics = [];

  populationsOfDong &&
    populationsOfDong.forEach((element, idx) => {
      populationsOfDongStatistics.push(
        <div key={idx} style={{ padding: "0px" }}>
          <Button
            style={{ width: "148px", borderRadius: "0px", padding: "0px" }}
          >
            {element}
          </Button>
          <p></p>
        </div>
      );
    });

  // console.log(populationsOfDongLabel);

  // 동 별 값의 대한 라벨
  const labelForPopulationsOfDong = [];
  populationsOfDongLabel &&
    populationsOfDongLabel.forEach((element, idx) => {
      labelForPopulationsOfDong.push(
        <div key={idx}>
          <Button
            style={{
              width: "147px",
              borderRadius: "0px",
              padding: "0px",
              backgroundColor: "#dadbd1",
              borderColor: "#dadbd1"
            }}
            color="warning"
          >
            {element}
          </Button>
          <p></p>
        </div>
      );
    });

  return (
    <Col>
      <Row
        style={{
          width: "300px",
          marginLeft: "160px",
          height: "168px"
        }}
      >
        <Col
          md={{ size: 12 }}
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            paddingRight: "0px"
          }}
        >
          {choosedDong}
        </Col>
        <Col md={{ size: 6 }} style={{ padding: "0px" }}>
          {labelForPopulationsOfDong}
        </Col>
        <Col md={{ size: 6 }} style={{ padding: "0px" }}>
          {populationsOfDongStatistics}
        </Col>
      </Row>
      <Col
        md={{ size: 12 }}
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          paddingLeft: "30px",
          paddingRight: "0px"
        }}
      >
        {selectedGu}
      </Col>
      <Row xs="3" style={{ margin: "0px" }}>
        {lableOfGu}
      </Row>
      <Row xs="3" style={{ margin: "0px" }}>
        {" "}
        {dataOfSelectedGu}
      </Row>
    </Col>
  );
}

export default Statistics;
