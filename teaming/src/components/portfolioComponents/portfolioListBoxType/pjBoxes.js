import React from "react";
import "../../../pages/PortfolioLinks/portfolioList.css";
import PjBox from "./pjBox";

const PjBoxes = ({ projects }) => {
  return (
    <div className="line">
      {projects.map((project) => (
        <PjBox key={project.projectId} project={project} />
      ))}
    </div>
  );
};

export default PjBoxes;
