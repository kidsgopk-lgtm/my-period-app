import React, { useState } from 'react';

function App() {
    const [activeScreen, setActiveScreen] = useState('home');
    
    return (
        <div className="app-container">
            <nav className="nav">
                <NavItem icon="home" text="Home" onClick={() => setActiveScreen('home')} active={activeScreen === 'home'} />
                <NavItem icon="book" text="Learn" onClick={() => setActiveScreen('learn')} active={activeScreen === 'learn'} />
                <NavItem icon="users" text="Community" onClick={() => setActiveScreen('community')} active={activeScreen === 'community'} />
                <NavItem icon="user" text="Profile" onClick={() => setActiveScreen('profile')} active={activeScreen === 'profile'} />
                <NavItem icon="th" text="More" onClick={() => setActiveScreen('more')} active={activeScreen === 'more'} />
            </nav>
            
            <HomeScreen active={activeScreen === 'home'} />
            <LearnScreen active={activeScreen === 'learn'} />
            <CommunityScreen active={activeScreen === 'community'} />
            <ProfileScreen active={activeScreen === 'profile'} />
            <MoreScreen active={activeScreen === 'more'} />
        </div>
    );
}

function NavItem({ icon, text, onClick, active }) {
    return (
        <a 
            href="#"
            onClick={(e) => { e.preventDefault(); onClick(); }}
            className={`nav-item ${active ? 'active' : ''}`}
        >
            <i className={`fas fa-${icon}`}></i>
            <span>{text}</span>
        </a>
    );
}

// Component imports would go here
import HomeScreen from './components/HomeScreen';
import LearnScreen from './components/LearnScreen';
import CommunityScreen from './components/CommunityScreen';
import ProfileScreen from './components/ProfileScreen';
import MoreScreen from './components/MoreScreen';

ReactDOM.render(<App />, document.getElementById('root'));
