import React, { useState } from 'react';

function HomeScreen({ active }) {
    const [activePhase, setActivePhase] = useState('menstrual');
    
    return (
        <div className="screen home-screen active">
            <div className="header">
                <h1>Period & Body Literacy Companion</h1>
                <p>Your personal guide to understanding your body</p>
            </div>
            
            <div className="cycle-phase">
                <div className="card">
                    <div className="card-title">Current Cycle Phase</div>
                    <div className="cycle-phase-display">
                        <h2>{activePhase.charAt(0).toUpperCase() + activePhase.slice(1)}</h2>
                        <p>Your hormone levels are {activePhase === 'menstrual' ? 'low' : activePhase === 'follicular' ? 'rising' : 'high'}</p>
                    </div>
                </div>
            </div>
            
            <div className="symptom-tracker">
                <div className="card">
                    <div className="card-title">Log Symptoms</div>
                    <div className="symptom-options">
                        {[ 'Cramps', 'Headache', 'Fatigue', 'Bloating', 'Mood Swings' ].map((symptom) => (
                            <div key={symptom} className="symptom active">{symptom}</div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="feature-grid">
                <div className="feature-card" onClick={() => console.log('Learn clicked')}>
                    <i className="fas fa-book"></i>
                    <h3>Cycle Science</h3>
                    <p>Learn about your body</p>
                </div>
                <div className="feature-card" onClick={() => console.log('Community clicked')}>
                    <i className="fas fa-users"></i>
                    <h3>Community</h3>
                    <p>Connect with others</p>
                </div>
                <div className="feature-card" onClick={() => console.log('Products clicked')}>
                    <i className="fas fa-shopping-bag"></i>
                    <h3>Products</h3>
                    <p>Find what works for you</p>
                </div>
                <div className="feature-card" onClick={() => console.log('Support clicked')}>
                    <i className="fas fa-life-ring"></i>
                    <h3>Support</h3>
                    <p>Get help when needed</p>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
