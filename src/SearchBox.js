import React from "react";
import { Col, FormGroup, Button, Input } from "reactstrap";

function SearchBox({ searchTitle, handleFilterText, filterText }) {
  const onFilterText = e => {
    handleFilterText(e.target.value);
  };

  return (
    <Col md={2}>
      <FormGroup>
        <Button
          disabled
          color="info"
          style={{
            width: "176px",
            borderRadius: "1px"
          }}
        >
          {searchTitle}{" "}
        </Button>
        <Input
          style={{ marginTop: "1px" }}
          type="text"
          onChange={onFilterText}
          value={filterText}
        ></Input>{" "}
      </FormGroup>
    </Col>
  );
}

export default SearchBox;
