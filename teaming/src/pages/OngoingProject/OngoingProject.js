import React from "react";
import "./OngoingProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import PjBoxTemplate from "../../components/portfolioComponents/portfolioListBoxType/pjBoxes.js";
import PjLineTemplate from "../../components/portfolioComponents/portfolioListLineType/pjLines.js";

export const OngoingProject = () => {
  const [viewBox, setViewBox] = useState(true);

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const handleClick = () => {
    setActive(!active);
    setActive2(active2);
  };
  const handleClick2 = () => {
    setActive(!active);
    setActive2(active2);
  };

  return (
    <>
      {/* main */}
      <div className="main">
        <div className="temp">
          <div className="component">
            <div className="route">
              <span>
                <FontAwesomeIcon icon={faHouse} />
                <FontAwesomeIcon icon={faChevronRight} />
                진행 중인 프로젝트
              </span>
            </div>

            <div className="Name">
              <br />
              <br />
              <span className="userName">카리나님의 팀 프로젝트 </span>
              <br />
              <span className="ment">
                현재 진행 중인 프로젝트를 한 눈에 모아보세요!
              </span>
            </div>
          </div>

          <div className="element">
            <div className="list">
              <div className="howToView">
                <button
                  className="lineBtn"
                  onClick={() => {
                    setViewBox(false);
                    {
                      handleClick();
                    }
                  }}
                  style={{
                    color: active2 ? "#FAFAFA80" : "#FFD008",
                    color: active ? "#FFD008" : "#FAFAFA80",
                  }}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <button
                  className="boxBtn"
                  onClick={() => {
                    setViewBox(true);
                    {
                      handleClick2();
                    }
                  }}
                  style={{
                    color: active2 ? "#FFD008" : "#FAFAFA80",
                    color: active ? "#FAFAFA80" : "#FFD008",
                  }}
                >
                  <FontAwesomeIcon icon={faBorderAll} />
                </button>
              </div>
              {viewBox ? <PjBoxTemplate /> : <PjLineTemplate />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
