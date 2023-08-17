import React, { useEffect } from "react";
import "./OngoingProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import PjBoxTemplate from "../../components/portfolioComponents/portfolioListBoxType/pjBoxes.js";
import PjLineTemplate from "../../components/OngoingProjectComponents/OngoingProjectLineType/opjLines";

import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState, nickNameState } from "../../components/atom";

import "../PortfolioLinks/portfolioList.css";
import OpjBox from "../../components/OngoingProjectComponents/OngoingProjectBoxType/opjBox";

const CardBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    fill: ${(props) => (props.isActive ? "rgb(255, 208, 8)" : "#808080")};
  }
`;

const ListBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    stroke: ${(props) => (props.isActive ? "rgb(255, 208, 8)" : "#808080")};
  }
`;

export const OngoingProject = () => {
  const [viewBox, setViewBox] = useState(true);

  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [nickName, setNickName] = useRecoilState(nickNameState);

  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/member/${memberId}/progressProjects`
      )
      .then((res) => {
        console.log(res);
        setProjects(res.data.data.progressProjects);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* main */}
      <div className="main bg">
        <div className="temp">
          <div className="component">
            <div className="route oproute">
              <span>
                <Link to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
                <FontAwesomeIcon icon={faChevronRight} />
                진행 중인 프로젝트
              </span>
            </div>

            <div className="Name opname">
              <br />
              <br />
              <span className="userName opusername">
                {nickName}님의 팀 프로젝트
              </span>
              <br />
              <span className="ment opment">
                현재 진행 중인 프로젝트를 한 눈에 모아보세요!
              </span>
            </div>
          </div>

          <div className="element">
            <div className="list">
              <div className="howToView">
                <button className="lineBtn">
                  <ListBtn
                    onClick={() => setViewBox(false)}
                    isActive={!viewBox}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 15 21"
                      stroke-width="2"
                      class="w-6 h-6"
                      width="5px"
                      height="5px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </ListBtn>
                </button>
                <button className="boxBtn">
                  <CardBtn onClick={() => setViewBox(true)} isActive={viewBox}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-5 h-5"
                      width="15px"
                      height="15px"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </CardBtn>
                </button>
              </div>
              {viewBox ? (
                <div className="line">
                  {projects?.map((project) => (
                    <OpjBox key={project.projectId} project={project} />
                  ))}
                </div>
              ) : (
                <div className="elementLineView">
                  <PjLineTemplate projects={projects} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
