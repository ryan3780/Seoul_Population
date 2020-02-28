import React from "react";
import { Col } from "reactstrap";
import DongInfo from "./DongInfo";
import GuInfo from "./GuInfo";

function Statistics({
  populationsOfDong,
  dongLabel,
  guLabel,
  summaryOfGu,
  // 현자 사용자가 선택한 '구'를 화면에 텍스트로 보여준다
  // choosedGu,
  gu,
  // 현자 사용자가 선택한 '동'을 화면에 텍스트로 보여준다
  dong
}) {
  return (
    <Col>
      <DongInfo populations={populationsOfDong} label={dongLabel} name={dong} />
      <GuInfo populations={guLabel} label={summaryOfGu} name={gu} />
    </Col>
  );
}

export default Statistics;
