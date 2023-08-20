import React from "react";
import "../../../pages/OngoingProject/OngoingProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const OPjLine = ({ projects }) => {

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
