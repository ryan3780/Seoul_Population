import React from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./Header";
import FilterableTable from "./FilterableTable";
import SearchBar from "./SearchBar";
import { SEOULPOPULATION, populationsLabels } from "./SeoulPopulation";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [filterGuText, setFilterGuText] = React.useState("");
  const [filterDongText, setFilterDongText] = React.useState("");

  const handleFilterGuText = gu => {
    setFilterGuText(gu);
  };

  const handleFilterDongText = dong => {
    setFilterDongText(dong);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }} style={{ textAlign: "center" }}>
            <Header />
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 12 }} style={{ textAlign: "center" }}>
            <SearchBar
              handleFilterGuText={handleFilterGuText}
              handleFilterDongText={handleFilterDongText}
              filterGuText={filterGuText}
              filterDongText={filterDongText}
            />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 12 }} style={{ textAlign: "center" }}>
            <Col
              md={{ size: 12 }}
              style={{
                background: "#f5f5f5",
                borderTop: "solid 3px #555",
                borderBottom: "solid 1px #dbdbdd"
              }}
            >
              <Row>
                <Col md={{ size: 2 }} style={{ textAlign: "center" }}>
                  구
                </Col>
                <Col md={{ size: 2 }} style={{ textAlign: "center" }}>
                  동
                </Col>
                <Col md={{ size: 7 }} style={{ textAlign: "center" }}>
                  통계
                </Col>
              </Row>
            </Col>
            <Col
              style={{
                borderBottom: "solid 1px #c7c7c7"
              }}
            >
              <FilterableTable
                seoul_pops={SEOULPOPULATION}
                label={populationsLabels}
                filterGuText={filterGuText}
                filterDongText={filterDongText}
              />
            </Col>
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
}

export default App;
