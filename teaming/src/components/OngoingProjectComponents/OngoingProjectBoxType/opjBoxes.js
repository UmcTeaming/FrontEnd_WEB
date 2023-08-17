import React from 'react';
import "../../../pages/OngoingProject/OngoingProject.css";
import OPjBox from './opjBox';

const OPjBoxes = ({ projects }) => {
    return (
        <div className="line">
            {projects.map(project => (
                <OPjBox key={project.projectId} project={project} />
            ))}
        </div>
    );
};

export default OPjBoxes;
