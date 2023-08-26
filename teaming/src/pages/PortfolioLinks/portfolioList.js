import React, { useState, useEffect } from 'react';
import "./portfolioList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PjBoxes from '../../components/portfolioComponents/portfolioListBoxType/pjBoxes.js';
import PjLines from '../../components/portfolioComponents/portfolioListLineType/pjLines.js';

import styled from "styled-components";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { memberIdState, nickNameState } from "../../components/atom";
import { useQuery, useQueryClient } from 'react-query';
import { fetchPortfolioData  } from "./usePortfolio";

const CardBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    fill: ${(props) => (props.isActive ? "rgb(255, 208, 8)" : "rgba(250, 250, 250, 0.5)")};
  }
`;

const ListBtn = styled.div`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  svg {
    stroke: ${(props) => (props.isActive ? "rgb(255, 208, 8)" : "rgba(250, 250, 250, 0.5)")};
  }
`;

const PortfolioList = () => {
    const [viewBox, setViewBox] = useState(true);
    const [memberId] = useRecoilState(memberIdState);
    const nickName = useRecoilState(nickNameState);
    const { data: portfolioData, refetch } = useQuery(
        ["portfolio", memberId],
        () => fetchPortfolioData(memberId),console.log("useQuery 실행"),
        {
          enabled: true
        }
      );
      
    useEffect(() => {
        async function fetchData() {
            const response = await fetchPortfolioData(memberId);
            console.log(response); // response로부터 데이터 확인
            // if (portfolioData.length < response.length) 
            if (portfolioData && portfolioData.length < response.length) 
            {
                console.log("새로운 데이터가 추가");        
                refetch(); // 데이터를 다시 불러옴
            }
        }
        console.log("데이터를 비동기적으로 불러옴");
        fetchData(); // 데이터를 비동기적으로 불러옴
    }, [memberId]);
    
    return (
        <>
            <div className="main">
                <div className="temp">
                    <div className="component">
                        <div className="route">
                            <span>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHouse} />
                                </Link>           
                                <FontAwesomeIcon icon={faChevronRight} />
                                포트폴리오
                            </span>
                        </div>

                        <div className="Name">
                            <br />
                            <span className="userName">{nickName}님의 포트폴리오</span><br />
                            <span className="ment">지금까지의 프로젝트를 한눈에 모아보세요!</span>
                        </div>
                    </div>

                    <div className="element">
                        <div className="list">
                            <div className="howToView">
                                <button className='lineBtn'>
                                    <ListBtn onClick={() => setViewBox(false)} isActive={!viewBox}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 15 21"
                                            strokeWidth="2"
                                            className="w-6 h-6"
                                            width="5px"
                                            height="5px"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                    </ListBtn>
                                </button>
                                <button className='boxBtn'>
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
                                {portfolioData ? (
                                    viewBox ? 
                                    <PjBoxes projects={portfolioData} /> 
                                    : 
                                    <PjLines projects={portfolioData} />) 
                                    : 
                                (
                                    // 데이터가 없는 경우에 대한 처리
                                    <div>Loading...</div>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioList;
