import React from "react";
import { Row, Form } from "reactstrap";
import SearchBox from "./SearchBox";

function SearchBar({
  handleFilterGuText,
  handleFilterDongText,
  filterDongText,
  filterGuText
}) {
  return (
    <Form>
      <Row form>
        <SearchBox
          searchTitle={"구"}
          filterText={filterGuText}
          handleFilterText={handleFilterGuText}
        ></SearchBox>
        <SearchBox
          searchTitle={"동"}
          filterText={filterDongText}
          handleFilterText={handleFilterDongText}
        ></SearchBox>
      </Row>
    </Form>
  );
}

export default SearchBar;
