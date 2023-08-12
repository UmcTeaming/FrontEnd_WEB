import React from 'react';
import "./portfolioList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import PjBoxTemplate from '../../components/portfolioComponents/portfolioListBoxType/pjBoxes.js';
import PjLineTemplate from '../../components/portfolioComponents/portfolioListLineType/pjLines.js';
import styled from "styled-components";

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



const  PortfolioList = () => {
  const [viewBox, setViewBox] = useState(true)

  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const handleClick = () => {
    setActive(!active);
    //setActive2(active2);
  };
  const handleClick2 = () => {
    //setActive(active);
    setActive2(!active2);
  };

  return (
    <>
      {/* main */}
      <div className="main">
        <div className="temp">
          <div className="component">
            <div className="route">
              <span>
                <Link to="/home">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>           
                <FontAwesomeIcon icon={faChevronRight} />
                포트폴리오
              </span>
            </div>

            <div className="Name">
                <br/><br/>
                <span className="userName">카리나님의 포트폴리오</span><br/>
                <span className="ment">지금까지의 프로젝트를 한눈에 모아보세요!</span>
            </div>

            
          </div>

          <div className="element">         
            <div className="list">
              <div className="howToView">
              
                  {/* 
                  onClick = {() => {setViewBox(false); {handleClick()};}}
                              
                  style={{ stroke: active ? "red" : "green"}}
                  >          
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // stroke={active ? "#FFD008" : "#FAFAFA80"}
                    viewBox="0 0 21 21"
                    stroke-width="2"
                    width="21px"
                    height="23px"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button> */}
              <button className='lineBtn'>
              <ListBtn onClick={() => setViewBox(false)} isActive={!viewBox}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 20"
              stroke-width="2"
              class="w-6 h-6"
              width="17px"
              height="15px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </ListBtn></button>
              {/* 
                  onClick={() => {setViewBox(true); {handleClick2()};}}
                    style={{ fill: active2 ? "pink" : "blue"}}
                    >                
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="20px"
                      height="20px"
                      // fill={active ? "#FFD008" : "#FAFAFA80"}
                    >
                    <path
                      fillRule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clipRule="evenodd"
                    />
                    </svg>
              </button> */}
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
          </CardBtn></button>
              </div>
              { viewBox ? <PjBoxTemplate/> : <PjLineTemplate/> }
            </div>
              
          </div>

        </div>
        
      
      </div>
  
    </>  
  );
};

export default PortfolioList;