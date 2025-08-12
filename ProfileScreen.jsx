import React, { useState } from 'react';

function ProfileScreen({ active }) {
    return (
        <div className="screen profile-screen active">
            <div className="header">
                <h1>User Profile</h1>
                <p>Manage your account settings</p>
            </div
            
            <div className="profile-dashboard">
                <div className="card">
                    <div className="card-title">Your Stats</div>
                    <div className="stats-grid">
                        <div className="stat">
                            <div className="stat-value">6</div>
                            <div className="stat-label">Months Tracked</div>
                        </div>
                        <div className="stat">
                            <div className="stat-value">142</div>
                            <div className="stat-label">Symptoms Logged</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="settings-list">
                <div className="card">
                    <div className="card-title">Account Settings</div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h3>Privacy Settings</h3>
                            <p>Control your information</p>
                        </div>
                        <div className="setting-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                    </div>
                    <div className="setting-item">
                        <div className="setting-info">
                            <h3>Notification Settings</h3>
                            <p>Manage reminders</p>
                        </div>
                        <div className="setting-icon">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
