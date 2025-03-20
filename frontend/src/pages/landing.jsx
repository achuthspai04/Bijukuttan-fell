import React, { useState, useEffect, useRef } from 'react';
import './landing.css'; 

function Landing() {
    const [storyPhase, setStoryPhase] = useState(0);
    const [progress, setProgress] = useState(0);
    const maxPhases = 6; // Increased to 6 phases to add more story details
    const progressInterval = useRef(null);
    const emojiRef = useRef([]);
    
    // Initialize random emoji positions
    useEffect(() => {
        emojiRef.current = Array(10).fill().map(() => ({
            emoji: ['😂', '🤣', '💀', '😭', '🔥', '👀'][Math.floor(Math.random() * 6)],
            left: `${Math.random() * 80 + 10}%`,
            delay: Math.random() * 3
        }));
    }, []);
    
    // Auto-advance story with progress bar
    useEffect(() => {
        if (storyPhase < maxPhases) {
            progressInterval.current = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval.current);
                        setStoryPhase(prevPhase => prevPhase + 1);
                        setProgress(0);
                        return 0;
                    }
                    return prev + 0.5;
                });
            }, 50);
        }
        
        return () => clearInterval(progressInterval.current);
    }, [storyPhase]);
    
    const handleSkip = () => {
        clearInterval(progressInterval.current);
        setStoryPhase(maxPhases);
    };
    
    return(
        <div className="landing-page">
            <div className="header">
                <h1>BijuFall 3000 💩</h1>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
            
            {storyPhase < maxPhases && (
                <div className="story-progress">
                    <div className="story-progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
            )}
            
            <div className="story-container">
                {/* Scene 1: Introduction */}
                {storyPhase === 0 && (
                    <div className="story-scene active">
                        <h2>It was just another day at SSET...</h2>
                        <div className="animation-stage walking">
                            <div className="character">
                                <div className="character-head"></div>
                                <div className="character-body"></div>
                                <div className="character-arm-left"></div>
                                <div className="character-arm-right"></div>
                                <div className="character-leg-left"></div>
                                <div className="character-leg-right"></div>
                            </div>
                            <div className="crowd">
                                {Array(8).fill().map((_, index) => (
                                    <div key={index} className="crowd-person">
                                        <div className="crowd-head"></div>
                                        <div className="crowd-body" style={{ backgroundColor: 
                                            ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'][Math.floor(Math.random() * 5)] }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>Bijukuttan was heading to the mess, hungry AF after a long boring class...</p>
                    </div>
                )}
                
                {/* Scene 2: The Mess Path */}
                {storyPhase === 1 && (
                    <div className="story-scene active">
                        <h2>The mess path was muddy from the rain... 🌧️</h2>
                        <div className="animation-stage mess-path">
                            <div className="character">
                                <div className="character-head"></div>
                                <div className="character-body"></div>
                                <div className="character-arm-left"></div>
                                <div className="character-arm-right"></div>
                                <div className="character-leg-left"></div>
                                <div className="character-leg-right"></div>
                            </div>
                            <div className="mud-puddle"></div>
                            <div className="crowd">
                                {Array(8).fill().map((_, index) => (
                                    <div key={index} className="crowd-person" style={{
                                        transform: `translateX(${index % 2 === 0 ? '-20px' : '20px'})`
                                    }}>
                                        <div className="crowd-head"></div>
                                        <div className="crowd-body" style={{ backgroundColor: 
                                            ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'][Math.floor(Math.random() * 5)] }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>But he was too busy checking out his crush to notice the puddle ahead...</p>
                    </div>
                )}
                
                {/* Scene 3: The Fall */}
                {storyPhase === 2 && (
                    <div className="story-scene active">
                        <h2>Until DISASTER struck! 💀</h2>
                        <div className="animation-stage falling mud-splash">
                            <div className="character">
                                <div className="character-head"></div>
                                <div className="character-body"></div>
                                <div className="character-arm-left"></div>
                                <div className="character-arm-right"></div>
                                <div className="character-leg-left"></div>
                                <div className="character-leg-right"></div>
                            </div>
                            <div className="mud-puddle splash"></div>
                            <div className="phone">
                                <div className="phone-screen">
                                    <div className="phone-dot recording"></div>
                                </div>
                            </div>
                            <div className="crowd">
                                {Array(8).fill().map((_, index) => (
                                    <div key={index} className="crowd-person">
                                        <div className="crowd-head"></div>
                                        <div className="crowd-body" style={{ backgroundColor: 
                                            ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'][Math.floor(Math.random() * 5)] }}></div>
                                    </div>
                                ))}
                            </div>
                            {emojiRef.current.slice(0, 5).map((emoji, index) => (
                                <div 
                                    key={index} 
                                    className="emoji-reaction active" 
                                    style={{ 
                                        left: emoji.left, 
                                        bottom: '80px',
                                        animationDelay: `${emoji.delay}s`
                                    }}
                                >
                                    {emoji.emoji}
                                </div>
                            ))}
                        </div>
                        <p>He slipped in the dirty puddle and SPLAT - kundi-first in the mud! 🥴</p>
                    </div>
                )}
                
                {/* Scene 4: The Embarrassment */}
                {storyPhase === 3 && (
                    <div className="story-scene active">
                        <h2>The Embarrassment was BRUTAL 😭</h2>
                        <div className="animation-stage laughing embarrassed">
                            <div className="character muddy">
                                <div className="character-head" style={{ backgroundColor: '#ff6b6b' }}></div>
                                <div className="character-body"></div>
                                <div className="character-arm-left"></div>
                                <div className="character-arm-right"></div>
                                <div className="character-leg-left"></div>
                                <div className="character-leg-right"></div>
                            </div>
                            <div className="crowd">
                                {Array(8).fill().map((_, index) => (
                                    <div key={index} className="crowd-person">
                                        <div className="crowd-head"></div>
                                        <div className="crowd-body" style={{ backgroundColor: 
                                            ['#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#f1c40f'][Math.floor(Math.random() * 5)] }}></div>
                                    </div>
                                ))}
                            </div>
                            {emojiRef.current.slice(5).map((emoji, index) => (
                                <div 
                                    key={index} 
                                    className="emoji-reaction active" 
                                    style={{ 
                                        left: emoji.left, 
                                        bottom: '80px',
                                        animationDelay: `${emoji.delay}s`
                                    }}
                                >
                                    {emoji.emoji}
                                </div>
                            ))}
                        </div>
                        <p>Face covered in mud, dignity destroyed, his crush laughing... total annihilation.</p>
                    </div>
                )}
                
                {/* Scene 5: The Friends' Problem */}
                {storyPhase === 4 && (
                    <div className="story-scene active">
                        <h2>We witnessed everything... 👀</h2>
                        <div className="animation-stage friends-watching">
                            <div className="character muddy embarrassed">
                                <div className="character-head" style={{ backgroundColor: '#ff6b6b' }}></div>
                                <div className="character-body"></div>
                                <div className="character-arm-left"></div>
                                <div className="character-arm-right"></div>
                                <div className="character-leg-left"></div>
                                <div className="character-leg-right"></div>
                            </div>
                            <div className="friends">
                                {Array(3).fill().map((_, index) => (
                                    <div key={index} className="friend">
                                        <div className="friend-head"></div>
                                        <div className="friend-body"></div>
                                        <div className="thought-bubble">
                                            <div className="thought-text">Share</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>But we had NO WAY to share this EPIC fail with everyone at SSET! 😔</p>
                    </div>
                )}
                
                {/* Scene 6: The Realization */}
                {storyPhase === 5 && (
                    <div className="story-scene active">
                        <h2>That's when we had an idea... 💡</h2>
                        <div className="animation-stage revelation">
                            <div className="friends decision">
                                {Array(3).fill().map((_, index) => (
                                    <div key={index} className="friend">
                                        <div className="friend-head"></div>
                                        <div className="friend-body"></div>
                                        <div className="lightbulb"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>SSET needed a place for students to post peak brainrot moments!</p>
                    </div>
                )}
                
                {/* Final Scene: Call to Action */}
                {storyPhase === maxPhases && (
                    <div className="story-scene active">
                        <h2>Introducing BijuFall 3000</h2>
                        <p>The ultimate platform for sharing embarrassing college moments</p>
                        <p>Where your friends can immortalize your L's and celebrate your fails!</p>
                        <p>From cringe moments to legendary status - all in one app!</p>
                        <div className="social-proof active">
                            <button className="signup-btn" style={{ fontSize: '1.2rem', padding: '15px 30px' }}>Sign Up Now</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;