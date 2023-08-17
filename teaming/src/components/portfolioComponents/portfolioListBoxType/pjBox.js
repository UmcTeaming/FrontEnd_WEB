import React from "react";
import "../../../pages/PortfolioLinks/portfolioList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PjBox = () => {
  return (
    <Link to="/:id/project-files">
      <div className="box">
        <div className="thumbNail">
          <img className="thumbNailPic" src="/img/logo/loginMLogo.png" />
          <span className="progressing">
            <span className="circle">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </span>
        </div>
        <div className="projectInfo">
          <p className="h4">프로젝트 이름을 적어주세요</p>
          <br />
          <p className="p">2023.07.01~2023.08.29</p>
        </div>
      </div>
    </Link>
  );
};

export default PjBox;
