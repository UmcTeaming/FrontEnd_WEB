import React from 'react';
import "../../../pages/portfolioList.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const  PjBox = () => {
    return (
      
        <div className="box">
          <div className="thumbNail">
            <span className="progressing">
              <span className="circle"><FontAwesomeIcon icon={faCircle} /></span>
            </span>
          </div>
          <div className="projectInfo">
            <p className='h4'>프로젝트 이름을 적어주세요</p>
            <br/>
            <p className='p'>2023.07.01~2023.08.29</p>
          </div>
        </div>

        
    );
};

export default PjBox;