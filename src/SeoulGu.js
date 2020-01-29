import React from "react";
import { Col, Button } from "reactstrap";

const SeoulGu = ({ guNames, onDongChange, selectedGu }) => {
  const handleDong = e => {
    onDongChange(e);
  };

  const uniqueSeoulGu = guNames.map((element, idx) => (
    <div key={idx}>
      <Button
        onClick={handleDong}
        value={element}
        style={{
          width: "184px",
          borderRadius: "1px"
        }}
        color={element === selectedGu ? "btn btn-warning" : "btn btn-secondary"}
      >
        {element}
      </Button>
    </div>
  ));

  return <Col style={{ padding: "0px" }}>{uniqueSeoulGu}</Col>;
};

export default SeoulGu;
