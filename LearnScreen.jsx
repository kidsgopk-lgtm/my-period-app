import React, { useState } from 'react';

function LearnScreen({ active }) {
    return (
        <div className="screen learn-screen active">
            <div className="header">
                <h1>Cycle Science Hub</h1>
                <p>Learn about your body</p>
            </div
            
            <div className="module-list">
                {[ 'Educational Videos', 'Body Science', 'Cycle Phases', 'Hormones', 'Period Products', 'FAQ' ].map((module, index) => (
                    <div key={index} className="module">
                        <div className="module-icon">
                            <i className="fas fa-play-circle"></i>
                        </div>
                        <div className="module-content">
                            <h3>{module}</h3>
                            <p>Learn more about {module.toLowerCase()}</p>
                        </div>
                        <div className="module-arrow">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LearnScreen;
