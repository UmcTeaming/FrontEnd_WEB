import React from "react";
import "../../../pages/OngoingProject/OngoingProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const OPjLine = ({ projects }) => {
  // projects가 정의되지 않았거나 배열이 아닌 경우를 확인합니다.
  if (!projects || !Array.isArray(projects)) {
    return null; // 또는 메시지를 표시하거나 플레이스홀더를 표시할 수 있습니다.
  }
  
  return (
    <div className="elementLineView">
      {projects.map((project) => (
        <Link
          key={project.projectId}
          to={`/${project.projectId}/project-files`}
        >
          <div className="lineElement">
            <div className="titleNdate">
              <span className="title">{project.projectName}</span>
              <span className="date">
                {project.projectStartDate} ~ {project.projectEndDate}
              </span>
            </div>
            <div className="starNcircle">
              <span className="circle2">
                <FontAwesomeIcon icon={faCircle} color="#527FF5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OPjLine;
