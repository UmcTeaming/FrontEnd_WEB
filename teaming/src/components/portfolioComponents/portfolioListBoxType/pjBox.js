import React from "react";
import "../../../pages/PortfolioLinks/portfolioList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PjBox = ({ project }) => {
  const defaultImage = "/img/projectImg/project_img.jpg"; // 기본 이미지 경로 설정
  return (
    <Link to={`/${project.projectId}/final-files`}>
      <div className="box">
        <div className="thumbNail">
          <img
            className="thumbNailPic"
            src={project.projectImage || defaultImage} // 이미지가 null일 때 기본 이미지 사용
            alt={project.projectName}
          />
          <span className="progressing">
            <span className="circle">
              <FontAwesomeIcon icon={faCircle} />
            </span>
          </span>
        </div>
        <div className="projectInfo">
          <p className="h4">{project.projectName}</p>
          <br />
          <p className="p">
            {project.projectStartDate}~{project.projectEndDate}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PjBox;
