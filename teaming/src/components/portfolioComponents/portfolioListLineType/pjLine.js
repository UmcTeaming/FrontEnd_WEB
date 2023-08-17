import React from 'react';
import "../../../pages/PortfolioLinks/portfolioList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const PjLine = ({ projects }) => {
    return (
        <div className="elementLineView">
            {projects.map(project => (
                <Link key={project.projectId} to={`/${project.projectId}/project-files`}>
                    <div className="lineElement">     
                        <div className="titleNdate">
                            <span className="title">{project.projectName}</span>
                            <span className="date">{project.projectStartDate} ~ {project.projectEndDate}</span>
                        </div>
                        <div className="starNcircle">
                            <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                            <span className="circle2"><FontAwesomeIcon icon={faCircle} /></span>
                        </div> 
                    </div>
                </Link>
            ))}
        </div>       
    );
};

export default PjLine;
