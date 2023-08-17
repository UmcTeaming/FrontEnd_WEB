import React from 'react';
import "../../../pages/PortfolioLinks/portfolioList.css"

import PjLineTemplate from './pjLine';

const PjLines = ({ projects }) => {
    return (
        <div className="elementLineView">
            <PjLineTemplate projects={projects} />
        </div>       
    );
};

export default PjLines;
