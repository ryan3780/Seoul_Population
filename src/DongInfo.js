import React from "react";
import { Col, Row, Button } from "reactstrap";

function DongInfo({ populations, label, name }) {
  const views = [];

  populations &&
    populations.forEach((element, idx) => {
      views.push(
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
  const labels = [];
  label &&
    label.forEach((element, idx) => {
      labels.push(
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
          {name}
        </Col>
        <Col md={{ size: 6 }} style={{ padding: "0px" }}>
          {labels}
        </Col>
        <Col md={{ size: 6 }} style={{ padding: "0px" }}>
          {views}
        </Col>
      </Row>
    </Col>
  );
}

export default DongInfo;
