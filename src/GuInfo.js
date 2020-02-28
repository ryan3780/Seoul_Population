import React from "react";
import { Col, Row, Button } from "reactstrap";

function GuInfo({ populations, label, name }) {
  // console.log(selectedGu);
  // 구의 값에 대한 라벨을 붙여주는 코드
  const labels = [];
  label &&
    label.forEach((element, idx) => {
      labels.push(
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
  const views = [];
  populations &&
    populations.forEach((element, idx) => {
      views.push(
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

  return (
    <Col>
      <Col
        md={{ size: 12 }}
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          paddingLeft: "30px",
          paddingRight: "0px"
        }}
      >
        {name}
      </Col>
      <Row xs="3" style={{ margin: "0px" }}>
        {labels}
      </Row>
      <Row xs="3" style={{ margin: "0px" }}>
        {" "}
        {views}
      </Row>
    </Col>
  );
}

export default GuInfo;
