import React, { useState } from 'react';

function CommunityScreen({ active }) {
    return (
        <div className="screen community-screen active">
            <div className="header">
                <h1>Community Circles</h1>
                <p>A safe space to share and learn</p>
            </div>
            
            <div className="topics">
                <div className="card">
                    <div className="card-title">Discussion Topics</div>
                    <div className="topic-grid">
                        {[ 'First Period Stories', 'Symptom Talk', 'Ask Anything', 'Self-Care Tips' ].map((topic) => (
                            <div key={topic} className="topic active">{topic}</div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="post-composer">
                <div className="card">
                    <input 
                        type="text" 
                        placeholder="Share your thoughts..."
                        className="form-input"
                    />
                    <button className="btn btn-primary">Post</button>
                </div>
            </div>
            
            <div className="posts">
                <div className="card">
                    <div className="post">
                        <div className="post-header">
                            <div className="avatar">
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="post-info">
                                <h4>Anonymous User</h4>
                                <p>2 hours ago</p>
                            </div>
                        </div>
                        <div className="post-content">
                            Just got my first period and I'm feeling overwhelmed. Any tips for managing cramps at school?
                        </div>
                        <div className="post-actions">
                            <div className="post-action">
                                <i className="fas fa-heart"></i>
                                <span>24</span>
                            </div>
                            <div className="post-action">
                                <i className="fas fa-comment"></i>
                                <span>12</span>
                            </div>
                            <div className="post-action">
                                <i className="fas fa-flag"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="post">
                    <div className="post-header">
                        <div className="avatar">
                            <i className="fas fa-user-circle"></i>
                            </div>
                        <div className="post-info">
                            <h4>Anonymous User</h4>
                            <p>1 day ago</p>
                        </div>
                    </div>
                    <div className="post-content">
                        Does anyone else get really bad headaches before their period? What helps you?
                    </div>
                    <div className="post-actions">
                        <div className="post-action">
                            <i className="fas fa-heart"></i>
                            <span>18</span>
                        </div>
                        <div className="post-action">
                            <i className="fas fa-comment"></i>
                            <span>7</span>
                            </div>
                        <div className="post-action">
                            <i className="fas fa-flag"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityScreen;
