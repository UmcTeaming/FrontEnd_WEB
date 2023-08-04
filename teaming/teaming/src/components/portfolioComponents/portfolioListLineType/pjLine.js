import React from 'react';
import "../../../pages/PortfolioLinks/portfolioList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const  PjLine = () => {
    return (
      
        <div className="lineElement">
          
          <div className="titleNdate">
            <span className="title">UMC 파이널 프로젝트 Teaming</span>
            <span className="date">2023. 07. 01 ~ 2023. 08. 29</span>
          </div>
          <div className="starNcircle">
            <span className="star"><FontAwesomeIcon icon={faStar} /></span>
            <span className="circle2"><FontAwesomeIcon icon={faCircle} /></span>
          </div> 
        </div>
        
    );
};

export default PjLine;