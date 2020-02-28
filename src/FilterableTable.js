import React, { useEffect } from "react";
import SeoulGu from "./SeoulGu";
import SeoulDong from "./SeoulDong";
import { Col, Row } from "reactstrap";
import Statistics from "./Statistics";
import { Element } from "react-scroll";

function FilterableTable({ seoul_pops, label, filterGuText, filterDongText }) {
  // 각 구에 소속된 동
  const [dongsOfGu, setDongsOfGu] = React.useState([]);
  // 구 별 인구
  const [summaryOfGu, setSummaryOfGu] = React.useState();
  // 동 별 인구
  const [populationsOfDong, setPopulationsOfDong] = React.useState();
  // 중복 되지 않는 구
  const [selectedGu, setSelectedGu] = React.useState([]);
  // 동 별 값의 대한 라벨
  const [populationsOfDongLabel, setPopulationsOfDongLabel] = React.useState();
  // 구 별 값의 대한 라벨
  const [populationsOfGuLabel, setPopulationsOfGuLabel] = React.useState();
  //사용자가 선택한 동
  const [choosedDong, setChoosedDong] = React.useState();

  // 사용자가 다른 구를 선택하면 동의 대한 통계가 안나오게 하는 기능
  useEffect(() => {
    setPopulationsOfDong(null);
    setChoosedDong(null);
    setPopulationsOfDongLabel(null);
  }, [selectedGu]);

  // 사용자가 구를 검색하면 동이 사라지게 해주는 기능
  useEffect(() => {
    setDongsOfGu([]);
    setSelectedGu([]);
    setSummaryOfGu(null);
    setPopulationsOfGuLabel(null);
  }, [filterGuText]);

  // 사용자가 동을 검색하면 구가 사라지게 해주는 기능
  useEffect(() => {
    setSelectedGu([]);
    setDongsOfGu([]);
    setSummaryOfGu(null);
    setPopulationsOfGuLabel(null);
  }, [filterDongText]);

  // SeoulGU에서 GU를 집계하여 보여준다
  const getUniqueGuName = pops => {
    const filteredGu = [];

    let lastGu = null;
    pops &&
      pops.forEach(element => {
        if (element.gu !== lastGu) {
          if (element.gu.indexOf(filterGuText) === -1) {
            return;
          }
          filteredGu.push(element.gu);
        }
        lastGu = element.gu;
      });
    return filteredGu;
  };

  //동을 검색하기 위한 루핑
  const getUniqueDongName = pops => {
    const filteredDong = [];

    let lastDong = null;
    pops &&
      pops.forEach(element => {
        if (element.dong !== lastDong) {
          if (element.dong.indexOf(filterDongText) === -1) {
            return;
          }
          filteredDong.push(element.dong);
        }
        lastDong = element.dong;
      });
    return filteredDong;
  };
  const dongNames = getUniqueDongName(seoul_pops);
  const guNames = getUniqueGuName(seoul_pops);
  // gu에 해당하는 동 이름을 보여주고, 인구 통계도 보여줌니다.
  const handleDong = e => {
    const nameOfGu = e.target.value;
    setSelectedGu(nameOfGu);
    // if (e.metaKey) {
    //   e.target.className = "btn btn-warning";
    //   console.log("meta");
    // } else if (e.target.className === "btn btn-warning") {
    //   console.log("no meta");
    // }

    // 선택된 구의 해당하는 동을 가지고 있는 배열
    const separatedDong = [];
    // 선택된 동 인구의 수를 가지고 있는 배열
    const populationsOfDong = [];
    // 선택된 구 인구의 수를 가지고 있는 배열
    const totalGuPopulation = [];
    // 선택된 구 면적
    const totalGuArea = [];
    // 선택된 구 인구밀도
    const totalGuPopulationDensity = [];

    seoul_pops.forEach(element => {
      if (nameOfGu === element.gu) {
        separatedDong.push(element.dong);
        populationsOfDong.push(element.populations);
        totalGuPopulation.push(element.populations[0]);
        totalGuArea.push(element.populations[1]);
        totalGuPopulationDensity.push(element.populations[2]);
      }
    });
    setDongsOfGu(separatedDong);
    // 각 구의 "인구", "면적", "인구밀도"를 계산하는 기능
    const accumulator = (acc, cur) => acc + cur;
    const guPopulation = totalGuPopulation.reduce(accumulator);
    const guArea = Number(totalGuArea.reduce(accumulator).toFixed(3));
    const guPopulationDensity = totalGuPopulationDensity.reduce(accumulator);
    let labelOfPopulations = [];
    label.forEach(element => {
      labelOfPopulations.push(element);
    });
    setPopulationsOfGuLabel(labelOfPopulations);

    // 구의 인구, 면적, 인구 밀도를 1개의 객체로 만들기
    const totalGuSummary = [guPopulation, guArea, guPopulationDensity];
    // console.log(totalGuSummary);
    setSummaryOfGu(totalGuSummary);
  };

  // 선택한 동의 통계를 보여주는 기능
  const handlePopulations = nameOfDong => {
    let seperatedPopulations = null;
    setChoosedDong(nameOfDong);
    seoul_pops.forEach(element => {
      if (selectedGu === element.gu && nameOfDong === element.dong) {
        seperatedPopulations = element.populations;
      } else if (nameOfDong === element.dong) {
        seperatedPopulations = element.populations;
      }
    });
    setPopulationsOfDong(seperatedPopulations);

    // 각 동의 값 앞에 라벨을 붙이는 기능
    let labelOfPopulations = [];
    label.forEach(element => {
      labelOfPopulations.push(element);
    });
    setPopulationsOfDongLabel(labelOfPopulations);
  };

  return (
    <Row style={{ background: "#f5f5f5" }}>
      <Col md={{ size: 2 }} style={{ padding: "0px" }}>
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "320px",
            overflow: "scroll",
            borderRight: "solid 1px #c7c7c7"
            // marginBottom: "100px"
          }}
        >
          <SeoulGu
            guNames={guNames}
            onDongChange={handleDong}
            selectedGu={selectedGu}
          />
        </Element>
      </Col>
      <Col md={{ size: 2 }} style={{ textAlign: "center", padding: "0px" }}>
        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "320px",
            overflow: "scroll"
            // borderRight: "solid 1px #c7c7c7"
          }}
        >
          <Element name="firstInsideContainer">
            <SeoulDong
              dongsOfGu={dongsOfGu}
              onPopulationsChange={handlePopulations}
              choosedDong={choosedDong}
              filterDongText={filterDongText}
              dongNames={dongNames}
            />
          </Element>
        </Element>
      </Col>
      {/* 디자인으로 인해 statistics를 다시 살림 */}
      <Col md={{ size: 7 }} style={{ textAlign: "center" }}>
        <Statistics
          populationsOfDong={populationsOfDong}
          dongLabel={populationsOfDongLabel}
          guLabel={populationsOfGuLabel}
          summaryOfGu={summaryOfGu}
          gu={selectedGu}
          dong={choosedDong}
        />
      </Col>
    </Row>
  );
}

export default FilterableTable;
