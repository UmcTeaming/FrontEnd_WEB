import React from 'react';
import "../../../pages/PortfolioLinks/portfolioList.css"
import PjLine from './pjLine';

const PjLines = ({ projects }) => {
    return (
        <div className="elementLineView">
            <PjLine projects={projects} />
        </div>       
    );
};

export default PjLines;
