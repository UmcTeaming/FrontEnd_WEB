import React from 'react';
import "../../../pages/OngoingProject/OngoingProject.css";
import OPjLine from './opjLine';

const OPjLines = ({ projects }) => {
    return (
        <div className="elementLineView">
            <OPjLine projects={projects} />
        </div>       
    );
};

export default OPjLines;
