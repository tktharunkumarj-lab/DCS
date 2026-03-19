import React, { useState, useEffect } from "react";
import '../styles/dashboard.css';
import {
    MdNotifications,
    MdWarning,
    MdHome,
    MdAttachMoney,
    MdPerson,
    MdSend
} from "react-icons/md";
import mapImage from '../assets/map.jpeg';
const Dashboard = () => {
    const [time, setTime] = useState("");
    const [chatOpen, setChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hi! How can I help you with your claims today?", sender: "bot" }
    ]);

    // Real-time clock
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Chat handler
    const handleSend = () => {
        if (!message.trim()) return;

        // Add user message
        setMessages([...messages, { text: message, sender: "user" }]);

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Analyzing your claim... It appears there's insufficient information to process this request. Could you provide more details?",
                sender: "bot"
            }]);
        }, 1000);

        setMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="dashboard-container">

            {/* Status Bar */}


            {/* Header */}
            <div className="header-section">
                <div className="profile"></div>

                <div className="notif">
                    <MdNotifications />
                    <span className="badge">3</span>
                </div>

                <h3>Risk Dashboard Overview</h3>

                <div className="top-cards">
                    <div className="mini-card">
                        <p>Overall Risk Score</p>
                        <h2 className="green">Low</h2>
                    </div>

                    <div className="mini-card">
                        <p>Total Safe Areas</p>
                        <h2 className="green">85%</h2>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="content-section">

                {/* Heatmap */}
                <div className="heatmap-box">
                    <h3>Live Heat Map</h3>

                    <div className="map">
                        <img src={mapImage} alt="Regional Risk Map" className="map-image" />
                    </div>

                    <div className="legend">
                        <span><span className="dot green"></span> Low</span>
                        <span><span className="dot yellow"></span> Moderate</span>
                        <span><span className="dot red"></span> High</span>
                    </div>

                </div>

                {/* Issues */}
                <div className="issues-box">
                    <div className="issues-header">
                        <h3>Live Issues Overview</h3>
                    </div>

                    <div className="issues-scroll">

                        <div className="issue red">
                            <MdWarning /> Flooding in Velachery
                            <p>Today • 2 sec ago</p>
                        </div>

                        <div className="issue yellow">
                            <MdWarning /> Possible Strike in Anna Nagar
                            <p>Today • 1:10 PM</p>
                        </div>

                        <div className="issue yellow">
                            <MdWarning /> Traffic Congestion (T.Nagar)
                            <p>Yesterday • 6:30 PM</p>
                        </div>

                        <div className="issue yellow">
                            Calm Area (OMR)
                            <p>Yesterday • 4:11 PM</p>
                        </div>

                    </div>
                </div>

            </div>

            {/* Floating Chat Button */}
            <div className="floating-btn" onClick={() => setChatOpen(true)}>
                💬
            </div>

            {/* Chat Overlay - Now as proper chatbot */}
            {chatOpen && (
                <div className="chat-overlay">
                    <div className="chat-box chatbot">

                        <div className="chat-header">
                            <h3>Claims Assistant</h3>
                            <button className="close-chat" onClick={() => setChatOpen(false)}>×</button>
                        </div>

                        <div className="chat-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        <div className="chat-input-area">
                            <input
                                type="text"
                                placeholder="Type your claim here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button className="send-btn" onClick={handleSend}>

                                <MdSend size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {/* Bottom Nav */}
            <div className="bottom-nav">
                <div className="nav-item active">
                    <MdHome size={20} />
                    <span>Dashboard</span>
                </div>

                <div className="nav-item">
                    <MdAttachMoney size={20} />
                    <span>Pricing</span>
                </div>

                <div className="nav-item">
                    <MdPerson size={20} />
                    <span>Profile</span>
                </div>
            </div>

            <div className="home-indicator"></div>
        </div>
    );
};

export default Dashboard;