import React, { useState } from 'react';

function MoreScreen({ active }) {
    return (
        <div className="screen more-screen active">
            <div className="header">
                <h1>More Features</h1>
                <p>Explore additional tools and resources</p>
            </div>
            
            <div className="more-grid">
                <div className="more-item" onClick={() => console.log('Calendar')}>
                    <i className="fas fa-calendar-alt"></i>
                    <p>Calendar</p>
                </div>
                <div className="more-item" onClick={() => console.log('Journal')}>
                    <i className="fas fa-book"></i>
                    <p>Journal</p>
                </div>
                <div className="more-item" onClick={() => console.log('Wellness')}>
                    <i className="fas fa-heart"></i>
                    <p>Wellness</p>
                </div>
                <div className="more-item" onClick={() => console.log('Products')}>
                    <i className="fas fa-shopping-bag"></i>
                    <p>Products</p>
                </div>
                <div className="more-item" onClick={() => console.log('Support')}>
                    <i className="fas fa-life-ring"></i>
                    <p>Support</p>
                </div>
            </div>
        </div>
    );
}

export default MoreScreen;
