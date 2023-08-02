import React from 'react';
import "./portfolioList.css";
// import 'PortfolioComponents/portfolioList/portfolioList.css';
// import "PortfolioComponents/fonts/font.css";
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

import PjBoxTemplate from '../../components/portfolioComponents/portfolioListBoxType/pjBoxes.js';
import PjLineTemplate from '../../components/portfolioComponents/portfolioListLineType/pjLines.js';


const  PortfolioList = () => {
  const [viewBox, setViewBox] = useState(true)

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
                  <button className='lineBtn'
                onClick = {() => {setViewBox(false); {handleClick()};}}
                  style={{ color: active2 ? "#FAFAFA80" : "#FFD008", color: active ? "#FFD008" : "#FAFAFA80"}}>                   
                <FontAwesomeIcon icon={faBars} />
              </button>
              <button className='boxBtn'
                  onClick={() => {setViewBox(true); {handleClick2()};}}
                    style={{ color: active2 ? "#FFD008" : "#FAFAFA80", color: active ? "#FAFAFA80" : "#FFD008"}}>                
                <FontAwesomeIcon icon={faBorderAll} />
              </button>
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